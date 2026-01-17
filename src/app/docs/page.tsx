import Link from "next/link";
import { getAllDocsData, DocData } from "@/lib/docs";

export default function DocsPage() {
    const docs = getAllDocsData();

    // Group docs by category
    const groupedDocs = docs.reduce((acc, doc) => {
        const category = doc.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(doc);
        return acc;
    }, {} as Record<string, DocData[]>);

    const categories = Object.keys(groupedDocs);

    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', textAlign: 'center' }}>
                    <span className="gradient-text">Documentation</span>
                </h1>
                <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                    かも鯖をより楽しむためのガイドとルール。
                </p>

                {categories.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>
                        現在ドキュメントを準備中です。
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                        {categories.map((category) => (
                            <div key={category}>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', opacity: 0.9, borderLeft: '4px solid var(--accent)', paddingLeft: '16px' }}>
                                    {category === 'General' ? '全般' : category}
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                                    {groupedDocs[category].map((doc) => (
                                        <Link key={doc.id} href={`/docs/${doc.id}`} className="glass-card">
                                            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--accent)' }}>{doc.title}</h3>
                                            <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>{doc.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

