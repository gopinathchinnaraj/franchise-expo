"use client";

import styles from "./ShowSponsors.module.css";

const platinumSponsors = [
    {
        name: "Entrepreneur",
        image: "/images/sponsors/entrepreneur.webp",
        link: "#",
    },
];

const goldSponsors = [
    {
        name: "BeTheBoss",
        image: "/images/sponsors/betheboss.webp",
        link: "#",
    },
    {
        name: "BizBuySell",
        image: "/images/sponsors/bizbuysell.webp",
        link: "#",
    },
    {
        name: "Emma Inc.",
        image: "/images/sponsors/emma.webp",
        link: "#",
    },
    {
        name: "F.C. Dadson",
        image: "/images/sponsors/dadson.webp",
        link: "#",
    },
    {
        name: "MetAiBlock",
        image: "/images/sponsors/metaiblock.webp",
        link: "#",
    },
    {
        name: "Stark and Stark Attorneys at Law",
        image: "/images/sponsors/stark.webp",
        link: "#",
    },
];

const silverSponsors = [
    {
        name: "Guidant",
        image: "/images/sponsors/guidant.webp",
        link: "#",
    },
    {
        name: "Sesimi",
        image: "/images/sponsors/sesimi.webp",
        link: "#",
    },
    {
        name: "Signation Sign Group",
        image: "/images/sponsors/signation.webp",
        link: "#",
    },
    {
        name: "The Entrepreneur's Source",
        image: "/images/sponsors/source.webp",
        link: "#",
    },
    {
        name: "The Franchise Firm",
        image: "/images/sponsors/franchise-firm.webp",
        link: "#",
    },
];

export default function ShowSponsors() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>
                            Show Sponsors
                        </h1>
                    </div>
                </div>
            </section>

            {/* SPONSORS */}
            <section className={styles.sponsorsSection}>
                <div className={styles.container}>

                    {/* PLATINUM */}
                    <div className={styles.sponsorGroup}>
                        <h2 className={styles.sectionTitle}>
                            Platinum Sponsors
                        </h2>

                        <div className={styles.sponsorsGrid}>
                            {platinumSponsors.map((sponsor, index) => (
                                <div
                                    key={index}
                                    className={styles.sponsorCard}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className={styles.sponsorImage}
                                    />

                                    <h3>{sponsor.name}</h3>

                                    <a href={sponsor.link}>
                                        View Profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GOLD */}
                    <div className={styles.sponsorGroup}>
                        <h2 className={styles.sectionTitle}>
                            Gold Sponsors
                        </h2>

                        <div className={styles.sponsorsGrid}>
                            {goldSponsors.map((sponsor, index) => (
                                <div
                                    key={index}
                                    className={styles.sponsorCard}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className={styles.sponsorImage}
                                    />

                                    <h3>{sponsor.name}</h3>

                                    <a href={sponsor.link}>
                                        View Profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SILVER */}
                    <div className={styles.sponsorGroup}>
                        <h2 className={styles.sectionTitle}>
                            Silver Sponsors
                        </h2>

                        <div className={styles.sponsorsGrid}>
                            {silverSponsors.map((sponsor, index) => (
                                <div
                                    key={index}
                                    className={styles.sponsorCard}
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className={styles.sponsorImage}
                                    />

                                    <h3>{sponsor.name}</h3>

                                    <a href={sponsor.link}>
                                        View Profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}