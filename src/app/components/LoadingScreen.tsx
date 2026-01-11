'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み完了後に少し待ってから非表示にする
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-wrapper ${!loading ? 'hidden' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">かも鯖</div>
                <div className="loader-bar">
                    <div className="loader-progress"></div>
                </div>
            </div>
        </div>
    );
}
