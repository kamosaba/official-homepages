import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/news";

export default function Home() {
  const latestNews = getSortedPostsData().slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}>
          <Image
            src="/images/hero_bg.png"
            alt="Kamosaba Hero"
            fill
            style={{ objectFit: 'cover', opacity: 0.6 }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)'
          }} />
        </div>

        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            わいわい、のんびり。<br />
            <span className="gradient-text">かも鯖へようこそ</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px', opacity: 0.9 }}>
            Java版と統合版、どちらのプレイヤーも大歓迎！<br />
            マイクラの世界で新しい仲間と出会いませんか？
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="https://discord.kamosaba.net" target="_blank" className="glass" style={{
              padding: '16px 40px',
              fontSize: '1.1rem',
              fontWeight: 700,
              backgroundColor: '#5865F2',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 20px rgba(88, 101, 242, 0.4)'
            }}>
              今すぐ参加する
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>マルチデバイス対応</h3>
            <p>Java版からはもちろん、Switchやスマホの統合版(BE)勢も一緒に同じサーバーで遊ぶことができます。</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>のんびりコミュニティ</h3>
            <p>オープンで「わいわい、のんびり」やることを大切にしています。初心者の方も安心して参加してください。</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>イベントたくさん</h3>
            <p>季節ごとの行事や、みんなで協力して作る建築プロジェクトなど、盛りだくさんのイベントを予定しています。</p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>最新のお知らせ</h2>
            <Link href="/news" style={{ opacity: 0.6, fontSize: '0.9rem' }}>すべて見る →</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {latestNews.map((post) => (
              <Link key={post.id} href={`/news/${post.id}`} className="glass-card">
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{post.date}</span>
                <h3 style={{ margin: '12px 0', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass" style={{ padding: '80px 40px', borderRadius: '40px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>新しい冒険を、<br />ここで始めよう</h2>
            <p style={{ marginBottom: '40px', opacity: 0.8 }}>Discordサーバーには、すでに多くの仲間があなたを待っています。</p>
            <Link href="https://discord.kamosaba.net/" target="_blank" className="glass" style={{
              padding: '16px 48px',
              fontSize: '1.2rem',
              fontWeight: 800,
              display: 'inline-block',
              background: '#5865F2',
              color: 'white',
              border: 'none'
            }}>
              コミュニティに参加する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
