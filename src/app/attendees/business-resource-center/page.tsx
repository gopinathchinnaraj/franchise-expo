"use client";

import styles from "./EmergingBrandPavilion.module.css";

export default function EmergingBrandPavilion() {
    return (
        <main className={styles.page}>

            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroMedia}>
                    <video
                        className={styles.heroVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/videos/franchise-hero.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className={styles.heroOverlayPanel}>
                    <div className={styles.heroContent}>
                        <p className={styles.heroDate}>
                            MAY 29TH - 30TH 2026 | NEW YORK CITY, NEW YORK
                        </p>

                        <h1 className={styles.heroTitle}>
                            EMERGING
                            <br />
                            BRAND
                            <br />
                            PAVILION
                        </h1>

                        <p className={styles.heroSub}>
                            Discover the future of franchising by visiting the Emerging
                            Brands Pavilion — where tomorrow’s leading brands are waiting
                            for you today.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className={styles.statsBar}>
                <div className={styles.statsGrid}>

                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>🏢</div>

                        <div>
                            <h3>150+</h3>
                            <p>EXHIBITORS</p>
                        </div>
                    </div>

                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>🚀</div>

                        <div>
                            <h3>10</h3>
                            <p>UNITS OR LESS</p>
                        </div>
                    </div>

                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>📈</div>

                        <div>
                            <h3>100%</h3>
                            <p>GROWTH POTENTIAL</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>

                    <div className={styles.aboutGrid}>

                        {/* LEFT CONTENT */}
                        <div className={styles.aboutContent}>

                            <h2 className={styles.sectionTitle}>
                                THE EMERGING BRANDS PAVILION
                            </h2>

                            <p>
                                The Emerging Brands Pavilion is one of the busiest aisles of
                                the show floor and dedicated to up-and-coming franchises.
                            </p>

                            <p>
                                Discover the future of franchising by visiting the Emerging
                                Brands Pavilion where tomorrow’s leading brands are waiting
                                for you today.
                            </p>

                            <div className={styles.featureList}>

                                <div className={styles.featureItem}>
                                    <h4>DISCOVER THE NEXT BIG THING</h4>

                                    <p>
                                        Be among the first to discover fresh concepts before
                                        they become household names.
                                    </p>
                                </div>

                                <div className={styles.featureItem}>
                                    <h4>DIRECT ACCESS TO FOUNDERS</h4>

                                    <p>
                                        Meet founders and executives directly and learn about
                                        the future vision of their franchise.
                                    </p>
                                </div>

                                <div className={styles.featureItem}>
                                    <h4>BE A TRENDSETTER</h4>

                                    <p>
                                        Join brands early and position yourself ahead of market
                                        trends with exciting concepts.
                                    </p>
                                </div>

                                <div className={styles.featureItem}>
                                    <h4>GROWTH POTENTIAL</h4>

                                    <p>
                                        Explore high-growth opportunities that can scale
                                        rapidly and deliver strong returns.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className={styles.aboutImageWrap}>
                            <img
                                src="/images/emerging-brand.webp"
                                alt="Emerging Brand Pavilion"
                                className={styles.aboutImage}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.container}>

                    <div className={styles.contactCard}>

                        <h2>GET IN TOUCH</h2>

                        <p>
                            If you are an up and coming franchise brand with 10 units
                            or less and are interested in learning more on how you can
                            showcase your brand in the Emerging Pavilion contact:
                        </p>

                        <div className={styles.contactInfo}>
                            <h3>Justin Wood</h3>

                            <a href="tel:+12403981385">
                                (240) 398-1385
                            </a>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}