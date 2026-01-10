import { getPostData, getSortedPostsData } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function PostPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const postData = await getPostData(params.id);

    if (!postData) {
        notFound();
    }

    return (
        <article className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link href="/news" style={{ opacity: 0.6, fontSize: '0.9rem', display: 'inline-block', marginBottom: '24px' }}>
                    ← ニュース一覧に戻る
                </Link>

                <div style={{ marginBottom: '40px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{postData.date}</span>
                    <h1 style={{ fontSize: '3rem', margin: '16px 0', lineHeight: 1.2 }}>{postData.title}</h1>
                </div>

                <div
                    className="glass"
                    style={{
                        padding: '40px',
                        borderRadius: '24px',
                        lineHeight: 1.8,
                        fontSize: '1.1rem'
                    }}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
                />

                <style dangerouslySetInnerHTML={{
                    __html: `
          .glass h2 { margin-top: 40px; margin-bottom: 20px; color: var(--accent); }
          .glass h3 { margin-top: 32px; margin-bottom: 16px; font-size: 1.3rem; }
          .glass p { margin-bottom: 1.5rem; }
          .glass ul { margin-bottom: 1.5rem; padding-left: 20px; }
          .glass li { margin-bottom: 0.5rem; }
          .glass strong { color: var(--accent); }
        `}} />
            </div>
        </article>
    );
}
