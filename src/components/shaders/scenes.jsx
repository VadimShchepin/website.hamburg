'use client';

import React from 'react';
import { Shader, FilmGrain, ChromaFlow } from 'shaders/react';

// Final CTA: navy surface the visitor paints with liquid brand colours.
export function CtaScene(props) {
    return (
        <Shader className="shader-canvas" {...props}>
            <FilmGrain strength={0.2} bias={1}>
                <ChromaFlow
                    baseColor="#0A192F"
                    upColor="#E53935"
                    downColor="#3B6FD8"
                    leftColor="#FF8A65"
                    rightColor="#90CAF9"
                    intensity={1.1}
                    radius={3.5}
                    momentum={35}
                />
            </FilmGrain>
        </Shader>
    );
}
