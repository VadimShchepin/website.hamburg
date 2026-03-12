import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import CaseStudiesGrid from '../components/CaseStudiesGrid';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Proof from '../components/Proof';
import QualityTransparency from '../components/QualityTransparency';
import Cases from '../components/Cases';
import Cta from '../components/Cta';

export default function HomePage() {
    return (
        <>
            <Hero />
            <TrustStrip />
            <CaseStudiesGrid />
            <Problem />
            <Services />
            <Approach />
            <Proof />
            <QualityTransparency />
            <Cases />
            <Cta />
        </>
    );
}
