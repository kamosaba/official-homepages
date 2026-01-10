import Link from "next/link";
import { getSortedPostsData } from "@/lib/news";

export default function NewsPage() {
    const posts = getSortedPostsData();

    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '60px', textAlign: 'center' }}>
                    <span className="gradient-text">News</span>
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {posts.map((post) => (
                        <Link key={post.id} href={`/news/${post.id}`} className="glass-card" style={{ display: 'block' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700 }}>{post.date}</span>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{post.title}</h2>
                            <p style={{ opacity: 0.7 }}>{post.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
