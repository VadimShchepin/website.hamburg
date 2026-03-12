import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const MagneticAnchor = ({
    children,
    className = '',
    strength = 0.5,
    ...props
}) => {
    const linkRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const link = linkRef.current;
        const text = textRef.current;
        if (!link || !text) return;

        const xTo = gsap.quickTo(link, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(link, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = link.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * strength);
            yTo(y * strength);

            textXTo(x * (strength * 0.2));
            textYTo(y * (strength * 0.2));
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        link.addEventListener("mousemove", handleMouseMove);
        link.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            link.removeEventListener("mousemove", handleMouseMove);
            link.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: linkRef });

    return (
        <a ref={linkRef} className={`relative inline-block ${className}`} {...props} style={{ display: 'inline-block' }}>
            <span ref={textRef} className="relative block pointer-events-none" style={{ display: 'block' }}>
                {children}
            </span>
        </a>
    );
};
