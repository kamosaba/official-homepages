import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

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
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <footer style={{ padding: '80px 0', textAlign: 'center', opacity: 0.6 }}>
          <div className="container">
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
              <Link href="/tos">利用規約</Link>
              <Link href="/policy">プライバシーポリシー</Link>
              <Link href="/news">ニュース</Link>
            </div>
            <p>&copy; 2026 かも鯖コミュニティ</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
