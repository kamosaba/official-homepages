import { getDocData, getAllDocsData, DocData } from "@/lib/docs";
import Link from "next/link";
import { notFound } from "next/navigation";
import DocContent from "@/app/components/DocContent";

export async function generateStaticParams() {
    const docs = getAllDocsData();
    return docs.map((doc) => ({
        slug: doc.id.split('/').filter(Boolean),
    }));
}

export default async function DocDetailPage(props: { params: Promise<{ slug: string[] }> }) {
    const params = await props.params;
    const slug = params.slug.join('/');
    const doc = await getDocData(slug);

    if (!doc) {
        notFound();
    }

    const allDocs = getAllDocsData();

    // Find next and previous docs for navigation
    const currentIndex = allDocs.findIndex(d => d.id === doc.id);
    const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
    const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

    // Group side docs by category
    const groupedDocs = allDocs.reduce((acc, d) => {
        if (!acc[d.category]) acc[d.category] = [];
        acc[d.category].push(d);
        return acc;
    }, {} as Record<string, DocData[]>);

    return (
        <div className="animate-fade-in" style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container doc-container">

                {/* Sidebar */}
                <aside className="doc-sidebar">
                    <div className="sidebar-inner glass">
                        <div style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '24px', fontWeight: 700 }}>
                                ドキュメント
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                {Object.keys(groupedDocs).map(category => (
                                    <div key={category}>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.4, marginBottom: '12px', fontWeight: 700 }}>
                                            {category === 'General' ? '全般' : category}
                                        </div>
                                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            {groupedDocs[category].map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={`/docs/${item.id}`}
                                                    className={`sidebar-link ${item.id === doc.id ? 'active' : ''}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="doc-main">
                    {/* Breadcrumbs */}
                    <nav className="doc-breadcrumbs">
                        <Link href="/docs">Docs</Link>
                        <span className="separator">/</span>
                        <span className="current">{doc.category === 'General' ? '全般' : doc.category}</span>
                    </nav>

                    <article>
                        <header style={{ marginBottom: '40px' }}>
                            <h1 className="doc-title">{doc.title}</h1>
                            {doc.description && <p className="doc-description">{doc.description}</p>}
                        </header>

                        <DocContent html={doc.contentHtml || ""} />

                        {/* Navigation Buttons */}
                        <div className="doc-navigation">
                            {prevDoc ? (
                                <Link href={`/docs/${prevDoc.id}`} className="nav-card prev glass-card">
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>前のページ</span>
                                    <span style={{ fontWeight: 700 }}>{prevDoc.title}</span>
                                </Link>
                            ) : <div />}

                            {nextDoc ? (
                                <Link href={`/docs/${nextDoc.id}`} className="nav-card next glass-card">
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>次のページ</span>
                                    <span style={{ fontWeight: 700 }}>{nextDoc.title}</span>
                                </Link>
                            ) : <div />}
                        </div>
                    </article>
                </main>

                {/* TOC Sidebar (Right) */}
                <aside className="doc-toc">
                    <div className="toc-inner">
                        <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '16px', fontWeight: 700 }}>
                            このページの内容
                        </h4>
                        <div id="toc-container" className="toc-list">
                            {/* Content extracted via script in DocContent or here */}
                        </div>
                    </div>
                </aside>

                <style dangerouslySetInnerHTML={{
                    __html: `
                        .doc-container {
                            display: grid;
                            grid-template-columns: 280px minmax(0, 1fr) 240px;
                            gap: 40px;
                            align-items: start;
                        }

                        /* Sidebar */
                        .doc-sidebar {
                            position: sticky;
                            top: 120px;
                            height: calc(100vh - 160px);
                        }
                        .sidebar-inner {
                            height: 100%;
                            overflow-y: auto;
                            border-radius: 20px;
                        }
                        .sidebar-link {
                            display: block;
                            padding: 8px 12px;
                            border-radius: 8px;
                            font-size: 0.95rem;
                            color: var(--foreground);
                            opacity: 0.7;
                            transition: var(--transition);
                        }
                        .sidebar-link:hover {
                            background: rgba(255, 255, 255, 0.05);
                            opacity: 1;
                        }
                        .sidebar-link.active {
                            background: rgba(74, 222, 128, 0.1);
                            color: var(--accent);
                            opacity: 1;
                            font-weight: 600;
                        }

                        /* Main Content */
                        .doc-main {
                            max-width: 800px;
                            width: 100%;
                        }
                        .doc-breadcrumbs {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            margin-bottom: 24px;
                            font-size: 0.9rem;
                            opacity: 0.6;
                        }
                        .doc-breadcrumbs .separator {
                            opacity: 0.3;
                        }
                        .doc-title {
                            font-size: 3.5rem;
                            font-weight: 800;
                            line-height: 1.2;
                            margin-bottom: 16px;
                            letter-spacing: -0.02em;
                        }
                        .doc-description {
                            font-size: 1.25rem;
                            opacity: 0.7;
                            line-height: 1.6;
                        }

                        /* Navigation */
                        .doc-navigation {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 24px;
                            margin-top: 80px;
                            padding-top: 40px;
                            border-top: 1px solid var(--glass-border);
                        }
                        .nav-card {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                            padding: 24px;
                            text-decoration: none !important;
                        }
                        .nav-card.next {
                            text-align: right;
                            align-items: flex-end;
                        }

                        /* TOC */
                        .doc-toc {
                            position: sticky;
                            top: 120px;
                            max-height: calc(100vh - 160px);
                            overflow-y: auto;
                        }
                        @media (max-width: 1200px) {
                            .doc-container { grid-template-columns: 260px 1fr; }
                            .doc-toc { display: none; }
                        }
                        @media (max-width: 968px) {
                            .doc-container { grid-template-columns: 1fr; }
                            .doc-sidebar { display: none; }
                        }

                        .toc-list {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                        }
                        .toc-item {
                            font-size: 0.85rem;
                            opacity: 0.6;
                            transition: var(--transition);
                            display: block;
                        }
                        .toc-item:hover {
                            opacity: 1;
                            color: var(--accent);
                        }
                        .toc-item.h3 { padding-left: 16px; font-size: 0.8rem; }

                        /* Markdown Content Styling Override */
                        .doc-content {
                            background: transparent !important;
                            border: none !important;
                            padding: 0 !important;
                            backdrop-filter: none !important;
                            box-shadow: none !important;
                        }

                        .doc-content h2 { margin-top: 56px; margin-bottom: 24px; color: var(--accent); border-bottom: 1px solid var(--glass-border); padding-bottom: 12px; font-size: 2rem; }
                        .doc-content h3 { margin-top: 40px; margin-bottom: 20px; font-size: 1.5rem; color: var(--foreground); }
                        .doc-content p { margin-bottom: 1.5rem; opacity: 0.9; }
                        .doc-content ul, .doc-content ol { margin-bottom: 1.5rem; padding-left: 24px; }
                        .doc-content li { margin-bottom: 0.8rem; }
                        .doc-content strong { color: var(--accent); }
                        
                        .doc-content pre {
                            background: rgba(0,0,0,0.4);
                            padding: 24px;
                            border-radius: 12px;
                            margin: 32px 0;
                            border: 1px solid var(--glass-border);
                            overflow-x: auto;
                        }
                        .doc-content code { background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.9em; }
                        .doc-content pre code { background: none; padding: 0; font-size: 0.95rem; line-height: 1.6; }

                        .doc-content img {
                            max-width: 100%;
                            height: auto;
                            border-radius: 16px;
                            margin: 40px 0;
                            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                            border: 1px solid var(--glass-border);
                            transition: transform 0.3s ease;
                        }
                        .doc-content img:hover {
                            transform: scale(1.02);
                        }

                        /* Hint Blocks */
                        .hint-block {
                            display: flex;
                            gap: 16px;
                            padding: 20px 24px;
                            border-radius: 12px;
                            margin: 32px 0;
                            border-left: 4px solid #ccc;
                            background: rgba(255, 255, 255, 0.03);
                        }
                        .hint-info { border-left-color: #3b82f6; background: rgba(59, 130, 246, 0.05); }
                        .hint-warning { border-left-color: #f59e0b; background: rgba(245, 158, 11, 0.05); }
                        .hint-danger { border-left-color: #ef4444; background: rgba(239, 68, 68, 0.05); }
                        .hint-success { border-left-color: var(--accent); background: rgba(74, 222, 128, 0.05); }
                        .hint-icon { font-size: 1.2rem; flex-shrink: 0; }
                        .hint-content { font-size: 1rem; opacity: 0.9; }
                        .hint-content p:last-child { margin-bottom: 0; }

                        /* Image Zoom Overlay */
                        .image-zoom-overlay {
                            position: fixed;
                            top: 0; left: 0; width: 100%; height: 100%;
                            background: rgba(0,0,0,0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 9999;
                            cursor: zoom-out;
                            animation: fadeIn 0.3s ease;
                        }
                        .image-zoom-overlay img {
                            max-width: 90%;
                            max-height: 90%;
                            object-fit: contain;
                            border-radius: 8px;
                            box-shadow: 0 0 50px rgba(0,0,0,0.5);
                        }
                        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                    `}} />
            </div>
        </div>
    );
}

