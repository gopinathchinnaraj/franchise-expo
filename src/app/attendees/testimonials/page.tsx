"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./AttendeesTestimonials.module.css";

export default function AttendeesTestimonials() {
    return (
        <main className={styles.page}>
            {/* HERO BANNER */}
            <PageBanner
                title="Attendee Testimonials"
                subtitle="Our attendees leave inspired, informed, and ready to take the next step toward franchise ownership. Here's what they had to say about their experience:"
            />

            {/* INTRO SECTION with attendee testimonials - EXACTLY LIKE IMAGE */}
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

            {/* EXHIBITOR SECTION */}
            <section className={styles.exhibitorSection}>
                <div className={styles.container}>
                    <div className={styles.exhibitorHeader}>
                        <img
                            src="https://www.franchiseexpo.com/images/template/quote-icon.svg"
                            alt="Quote icon"
                        />
                        <h2>HEAR WHAT OUR EXHIBITORS HAVE TO SAY</h2>
                    </div>

                    <div className={styles.exhibitorTestimonial}>
                        <p className={styles.exhibitorQuote}>
                            "We know that there's a lot of great investors, people looking for franchises coming through the show. MFV Expositions and their expos are very reputable, and out of all the shows we go to this is one of them where we get the best results."
                        </p>
                        <div className={styles.exhibitorAuthor}>
                            <h4>Dan Doulen</h4>
                            <span>Wings and Rings</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION - Your Success Story Starts Here */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Your Success Story Starts Here</h2>
                        <p>
                            Get ready to explore, learn, and take the first step toward
                            achieving your dreams of business ownership.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}