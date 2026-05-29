"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./IFEUnplugged.module.css";
import { Mic2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function IFEUnplugged() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <PageBanner title="IFE Unplugged"/>

            {/* ABOUT */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>

                    <div className={styles.aboutGrid}>

                        {/* LEFT */}
                        <div className={styles.content}>
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
                                    src="https://www.franchiseexpo.com/images/ife/IFE-Unplugged/ife.webp"
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb1AD77jEq0Y1GxlBb7wVOTvROV73Ke0RhA&s"
                                alt="Podcast"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* CONTACT */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactCard}>

                        <h3>GET IN TOUCH</h3>

                        <p>
                            If you're interested in participating,
                            <br />
                            please reach out to{" "}
                            <a href="mailto:Linda.Thompson@comexposium.com">
                                Linda.Thompson@comexposium.com
                            </a>
                        </p>

                    </div>
                </div>
            </section>

        </main>
    );
}