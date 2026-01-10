import Link from "next/link";

export default function TosPage() {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '40px' }} className="gradient-text">利用規約</h1>

                <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>第1条（適用）</h2>
                        <p>本規約は、かも鯖コミュニティ（以下、「当運営」）が提供するサーバーおよびウェブサイト（以下、「本サービス」）の利用条件を定めるものです。利用者の皆さまには、本規約に従って本サービスをご利用いただきます。</p>
                    </section>

                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>第2条（禁止事項）</h2>
                        <p>利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>当運営のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                            <li>当運営のサービスの運営を妨害するおそれのある行為</li>
                            <li>他の利用者に対する嫌がらせや誹謗中傷</li>
                            <li>その他、当運営が不適切と判断する行為</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>第3条（サービスの提供の停止等）</h2>
                        <p>当運営は、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>第4条（利用規約の変更）</h2>
                        <p>当運営は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ opacity: 0.6 }}>← ホームに戻る</Link>
                </div>
            </div>
        </div>
    );
}
