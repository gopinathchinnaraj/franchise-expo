"use client";

import styles from "./IFEUnplugged.module.css";
import { Mic2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function IFEUnplugged() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        IFE Unplugged
                    </h1>
                </div>
            </section>

            {/* ABOUT */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>

                    <div className={styles.aboutGrid}>

                        {/* LEFT */}
                        <div className={styles.content}>
                            <div className={styles.badge}>
                                <Mic2 size={18} />
                                Podcast Experience
                            </div>

                            <h2>
                                About The Podcast
                            </h2>

                            <p>
                                During the 2 day expo, MFV Expositions and Social Geek
                                will be recording 15-20 minute podcast interviews directly
                                from the show floor.
                            </p>

                            <p>
                                Exhibitors and industry experts will share insights on
                                industry trends, franchise growth, expo experiences,
                                and inspiring brand stories.
                            </p>

                            <div className={styles.logoBox}>
                                <img
                                    src="/images/ife/IFE-Unplugged/ife.webp"
                                    alt="IFE Unplugged"
                                />
                            </div>

                            <div className={styles.socialSection}>
                                <p>Follow us to listen to our podcast recordings</p>

                                <div className={styles.socialIcons}>
                                    <a
                                        href="https://www.facebook.com/mfvexpo"
                                        target="_blank"
                                    >
                                        <FaFacebookF />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/mfvexpo/"
                                        target="_blank"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className={styles.imageCard}>
                            <img
                                src="/images/austin/austin-unplugged/podcast.webp"
                                alt="Podcast"
                            />

                            <div className={styles.imageOverlay}>
                                <div>
                                    <span>Live Podcast Recording</span>
                                    <h3>On The Expo Floor</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* CONTACT */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactCard}>

                        <h3>Get In Touch</h3>

                        <p>
                            If you're interested in participating,
                            please reach out to:
                        </p>

                        <a href="mailto:Linda.Thompson@comexposium.com">
                            Linda.Thompson@comexposium.com
                        </a>

                    </div>
                </div>
            </section>

        </main>
    );
}