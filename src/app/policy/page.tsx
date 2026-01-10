import Link from "next/link";

export default function PolicyPage() {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '40px' }} className="gradient-text">プライバシーポリシー</h1>

                <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>情報の取得</h2>
                        <p>当運営は、本サービスの提供にあたり、利用者のニックネーム、Discord ID、IPアドレスなどの情報を取得することがあります。</p>
                    </section>

                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>情報の利用目的</h2>
                        <p>取得した情報は、以下の目的で利用します。</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
                            <li>本サービスの運営・管理および不正行為の防止</li>
                            <li>利用者からの問い合わせへの対応</li>
                            <li>サービスの改善や新機能の開発</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>情報の第三者提供</h2>
                        <p>当運営は、法令に基づく場合を除き、利用者の同意を得ることなく第三者に個人情報を提供することはありません。</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>お問い合わせ</h2>
                        <p>プライバシーポリシーに関するお問い合わせは、公式Discordサーバーまでお願いいたします。</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ opacity: 0.6 }}>← ホームに戻る</Link>
                </div>
            </div>
        </div>
    );
}
