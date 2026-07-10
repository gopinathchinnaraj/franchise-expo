'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Hero() {
    return (
        <section className="relative w-full h-[520px] overflow-hidden bg-[#15417e] flex items-stretch max-[900px]:h-auto max-[900px]:min-h-[580px] max-[600px]:min-h-[600px]">
            {/* ── RIGHT: video — circle-clipped on left edge ── */}
            <div className="absolute top-0 right-0 w-[70%] max-[1100px]:w-[56%] h-full z-10 bg-[#15417e] max-[900px]:w-full max-[900px]:h-full">
                <div className="absolute inset-0 overflow-hidden [clip-path:ellipse(78%_140%_at_100%_120%)] max-[900px]:[clip-path:ellipse(72%_60%_at_100%_100%)]">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] max-[900px]:w-[450%] max-[900px]:h-[450%] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none block bg-transparent"
                        src="https://www.youtube.com/embed/lTKgln50Ge0?autoplay=1&mute=1&loop=1&playlist=lTKgln50Ge0&controls=0&showinfo=0&rel=0&modestbranding=1"
                        title="Franchise Expo Hero Video"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>
            {/*
              Outer div fills the left half of the hero.
              Inner centering wrapper mirrors the max-w / px-[60px] pattern used
              throughout the page so the text left edge lines up on all viewports.
            */}
            <div className="relative z-40 w-[52%] max-[1100px]:w-[58%] max-[900px]:w-full h-full flex items-center max-[900px]:items-start max-[900px]:pt-12 max-[900px]:pb-12 max-[600px]:pt-14 max-[600px]:pb-14">
                {/* Inner wrapper: aligns with the Container default (1450px) used throughout the project */}
                <Container className="flex flex-col justify-center">
                    <p className="font-display text-[1.125rem] max-[900px]:text-[1rem] max-[600px]:text-[0.95rem] font-normal text-white uppercase tracking-[0.16em] max-[600px]:tracking-[0.1em] m-0 mb-4">
                        June 4th – 5th 2027 &nbsp;|&nbsp; New York City, New York
                    </p>
                    <h1 className="font-display text-[clamp(2.8rem,5vw,5.2rem)] font-bold text-[#ffffff] uppercase leading-[0.95] -tracking-[0.01em] m-0 mb-6 max-[900px]:text-[3.2rem] max-[600px]:text-[2.75rem] max-[375px]:text-[2.2rem]">
                        Your Franchise <br className="max-[900px]:hidden" /> Future Starts Here
                    </h1>
                    <div className="flex flex-col gap-3 mb-4 max-w-full">
                        <p className="font-body text-[1.125rem] max-[900px]:text-[1.05rem] max-[600px]:text-[0.98rem] font-medium text-white leading-[1.6] m-0">Step into a world of franchise possibilities waiting to be explored.</p>
                        <p className="font-body text-[1.125rem] max-[900px]:text-[1.05rem] max-[600px]:text-[0.98rem] font-medium text-white leading-[1.6] m-0">Hear from experts who&apos;ll equip you with the tools to make your business ownership dreams a reality.</p>
                    </div>
                </Container>
            </div>
        </section>
    );
}