import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AISEO Hamburg - Webdesign & SEO';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #0f1729 0%, #1a2744 50%, #0f1729 100%)',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 30% 40%, rgba(220,38,38,0.15) 0%, transparent 50%)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '-2px',
                            display: 'flex',
                        }}
                    >
                        AISEO
                    </div>
                    <div
                        style={{
                            fontSize: '28px',
                            color: 'rgba(255,255,255,0.7)',
                            display: 'flex',
                        }}
                    >
                        Webdesign & SEO aus Hamburg
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '16px',
                        }}
                    >
                        {['Webdesign', 'SEO', 'AI SEO', 'Google Ads'].map((tag) => (
                            <div
                                key={tag}
                                style={{
                                    padding: '8px 20px',
                                    border: '1px solid rgba(220,38,38,0.5)',
                                    borderRadius: '4px',
                                    color: '#dc2626',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    display: 'flex',
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '32px',
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.4)',
                        display: 'flex',
                    }}
                >
                    webseite.hamburg
                </div>
            </div>
        ),
        { ...size }
    );
}
