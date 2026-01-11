import Link from "next/link";

export default function PolicyPage() {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '40px' }} className="gradient-text">プライバシーポリシー</h1>

                <p style={{ marginBottom: '32px', opacity: 0.8 }}>
                    本サービス（MinecraftサーバーおよびDiscordサーバー、以下「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護を重要な責務と考えています。本プライバシーポリシーでは、本サービスにおける情報の取得・利用・管理について定めます。
                </p>

                <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第1条：取得する情報について</h2>
                        <p>本サービスでは、運営および安全なサービス提供のため、以下の情報を取得する場合があります。</p>

                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '8px' }}>1. Minecraftに関する情報</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
                                <li>プレイヤー名（UUIDを含む場合があります）</li>
                                <li>ゲーム内チャットログ</li>
                                <li>ログイン・ログアウト履歴</li>
                                <li>サーバー内での行動履歴（荒らし対策・不具合対応のため）</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '8px' }}>2. Discordに関する情報</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
                                <li>Discordユーザー名・ユーザーID</li>
                                <li>サーバー内でのメッセージ・リアクション・VC利用状況</li>
                                <li>ロール情報・チャンネル利用履歴</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '8px' }}>3. お問い合わせ・改善提案時に提供された情報</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
                                <li>ユーザーが自発的に送信した内容（文章・画像等）</li>
                            </ul>
                        </div>

                        <p style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 700 }}>※ 本サービスは、氏名・住所・電話番号などの現実世界の個人情報の提供を求めません。</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第2条：情報の利用目的</h2>
                        <p>取得した情報は、以下の目的の範囲内でのみ利用します。</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>サーバーの運営・管理・保守</li>
                            <li>ルール違反行為・荒らし行為・不正行為への対応</li>
                            <li>トラブル発生時の事実確認および対応</li>
                            <li>不具合の調査・修正</li>
                            <li>サービス改善のための参考情報としての利用</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第3条：情報の第三者提供について</h2>
                        <p>運営は、以下の場合を除き、取得した情報を第三者に開示・提供しません。</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>法令に基づき開示が求められた場合</li>
                            <li>利用者本人の同意がある場合</li>
                            <li>サーバーの安全確保のため、やむを得ないと運営が判断した場合</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第4条：情報の管理について</h2>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>不正アクセス・改ざん・漏えいを防止するため、適切な管理を行います</li>
                            <li>情報は必要な期間のみ保持し、不要となった場合は適切に削除します</li>
                            <li>運営メンバー以外が、管理目的なく情報にアクセスすることはありません</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第5条：ログ・記録について</h2>
                        <p>本サービスでは、以下の目的のためログを記録する場合があります。</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '16px', lineHeight: 2 }}>
                            <li>ルール違反・トラブル発生時の証拠保全</li>
                            <li>不具合・データ異常の調査</li>
                            <li>サーバー負荷・安定性の確認</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第6条：未成年の利用について</h2>
                        <p>本サービスは未成年の利用を想定していますが、個人を特定できる情報の投稿や、外部連絡先の共有は推奨しません。</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第7条：プライバシーポリシーの変更</h2>
                        <p>本プライバシーポリシーは、必要に応じて内容を変更する場合があります。変更後も本サービスを利用した場合、最新のポリシーに同意したものとみなします。</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第8条：お問い合わせ</h2>
                        <p>本ポリシーに関する質問や、個人情報に関するお問い合わせは、Discordサーバー内の「お問い合わせ」チャンネルよりご連絡ください。</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ opacity: 0.6 }}>← ホームに戻る</Link>
                </div>
            </div>
        </div>
    );
}
