import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "かも鯖 | マイクラ参加型コミュニティ",
  description: "オープンなマインクラフト参加型サーバー「かも鯖」の公式サイト。Java版・統合版どちらも参加可能！わいわいのんびり遊びましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="glass" style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1000px',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', // これで垂直方向の中央揃え
          padding: '12px 32px'
        }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#4ade80' }}>かも鯖</Link>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}> {/* alignItemsを追加 */}
            <Link href="/" style={{ fontWeight: 600 }}>Home</Link>
            <Link href="/news" style={{ fontWeight: 600 }}>News</Link>
            <Link href="https://discord.kamosaba.net/" target="_blank" className="glass" style={{
              padding: '6px 16px',
              backgroundColor: '#5865F2',
              borderColor: 'transparent',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center'
            }}>Discord入会</Link>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{ padding: '60px 0', textAlign: 'center', opacity: 0.6 }}>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link href="/tos">利用規約</Link>
            <Link href="/policy">プライバシーポリシー</Link>
          </div>
          <p>&copy; 2026 かも鯖コミュニティ</p>
        </footer>
      </body>
    </html>
  );
}
