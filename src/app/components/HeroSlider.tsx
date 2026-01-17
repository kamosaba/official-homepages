'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    '/images/slides/slide1.png',
    '/images/slides/slide2.png',
    '/images/slides/slide3.png',
    '/images/slides/slide4.jpg',
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // 5秒ごとに切り替え
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden'
        }}>
            {slides.map((src, index) => (
                <div
                    key={src}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: index === current ? 0.6 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                    }}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                    />
                </div>
            ))}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)'
            }} />
        </div>
    );
}
