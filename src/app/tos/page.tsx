import Link from "next/link";

export default function TosPage() {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }} className="gradient-text">利用規約<br /><span style={{ fontSize: '1.2rem', opacity: 0.8 }}>（Minecraftサーバー／Discordサーバー共通）</span></h1>

                <p style={{ marginBottom: '32px', opacity: 0.8 }}>
                    本サーバー（以下「本サービス」）を利用するすべてのユーザーは、本規約に同意したものとみなします。<br />
                    円滑で快適なコミュニティ運営のため、以下の内容を必ずご確認ください。
                </p>

                <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第1条：禁止行為（Minecraftサーバー）</h2>
                        <p>以下の行為は禁止とします。違反が確認された場合、警告・処罰・BAN等の対応を行う場合があります。</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>故意による攻撃行為およびPvP行為</li>
                            <li>明らかに他人の建築物・家屋を破壊する行為</li>
                            <li>許可なく他人の所有物・アイテムを取得する行為</li>
                            <li>他人に対する嫌がらせ、迷惑行為</li>
                            <li>チャットでの質問や呼びかけに対し、行動を含めて意図的に無視する行為</li>
                            <li>共有倉庫の物資を必要以上に独占する行為</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第2条：BAN対象となる可能性のある行為</h2>
                        <p>前条に定める禁止行為を行った場合、運営の判断により<strong>BAN対象となる可能性があります</strong>。<br />対応は内容・頻度・悪質性を考慮し決定します。</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第3条：アイテムおよび進行に関するルール</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <p style={{ fontWeight: 700 }}>1. 新規参加者に配布してよい装備は、鉄装備までとします</p>
                                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>自力で集めたい方への配慮のため、過剰な配布は禁止します</li>
                                </ul>
                            </div>
                            <div>
                                <p style={{ fontWeight: 700 }}>2. エリトラは以下の方法で取得してください</p>
                                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>自分で探索して取得する</li>
                                    <li>誰かと一緒に探索し、自然生成されたものを取得する</li>
                                </ul>
                            </div>
                            <p style={{ fontWeight: 700 }}>3. 一人が同時に所持できるエリトラの枚数は、最大2枚までとします</p>
                            <p style={{ fontWeight: 700 }}>4. エンダードラゴンの復活は、当分の間行いません</p>
                            <p style={{ fontWeight: 700 }}>5. 個人用の家や施設は、過度に大規模なものを作成しないでください</p>
                        </div>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第4条：アイテム増殖・データ不具合への対応</h2>
                        <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
                            <li>アイテムが再ログイン時に元に戻る不具合が発生する場合があります</li>
                            <li>ログアウト前には、重要アイテムを必ずチェスト等に収納してください</li>
                            <li>やむを得ず増殖してしまったアイテムは、各自で破棄をお願いします</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontSize: '0.9rem', opacity: 0.8 }}>本件について、これまで対応していただいた皆様に感謝します。</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第5条：運営方針について</h2>
                        <p>本サーバーには「ゆっくり進めたい方」と「早く攻略し建築や装置を楽しみたい方」が双方が存在します。そのため、以下の方針を採用しています。</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>ネザー・エンドの開放日は設けません</li>
                            <li>ゆっくり進めたい方向けに、ロビーから約4500マス離れた地点に拠点用テレポート先を用意しています</li>
                            <li>レアアイテム・装備以外の物資は、基本的に共有を推奨します</li>
                            <li>序盤は共有倉庫の活用を想定しています</li>
                            <li>大規模建築やネザー岩盤上回路など、個人では困難な作業は協力を推奨します</li>
                        </ol>
                        <p style={{ marginTop: '20px', fontWeight: 800 }}>本規約に過度に縛られすぎず、各自のペースで楽しく遊ぶことを最優先としてください。</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第6条：Discordサーバー利用ルール</h2>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>1. 基本ルール</h3>
                        <ol style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 2 }}>
                            <li>現実で犯罪となる行為は、本サーバーでも禁止します</li>
                            <li>友達募集・サーバー宣伝は許可します（※出会い目的は禁止）</li>
                            <li>トラブルや問題が発生した場合は、「お問い合わせ」チャンネルを利用してください</li>
                            <li>改善点・要望は「改善提案」チャンネルで募集します</li>
                            <li>募集・宣伝は、各サーバー・集まりごとに1文までとします</li>
                        </ol>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>2. VC（ボイスチャット）に関するルール</h3>
                        <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
                            <li>過度なタメ口の使用は控えてください</li>
                            <li>「～しろ！」などの命令口調は禁止します</li>
                            <li>用事もなくVCへの出入りを繰り返さないでください</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>第7条：規約の変更</h2>
                        <p>本規約は、運営の判断により予告なく変更される場合があります。変更後も本サービスを利用した場合、最新の規約に同意したものとみなします。</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ opacity: 0.6 }}>← ホームに戻る</Link>
                </div>
            </div>
        </div>
    );
}
