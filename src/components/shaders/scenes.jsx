'use client';

import React from 'react';
import {
    Shader,
    MeshGradient,
    Liquify,
    FilmGrain,
    LiquidMetal,
    SolidColor,
    Aurora,
    FloatingParticles,
    ChromaFlow,
    Text,
    CursorRipples,
} from 'shaders/react';

// Brand palette (see :root in src/index.css)
const NAVY = '#0A192F';
const NAVY_LIGHT = '#172A45';
const RED = '#E53935';

// Hero: pale, slowly drifting brand gradient that the cursor drags like
// fabric, with a molten-metal blob floating behind the website screenshots.
export function HeroScene(props) {
    // On the stacked mobile layout the blob would sit under the headline.
    const showBlob = window.matchMedia('(min-width: 901px)').matches;
    return (
        <Shader className="shader-canvas" {...props}>
            <FilmGrain strength={0.12} bias={0}>
                <Liquify intensity={7} stiffness={4} damping={3} radius={0.9}>
                    <MeshGradient
                        stops={[
                            { color: '#FFFFFF', position: 0 },
                            { color: '#EEF2F8', position: 0.35 },
                            { color: '#D9E3F2', position: 0.6 },
                            { color: '#FBE3E2', position: 0.85 },
                            { color: '#FFFFFF', position: 1 },
                        ]}
                        count={6}
                        smoothness={3}
                        swirl={0.25}
                        drift={0.6}
                        speed={0.6}
                        seed={7}
                    />
                </Liquify>
            </FilmGrain>
            {showBlob && <LiquidMetal
                center={{ x: 0.78, y: 0.5 }}
                scale={1.15}
                shape={{ type: 'metaballs3D' }}
                lightColor="#F4F6FB"
                darkColor={NAVY}
                turbulence={0.8}
                ripple={3}
                speed={0.35}
                dispersion={0.35}
                sharpness={0.7}
            />}
        </Shader>
    );
}

// Proof (dark section): navy aurora with a red core and particles that the
// cursor stirs.
export function ProofScene(props) {
    return (
        <Shader className="shader-canvas" {...props}>
            <SolidColor color={NAVY} />
            <Aurora
                colorA={NAVY_LIGHT}
                colorB={RED}
                colorC="#3B6FD8"
                intensity={55}
                curtainCount={3}
                speed={2.5}
                waviness={70}
                rayDensity={25}
                height={110}
                center={{ x: 0.5, y: 0 }}
                blendMode="screen"
            />
            <FloatingParticles
                particleColor="#FFFFFF"
                count={1000}
                particleSize={1.1}
                softness={0.3}
                speed={0.12}
                twinkle={0.7}
                cursorStrength={0.8}
                opacity={0.7}
            />
        </Shader>
    );
}

// Final CTA: navy surface the visitor paints with liquid brand colours.
export function CtaScene(props) {
    return (
        <Shader className="shader-canvas" {...props}>
            <FilmGrain strength={0.2} bias={1}>
                <ChromaFlow
                    baseColor={NAVY}
                    upColor={RED}
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

// Statement band: giant wordmark that ripples and splits into colour under
// the cursor.
export function WordmarkScene(props) {
    return (
        <Shader className="shader-canvas" {...props}>
            <CursorRipples intensity={12} decay={6} radius={0.6} chromaticSplit={2.5}>
                <SolidColor color="#F5F7FA" />
                <Text
                    text="WEBSEITE.HAMBURG"
                    fontFamily="Goldman"
                    fontWeight="700"
                    fontSize={0.3}
                    letterSpacing={0.02}
                    color={NAVY}
                />
            </CursorRipples>
        </Shader>
    );
}
