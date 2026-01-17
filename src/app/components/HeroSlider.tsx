'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
    '/images/slides/slider1.png',
    '/images/slides/slider2.png',
    '/images/slides/slider3.png',
    '/images/slides/slider4.png',
    '/images/slides/slider5.png',
];

interface HeroSliderProps {
    interval?: number;
}

export default function HeroSlider({ interval = 6000 }: HeroSliderProps) {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [interval, nextSlide]);

    const handleClick = () => {
        nextSlide();
    };

    return (
        <div
            onClick={handleClick}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
                cursor: 'pointer'
            }}
        >
            {slides.map((src, index) => (
                <div
                    key={src}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: index === current ? 0.6 : 0,
                        transition: 'opacity 2s ease-in-out',
                    }}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                        sizes="100vw"
                    />
                </div>
            ))}
            {/* Soft boundary for the bottom of the hero section */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 80%, var(--background) 100%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)',
                opacity: 0.4,
                pointerEvents: 'none'
            }} />
        </div>
    );
}

