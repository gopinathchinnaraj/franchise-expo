'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Hero() {
    return (
        <section className="relative w-full h-[520px] overflow-hidden bg-[#15407d] flex items-stretch max-[900px]:h-auto max-[900px]:min-h-[480px] max-[600px]:min-h-[440px]">
            {/* ── RIGHT: video — circle-clipped on left edge ── */}
            <div className="absolute top-0 right-0 w-[70%] max-[1100px]:w-[56%] h-full z-10 bg-[#15407d] max-[900px]:w-full max-[900px]:h-full">
                <div className="absolute inset-0 overflow-hidden [clip-path:ellipse(78%_140%_at_100%_120%)] max-[900px]:[clip-path:ellipse(140%_80%_at_100%_100%)]">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] max-[900px]:w-[450%] max-[900px]:h-[450%] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none block bg-transparent"
                        src="https://www.youtube.com/embed/lTKgln50Ge0?autoplay=1&mute=1&loop=1&playlist=lTKgln50Ge0&controls=0&showinfo=0&rel=0&modestbranding=1"
                        title="Franchise Expo Hero Video"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
                {/* Smooth fade from blue bg into video */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(to_right,#15407d_0%,#15407d_2%,rgba(21,64,125,0.45)_14%,rgba(21,64,125,0.08)_26%,transparent_38%)] max-[900px]:bg-[linear-gradient(to_bottom,#003b95_0%,#003b95_28%,rgba(0,59,149,0.6)_52%,transparent_78%)]" />
            </div>
            {/*
              Outer div fills the left half of the hero.
              Inner centering wrapper mirrors the max-w / px-[60px] pattern used
              throughout the page so the text left edge lines up on all viewports.
            */}
            <div className="relative z-40 w-[52%] max-[1100px]:w-[58%] max-[900px]:w-full h-full flex items-center max-[900px]:items-start max-[900px]:pt-12 max-[900px]:pb-[280px] max-[600px]:pt-10 max-[600px]:pb-[260px]">
                {/* Inner wrapper: aligns with the Container default (1450px) used throughout the project */}
                <Container className="flex flex-col justify-center">
                    <p className="font-display text-[1.125rem] max-[600px]:text-[0.85rem] font-normal text-white uppercase tracking-[0.16em] max-[600px]:tracking-[0.1em] m-0 mb-4">
                        June 4th – 5th 2027 &nbsp;|&nbsp; New York City, New York
                    </p>
                    <h1 className="font-display text-[clamp(2.8rem,5vw,5.2rem)] font-bold text-[#ffffff] uppercase leading-none -tracking-[0.01em] m-0 mb-6 max-[900px]:text-[2.6rem] max-[600px]:text-[2.2rem] max-[375px]:text-[1.9rem]">
                        Your Franchise<br />Future Starts Here
                    </h1>
                    <div className="flex flex-col gap-0.5 mb-4 max-w-full">
                        <p className="font-body text-[1.125rem] max-[900px]:text-[1rem] max-[600px]:text-[0.95rem] font-semibold text-white leading-[1.6] m-0">Step into a world of franchise possibilities waiting to be explored.</p>
                        <p className="font-body text-[1.125rem] max-[900px]:text-[1rem] max-[600px]:text-[0.95rem] font-semibold text-white leading-[1.6] m-0">Hear from experts who&apos;ll equip you with the tools to make your business ownership dreams a reality.</p>
                    </div>
                </Container>
            </div>
        </section>
    );
}