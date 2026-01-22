import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export interface DocData {
    id: string; // This will be the relative path without extension
    title: string;
    order: number;
    category: string;
    contentHtml?: string;
    description?: string;
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

export function getAllDocsData(): DocData[] {
    if (!fs.existsSync(docsDirectory)) {
        return [];
    }

    const filePaths = getAllFiles(docsDirectory).filter(f => f.endsWith('.md'));

    const allDocsData = filePaths.map((fullPath) => {
        const relativePath = path.relative(docsDirectory, fullPath);
        // Normalize the path and replace backslashes
        const normalizedPath = relativePath.replace(/\\/g, '/');
        // The ID should be the undecoded path for file system lookup, 
        // but for URLs, we need to handle special characters.
        const id = normalizedPath.replace(/\.md$/, '');
        const categoryPath = path.dirname(normalizedPath);
        const category = categoryPath === '.' ? 'General' : categoryPath;

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            category,
            order: 0,
            title: id.split('/').pop() || id,
            ...(matterResult.data as { order?: number; title?: string; description?: string }),
        };
    });

    return allDocsData.sort((a, b) => {
        if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
        }
        return a.order - b.order;
    });
}

export async function getDocData(id: string): Promise<DocData | null> {
    // URLデコード（日本語パス対応）
    const decodedId = decodeURIComponent(id);
    const fullPath = path.join(docsDirectory, `${decodedId}.md`);

    if (!fs.existsSync(fullPath)) {
        // デコードなしでも試行
        const fallbackPath = path.join(docsDirectory, `${id}.md`);
        if (fs.existsSync(fallbackPath)) {
            return getDocDataFromFile(fallbackPath, id);
        }
        return null;
    }

    return getDocDataFromFile(fullPath, decodedId);
}

async function getDocDataFromFile(fullPath: string, id: string): Promise<DocData> {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const categoryPath = path.dirname(id);
    const category = categoryPath === '.' ? 'General' : categoryPath;

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        category,
        order: 0,
        title: id.split('/').pop() || id,
        ...(matterResult.data as { order?: number; title?: string; description?: string }),
    };
}
