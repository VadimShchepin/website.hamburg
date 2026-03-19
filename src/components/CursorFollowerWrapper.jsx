'use client';

import dynamic from 'next/dynamic';

const CursorFollower = dynamic(
    () => import('./CursorFollower').then(mod => ({ default: mod.CursorFollower })),
    { ssr: false }
);

export default function CursorFollowerWrapper() {
    return <CursorFollower />;
}
