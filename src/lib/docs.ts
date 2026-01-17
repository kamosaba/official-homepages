import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export interface DocData {
    id: string;
    title: string;
    order: number;
    contentHtml?: string;
    description?: string;
}

export function getAllDocsData(): DocData[] {
    if (!fs.existsSync(docsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(docsDirectory);
    const allDocsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(docsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            order: 0,
            title: id,
            ...(matterResult.data as { order?: number; title?: string; description?: string }),
        };
    });

    return allDocsData.sort((a, b) => a.order - b.order);
}

export async function getDocData(id: string): Promise<DocData | null> {
    const fullPath = path.join(docsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        order: 0,
        title: id,
        ...(matterResult.data as { order?: number; title?: string; description?: string }),
    };
}
