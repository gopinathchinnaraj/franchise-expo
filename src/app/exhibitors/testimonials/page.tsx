"use client";

import PageBanner from "@/components/PageBanner";
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
      <PageBanner title="Exhibitor Testimonials" />

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
            <br/>
            <br /><br />

        </main>
    );
}