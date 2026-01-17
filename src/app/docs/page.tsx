import Link from "next/link";
import { getAllDocsData } from "@/lib/docs";

export default function DocsPage() {
    const docs = getAllDocsData();

    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', textAlign: 'center' }}>
                    <span className="gradient-text">Documentation</span>
                </h1>
                <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                    かも鯖をより楽しむためのガイドとルール。
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {docs.map((doc) => (
                        <Link key={doc.id} href={`/docs/${doc.id}`} className="glass-card">
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent)' }}>{doc.title}</h2>
                            <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.6 }}>{doc.description}</p>
                            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 700 }}>
                                詳しく見る →
                            </div>
                        </Link>
                    ))}
                    {docs.length === 0 && (
                        <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px', opacity: 0.5 }}>
                            現在ドキュメントを準備中です。
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
