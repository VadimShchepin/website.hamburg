'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const TiltCard = ({
    children,
    className = '',
    perspective = 1000,
    scale = 1.05,
    ...props
}) => {
    const cardRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;
        if (!card) return;

        gsap.set(card, { transformPerspective: perspective, transformStyle: "preserve-3d" });

        const xTo = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power2.out" });
        const yTo = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power2.out" });

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const rotateY = ((mouseX / width) - 0.5) * 20; // -10 to 10 degrees
            const rotateX = ((mouseY / height) - 0.5) * -20; // Inverted for natural tilt

            xTo(rotateY);
            yTo(rotateX);
        };

        const handleMouseEnter = () => {
            if (scale > 1) gsap.to(card, { scale: scale, duration: 0.5, ease: "power2.out" });
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            if (scale > 1) gsap.to(card, { scale: 1, duration: 0.5, ease: "power2.out" });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className={`relative transition-transform will-change-transform ${className}`}
            style={{ display: 'inline-block' }}
            {...props}
        >
            <div style={{ transform: "translateZ(30px)" }}>
                {children}
            </div>
        </div>
    );
};
