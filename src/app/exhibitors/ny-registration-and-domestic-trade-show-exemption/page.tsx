"use client";

import styles from "./NYRegistration.module.css";

const deadlines = [
    {
        text: "For companies currently registered in NY but requiring renewal the deadline is April 30, 2026",
    },
    {
        text: "For companies not currently registered in NY but planning to register the deadline to register is March 29, 2026",
    },
    {
        text: "For companies not currently registered in NY but planning to apply for the Domestic Trade Show exemption the deadline to register is May 10, 2026",
    },
];

export default function NYRegistration() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        NY Registration and Domestic Trade Show Exemption
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    <div className={styles.contentCard}>

                        <p className={styles.mainText}>
                            The State of New York Office of the Attorney General -
                            Department of Law requires that in order to exhibit at
                            IFE, you must have a valid Franchise Disclosure Document
                            (FDD) and be registered in NY. Companies who have a valid
                            FDD that does not include NY, must file an application
                            for a temporary exemption. The Department of Law requires
                            that we provide them with proof of registration for each
                            company.
                        </p>

                        <h2 className={styles.sectionTitle}>
                            Important Deadlines
                        </h2>

                        <div className={styles.deadlineGrid}>
                            {deadlines.map((item, index) => (
                                <div
                                    className={styles.deadlineCard}
                                    key={index}
                                >
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.fredSection}>
                            <p>
                                All applications must be filed on the
                                Franchise Electronic Filing Depository
                                "FRED"
                            </p>

                            <a
                                href="https://www.nasaaefd.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.fredButton}
                            >
                                ACCESS FRED HERE
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* VENUE */}
            <section className={styles.venueSection}>
                <div className={styles.container}>

                    <div className={styles.venueCard}>
                        <h2>Venue / Location</h2>

                        <div className={styles.venueInfo}>
                            <p><strong>New York City, New York</strong></p>
                            <p>Javits Center, Hall 1C</p>
                            <p>429 11th Ave</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}