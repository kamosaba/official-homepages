'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { serverConfig } from '@/lib/serverConfig';

interface ServerStatus {
    online: boolean;
    players?: {
        online: number;
        max: number;
        list?: (string | { name: string; uuid: string })[];
    };
    version?: string;
    hostname?: string;
    loading: boolean;
}

export default function StatusPage() {
    const [status, setStatus] = useState<ServerStatus>({ online: false, loading: true });

    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await fetch(`${serverConfig.apiBase}${serverConfig.address}`);
                const data = await res.json();

                setStatus({
                    online: data.online,
                    players: data.players,
                    version: data.version,
                    hostname: data.hostname || serverConfig.address,
                    loading: false
                });
            } catch (error) {
                console.error("Failed to fetch server status:", error);
                setStatus({ online: false, loading: false });
            }
        }

        fetchStatus();
        const interval = setInterval(fetchStatus, serverConfig.refreshInterval);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '40px', textAlign: 'center' }}>
                    <span className="gradient-text">Server Status</span>
                </h1>

                <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
                    {status.loading ? (
                        <div style={{ padding: '40px' }}>
                            <div className="loader-progress" style={{ position: 'relative', margin: '0 auto', width: '100px' }}></div>
                            <p style={{ marginTop: '20px', opacity: 0.6 }}>ステータスを確認中...</p>
                        </div>
                    ) : (
                        <>
                            <div style={{ marginBottom: '32px' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '8px 24px',
                                    borderRadius: '100px',
                                    backgroundColor: status.online ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                    border: `1px solid ${status.online ? '#4ade80' : '#ef4444'}`,
                                    color: status.online ? '#4ade80' : '#ef4444',
                                    fontWeight: 700,
                                    fontSize: '1.2rem'
                                }}>
                                    <span style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: status.online ? '#4ade80' : '#ef4444',
                                        boxShadow: status.online ? '0 0 12px #4ade80' : 'none'
                                    }}></span>
                                    {status.online ? 'ONLINE' : 'OFFLINE'}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                                <div className="glass" style={{ padding: '24px', borderRadius: '20px' }}>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '8px' }}>現在の参加人数</p>
                                    <p style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                                        {status.players?.online || 0} <span style={{ fontSize: '1rem', opacity: 0.4 }}>/ {status.players?.max || 0}</span>
                                    </p>
                                </div>
                                <div className="glass" style={{ padding: '24px', borderRadius: '20px' }}>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '8px' }}>バージョン</p>
                                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{status.version || '不明'}</p>
                                </div>
                            </div>

                            {status.online && status.players?.list && status.players.list.length > 0 && (
                                <div style={{ textAlign: 'left' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', opacity: 0.8 }}>オンラインのメンバー</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {status.players.list.map((player, index) => {
                                            const playerName = typeof player === 'string' ? player : player.name;
                                            const playerId = typeof player === 'string' ? player : (player.uuid || player.name);

                                            return (
                                                <div key={index} className="glass" style={{
                                                    padding: '6px 16px',
                                                    borderRadius: '100px',
                                                    fontSize: '0.9rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}>
                                                    <img
                                                        src={`https://minotar.net/avatar/${playerId}/24`}
                                                        alt={playerName}
                                                        style={{ borderRadius: '4px' }}
                                                    />
                                                    {playerName}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {!status.online && !status.loading && (
                                <div style={{
                                    marginTop: '20px',
                                    padding: '40px 20px',
                                    background: 'rgba(239, 68, 68, 0.05)',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(239, 68, 68, 0.2)'
                                }}>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#ef4444' }}>
                                        現在サーバーに接続できません
                                    </p>
                                    <p style={{ opacity: 0.7, marginBottom: '32px', lineHeight: 1.8 }}>
                                        サーバーは現在メンテナンス中か、一時的に停止している可能性があります。<br />
                                        最新の稼働状況や復旧の見込みについては、公式Discordにてご確認ください。
                                    </p>
                                    <Link
                                        href="https://discord.kamosaba.net/"
                                        target="_blank"
                                        className="glass"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '12px 32px',
                                            backgroundColor: '#5865F2',
                                            color: 'white',
                                            fontWeight: 800,
                                            border: 'none',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Discordで状況を確認する
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>
                        IPアドレス: <code style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>{serverConfig.displayAddress}</code>
                    </p>
                </div>
            </div>
        </div>
    );
}
