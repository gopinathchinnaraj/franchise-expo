"use client";

import styles from "./AttendeesTestimonials.module.css";

const testimonials = [
    {
        quote:
            "Attending the expo gave me the clarity I needed to move forward with a franchise.",
        name: "C. Syma",
    },
    {
        quote:
            "The ability to connect directly with franchisors was invaluable. I got all my questions answered in one day!",
        name: "L. Michaels",
    },
    {
        quote:
            "Coming to these expos is huge because it makes a giant impact for us and other exhibitors who are looking for franchisees so they can grow.",
        name: "Matt Sawicki",
        company: "Scooter’s Coffee",
    },
];

export default function AttendeesTestimonials() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>
                            Attendees Testimonials
                        </h1>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introGrid}>

                        {/* LEFT CONTENT */}
                        <div className={styles.content}>
                            <h2>
                                What Do Our Attendees Have To Say?
                            </h2>

                            <p>
                                Our attendees leave inspired, informed, and ready
                                to take the next step toward franchise ownership.
                                Here’s what they had to say about their experience:
                            </p>

                            <h3>Stories of Success and Discovery</h3>

                            <div className={styles.smallTestimonials}>
                                <div className={styles.smallCard}>
                                    <p>
                                        “Attending the expo gave me the clarity I needed
                                        to move forward with a franchise”
                                    </p>

                                    <span>- C. Syma</span>
                                </div>

                                <div className={styles.smallCard}>
                                    <p>
                                        “The ability to connect directly with franchisors
                                        was invaluable. I got all my questions answered
                                        in one day!”
                                    </p>

                                    <span>- L. Michaels</span>
                                </div>
                            </div>

                            
                        </div>

                        {/* VIDEO */}
                        <div className={styles.videoWrap}>
                            <div className={styles.videoContainer}>
                                <iframe
                                    src="https://player.vimeo.com/video/855383917?h=7a0e97a924"
                                    title="Attendees Testimonials"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            
                        </div>

                    </div>
                </div>
            </section>

            {/* TESTIMONIAL SLIDER */}
            <section className={styles.testimonialSection}>
                <div className={styles.container}>

                    <div className={styles.testimonialHeader}>
                        <img
                            src="https://www.franchiseexpo.com/images/template/quote-icon.svg"
                            alt="Quote"
                        />

                        <h2>
                            Hear what Our Exhibitors Have To Say
                        </h2>
                    </div>

                    <div className={styles.testimonialGrid}>

                        {testimonials.map((item, index) => (
                            <div
                                className={styles.testimonialCard}
                                key={index}
                            >
                                <p className={styles.quote}>
                                    "{item.quote}"
                                </p>

                                <div className={styles.author}>
                                    <h4>{item.name}</h4>

                                    {item.company && (
                                        <span>{item.company}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}