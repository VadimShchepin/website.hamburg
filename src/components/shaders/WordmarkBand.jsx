import React from 'react';
import ShaderBackdrop from './ShaderBackdrop';

// Decorative band; the CSS wordmark is the fallback and fades out once the
// shader version is drawn.
export default function WordmarkBand() {
    return (
        <div className="wordmark-band shader-host" aria-hidden="true">
            <ShaderBackdrop scene="wordmark" />
            <span className="wordmark-band-fallback">WEBSEITE.HAMBURG</span>
        </div>
    );
}
