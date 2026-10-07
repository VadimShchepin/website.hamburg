'use client';

import React from 'react';
import { Shader, FilmGrain, ChromaFlow, Invert } from 'shaders/react';

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

// Hero: the CTA's cursor-painted liquid, drawn on near-black and then
// inverted. ChromaFlow only looks clean on dark bases; inverting turns the
// base into the page's #FAFAFA and the trail into soft red and blue.
// (Colours below are the inverses of the colours you see.)
export function HeroScene(props) {
    return (
        <Shader className="shader-canvas" {...props}>
            <Invert>
                <ChromaFlow
                    baseColor="#050505"
                    upColor="#1AC6CA"
                    downColor="#C49027"
                    leftColor="#008591"
                    rightColor="#906400"
                    intensity={1.5}
                    radius={3.5}
                    momentum={40}
                />
            </Invert>
        </Shader>
    );
}
