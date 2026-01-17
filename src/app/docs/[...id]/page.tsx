import { getDocData, getAllDocsData, DocData } from "@/lib/docs";
import Link from "next/link";
import { notFound } from "next/navigation";
import DocContent from "@/app/components/DocContent";

export async function generateStaticParams() {
    const docs = getAllDocsData();
    return docs.map((doc) => ({
        id: doc.id.split('/'),
    }));
}

export default async function DocDetailPage(props: { params: Promise<{ id: string[] }> }) {
    const params = await props.params;
    const slug = params.id.join('/');
    const doc = await getDocData(slug);

    if (!doc) {
        notFound();
    }

    const allDocs = getAllDocsData();

    // Group side docs by category
    const groupedDocs = allDocs.reduce((acc, d) => {
        if (!acc[d.category]) acc[d.category] = [];
        acc[d.category].push(d);
        return acc;
    }, {} as Record<string, DocData[]>);

    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px', alignItems: 'start' }}>

                {/* Sidebar */}
                <aside className="glass" style={{ padding: '24px', borderRadius: '24px', position: 'sticky', top: '120px', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--accent)' }}>ドキュメント</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {Object.keys(groupedDocs).map(category => (
                            <div key={category}>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '12px', fontWeight: 700 }}>
                                    {category === 'General' ? '全般' : category}
                                </div>
                                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '1px solid var(--glass-border)', paddingLeft: '12px' }}>
                                    {groupedDocs[category].map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/docs/${item.id}`}
                                            style={{
                                                fontSize: '0.9rem',
                                                opacity: item.id === doc.id ? 1 : 0.6,
                                                color: item.id === doc.id ? 'var(--accent)' : 'inherit',
                                                fontWeight: item.id === doc.id ? 700 : 400,
                                                transition: 'var(--transition)'
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Content */}
                <article>
                    <Link href="/docs" style={{ opacity: 0.6, fontSize: '0.9rem', display: 'inline-block', marginBottom: '24px' }}>
                        ← ドキュメント一覧に戻る
                    </Link>

                    <div style={{ marginBottom: '40px' }}>
                        <h1 style={{ fontSize: '3.5rem', margin: '0 0 16px', lineHeight: 1.2 }}>{doc.title}</h1>
                        <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>{doc.description}</p>
                    </div>

                    <DocContent html={doc.contentHtml || ""} />
                </article>

                <style dangerouslySetInnerHTML={{
                    __html: `
                        aside { display: none; }
                        @media (min-width: 968px) {
                            aside { display: block; }
                        }
                        @media (max-width: 967px) {
                            .container { grid-template-columns: 1fr !important; }
                        }
                        .doc-content h2 { margin-top: 48px; margin-bottom: 24px; color: var(--accent); border-bottom: 1px solid var(--glass-border); padding-bottom: 12px; }
                        .doc-content h3 { margin-top: 36px; margin-bottom: 18px; font-size: 1.4rem; }
                        .doc-content p { margin-bottom: 1.5rem; }
                        .doc-content ul, .doc-content ol { margin-bottom: 1.5rem; padding-left: 24px; }
                        .doc-content li { margin-bottom: 0.8rem; }
                        .doc-content pre {
                            background: rgba(0,0,0,0.3);
                            padding: 24px;
                            border-radius: 12px;
                            margin-bottom: 1.5rem;
                            border: 1px solid var(--glass-border);
                        }
                        .doc-content code { background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; font-family: monospace; }
                        .doc-content pre code { background: none; padding: 0; white-space: pre-wrap; word-break: break-all; }
                        .doc-content strong { color: var(--accent); }
                        .doc-content img { max-width: 100%; border-radius: 12px; margin: 24px 0; }
                        .doc-content figure { margin: 32px 0; }
                        .doc-content figcaption { text-align: center; font-size: 0.9rem; opacity: 0.6; margin-top: 8px; }
                    `}} />
            </div>
        </div>
    );
}

