"use client";

import styles from "./ExhibitorTestimonials.module.css";

const testimonials = [
    {
        title: "FES Exhibitor Survey",
        company: "Franchise Expo",
        text: "The quality of attendees and business opportunities at the show exceeded our expectations. We connected with serious investors and generated strong franchise leads.",
    },
    {
        title: "Amazing Experience",
        company: "Global Franchise Group",
        text: "The event was extremely well organized and gave us great exposure to entrepreneurs actively looking for franchise opportunities.",
    },
    {
        title: "Great Networking",
        company: "Business Expansion Inc.",
        text: "We met valuable partners, investors, and potential franchisees during the expo. The networking opportunities were excellent.",
    },
    {
        title: "Professional Event",
        company: "NextGen Franchising",
        text: "This expo helped increase our brand visibility significantly. We were impressed by the professionalism and attendee quality.",
    },
];

export default function ExhibitorTestimonials() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>
                            Exhibitors Testimonials
                        </h1>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introGrid}>

                        <div className={styles.introContent}>
                            <h2>
                                What Do Our Exhibitors Have To Say?
                            </h2>

                            <p>
                                MFV Expositions' franchise expos are among the largest
                                franchise exhibitions within the U.S, offering the largest
                                selection of franchise brands all under one roof.
                            </p>

                            <p>
                                Since 1991 MFV Expositions has been hosting expos and franchise
                                owners have come to our shows to seek out their perfect
                                franchise.
                            </p>

                            <p>
                                But don’t take our word for it, take a look at what some of our
                                exhibitors have to say about us!
                            </p>
                        </div>

                        <div className={styles.videoWrapper}>
                            <iframe
                                src="https://player.vimeo.com/video/855373079?h=140bc3b8a1"
                                title="Exhibitor Testimonials"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>

                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className={styles.testimonialCard}
                            >
                                <div className={styles.quoteIcon}>
                                    ❝
                                </div>

                                <h3>{item.title}</h3>

                                <p className={styles.company}>
                                    {item.company}
                                </p>

                                <p className={styles.description}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}