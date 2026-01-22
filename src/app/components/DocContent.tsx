'use client';

import { useEffect } from 'react';

export default function DocContent({ html }: { html: string }) {
    useEffect(() => {
        // --- 1. Code Block Copy Button ---
        const blocks = document.querySelectorAll('.doc-content pre');
        blocks.forEach((block) => {
            if ((block as HTMLElement).querySelector('.copy-button')) return;
            (block as HTMLElement).style.position = 'relative';
            (block as HTMLElement).style.paddingRight = '70px';
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.innerText = 'Copy';
            Object.assign(button.style, {
                position: 'absolute', top: '50%', right: '12px', transform: 'translateY(-50%)',
                padding: '6px 12px', fontSize: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--accent)', border: '1px solid var(--glass-border)', borderRadius: '6px',
                cursor: 'pointer', backdropFilter: 'blur(4px)', zIndex: '10', transition: 'all 0.2s ease'
            });
            button.addEventListener('click', () => {
                const code = (block.querySelector('code') as HTMLElement)?.innerText || (block as HTMLElement).innerText;
                navigator.clipboard.writeText(code).then(() => {
                    button.innerText = 'Copied!';
                    setTimeout(() => { button.innerText = 'Copy'; }, 2000);
                });
            });
            block.appendChild(button);
        });

        // --- 2. Table of Contents (TOC) Extraction ---
        const tocContainer = document.getElementById('toc-container');
        if (tocContainer) {
            tocContainer.innerHTML = '';
            const headings = document.querySelectorAll('.doc-content h2, .doc-content h3');
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                const link = document.createElement('a');
                link.href = `#${id}`;
                link.className = `toc-item ${heading.tagName.toLowerCase()}`;
                link.innerText = (heading as HTMLElement).innerText;
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    heading.scrollIntoView({ behavior: 'smooth' });
                });
                tocContainer.appendChild(link);
            });
        }

        // --- 3. Image Zoom ---
        const images = document.querySelectorAll('.doc-content img');
        images.forEach(img => {
            img.addEventListener('click', () => {
                const overlay = document.createElement('div');
                overlay.className = 'image-zoom-overlay';
                const zoomImg = document.createElement('img');
                zoomImg.src = (img as HTMLImageElement).src;
                overlay.appendChild(zoomImg);
                overlay.onclick = () => document.body.removeChild(overlay);
                document.body.appendChild(overlay);
            });
            (img as HTMLElement).style.cursor = 'zoom-in';
        });

        // --- 4. Hint Blocks Replacement (Client Side for simplicity) ---
        // Actually it's better to do this via regex on the initial HTML if possible.
        // But for interactive ones or complex DOM, we can do it here if needed.
    }, [html]);

    // Simple parser for hints
    const processContent = (rawHtml: string) => {
        let processed = rawHtml;

        // GitBook Hints: {% hint style="info" %} ... {% endhint %}
        const hintRegex = /{% hint style="(\w+)" %}([\s\S]*?){% endhint %}/g;
        processed = processed.replace(hintRegex, (_, style, content) => {
            const icon = style === 'info' ? 'ℹ️' : style === 'warning' ? '⚠️' : style === 'danger' ? '🚫' : '💡';
            return `<div class="hint-block hint-${style}">
                <div class="hint-icon">${icon}</div>
                <div class="hint-content">${content}</div>
            </div>`;
        });

        return processed;
    };

    const finalHtml = processContent(html);

    return (
        <div
            className="glass doc-content"
            style={{
                padding: '40px',
                borderRadius: '24px',
                lineHeight: 1.8,
                fontSize: '1.1rem'
            }}
            dangerouslySetInnerHTML={{ __html: finalHtml }}
        />
    );
}
