'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>

            {/* ── RIGHT: video — circle-clipped on left edge ── */}
            <div className={styles.heroRight}>
                <div className={styles.heroMediaMask}>
                    {/*
            YouTube iframe — positioned to fill the masked area.
            The negative margins compensate for iframe black bars.
          */}
                    <iframe
                        className={styles.heroVideo}
                        src="https://www.youtube.com/embed/lTKgln50Ge0?autoplay=1&mute=1&loop=1&playlist=lTKgln50Ge0&controls=0&showinfo=0&rel=0&modestbranding=1"
                        title="Franchise Expo Hero Video"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
                {/* Smooth fade from blue bg into video */}
                <div className={styles.heroFade} />
            </div>

            {/* ── LEFT: text content ── */}
            <div className={styles.heroLeft}>
                <p className={styles.heroMeta}>
                    May 29th – 30th 2026 &nbsp;|&nbsp; New York City, New York
                </p>

                {/*
          TWO lines: "YOUR FRANCHISE" / "FUTURE STARTS HERE"
          The <br> is not needed — font-size + column width
          naturally wraps at "Future" on desktop.
          But keeping it ensures consistent 2-line break.
        */}
                <h1 className={styles.heroHeadline}>
                    Your Franchise<br />Future Starts Here
                </h1>

                <div className={styles.heroSub}>
                    <p>Step into a world of franchise possibilities waiting to be explored.</p>
                    <p>Hear from experts who&apos;ll equip you with the tools to make your business ownership dreams a reality.</p>
                </div>
            </div>

        </section>
    );
}