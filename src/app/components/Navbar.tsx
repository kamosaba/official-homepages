'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass nav-container" style={{
            alignItems: 'center'
        }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#4ade80', zIndex: 1001 }}>
                かも鯖
            </Link>

            <button
                className={`nav-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="メニューを開く"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link href="/" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>ホーム</Link>
                <Link href="/news" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>ニュース</Link>
                <Link href="/status" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>ステータス</Link>
                <Link href="/tos" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>利用規約</Link>
                <Link href="/policy" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>プライバシーポリシー</Link>
                <Link
                    href="https://discord.kamosaba.net/"
                    target="_blank"
                    className="glass"
                    style={{
                        padding: '8px 20px',
                        backgroundColor: '#5865F2',
                        borderColor: 'transparent',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: 700,
                        color: 'white'
                    }}
                >
                    Discordに参加する
                </Link>
            </div>
        </nav>
    );
}
