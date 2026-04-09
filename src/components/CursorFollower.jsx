'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CursorFollower = () => {
    const followerRef = useRef(null);

    useGSAP(() => {
        const follower = followerRef.current;
        if (!follower) return;

        if (window.matchMedia('(pointer: coarse)').matches) {
            follower.style.display = 'none';
            return;
        }

        gsap.set(follower, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

        const xTo = gsap.quickTo(follower, "x", { duration: 0.2, ease: "power3.out" });
        const yTo = gsap.quickTo(follower, "y", { duration: 0.2, ease: "power3.out" });

        const handleMouseMove = (e) => {
            gsap.to(follower, { scale: 1, opacity: 0.15, duration: 0.3 });
            xTo(e.clientX);
            yTo(e.clientY);
        };

        const handleMouseLeave = () => {
            gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: followerRef });

    return (
        <div
            ref={followerRef}
            className="cursor-follower"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                backgroundColor: 'var(--color-primary)', // Using Deep Bull Blue for the light theme glow
                boxShadow: '0 0 20px 5px rgba(10, 25, 47, 0.2)', // Soft blue glow
                mixBlendMode: 'multiply' // Best blend mode for dark objects on light backgrounds
            }}
        />
    );
};
