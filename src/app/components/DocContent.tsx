'use client';

import { useEffect } from 'react';

export default function DocContent({ html }: { html: string }) {
    useEffect(() => {
        const blocks = document.querySelectorAll('pre');

        blocks.forEach((block) => {
            // Check if button already exists (prevent duplicate on re-renders if any)
            if (block.querySelector('.copy-button')) return;

            // Basic styling for the pre to position the button
            block.style.position = 'relative';

            const button = document.createElement('button');
            button.className = 'copy-button';
            button.innerText = 'Copy';

            // Button Styles
            Object.assign(button.style, {
                position: 'absolute',
                top: '8px',
                right: '8px',
                padding: '4px 12px',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--accent)',
                border: '1px solid var(--glass-border)',
                borderRadius: '6px',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                zIndex: '10',
                transition: 'all 0.2s ease'
            });

            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });

            button.addEventListener('click', () => {
                const code = block.querySelector('code')?.innerText || block.innerText;
                navigator.clipboard.writeText(code).then(() => {
                    button.innerText = 'Copied!';
                    button.style.borderColor = 'var(--accent)';
                    setTimeout(() => {
                        button.innerText = 'Copy';
                        button.style.borderColor = 'var(--glass-border)';
                    }, 2000);
                });
            });

            block.appendChild(button);
        });
    }, [html]);

    return (
        <div
            className="glass doc-content"
            style={{
                padding: '40px',
                borderRadius: '24px',
                lineHeight: 1.8,
                fontSize: '1.1rem'
            }}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
