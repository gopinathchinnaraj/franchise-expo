"use client";

import styles from "./FloorPlan.module.css";
import {
    // Facebook,
    // Instagram,
    Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FloorPlan() {
    return (
        <main className={styles.page}>

            {/* SOCIAL FIXED */}

            <div className={styles.socialFixed}>

                <a href="#" className={styles.socialBtn}>
                    <Sparkles size={28} />
                </a>

                <a
                    href="https://facebook.com"
                    target="_blank"
                    className={styles.socialBtn}
                >
                    <FaFacebookF size={28} />
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    className={styles.socialBtn}
                >
                    <FaInstagram size={28} />
                </a>

            </div>

            {/* HERO */}

            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>

                <div className={styles.container}>
                    <h1>Floorplan</h1>
                </div>
            </section>

            {/* FORM SECTION */}

            <section className={styles.formSection}>
                <div className={styles.container}>

                    <div className={styles.formWrapper}>

                        <h2>
                            Enter Your Details To View Our Floorplan
                        </h2>

                        <form className={styles.form}>

                            <input
                                type="text"
                                placeholder="Name *"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number *"
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                            />

                            <div className={styles.checkboxGroup}>

                                <label className={styles.checkbox}>
                                    <input type="checkbox" />

                                    <span>
                                        I agree to receiving all show
                                        information, in addition to
                                        the information I have requested.
                                    </span>
                                </label>

                                <label className={styles.checkbox}>
                                    <input type="checkbox" />

                                    <span>
                                        I agree to Comexposium storing
                                        and processing my personal data
                                        for the purpose of the request.
                                    </span>
                                </label>

                            </div>

                            <p className={styles.note}>
                                You can unsubscribe from these
                                communications at any time.
                                For more information, please
                                review our Privacy Policy.
                            </p>

                            <button type="submit">
                                Submit
                            </button>

                        </form>

                    </div>

                    {/* CTA */}

                    <div className={styles.cardGrid}>

                        <div className={styles.card}>
                            <a href="#">LEARN MORE</a>

                            <h3>
                                Interested In Attending?
                            </h3>
                        </div>

                        <div className={styles.card}>
                            <a href="#">LEARN MORE</a>

                            <h3>
                                Interested In Exhibiting?
                            </h3>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}