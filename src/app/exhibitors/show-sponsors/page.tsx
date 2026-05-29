"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./ShowSponsors.module.css";

const platinumSponsors = [
    {
        name: "Entrepreneur",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_287_254.webp?d379ab892179a7e4eed7ceb2ffa43760",
        link: "#",
    },
];

const goldSponsors = [
    {
        name: "BeTheBoss",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_275.webp?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "BizBuySell",
        image: "https://www.franchiseexpo.com/images/sponsors/IFE/BizBuySell.svg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "Emma Inc.",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_430.jpg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "F.C. Dadson",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_274.webp?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "MetAiBlock",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_434.png?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "Stark and Stark Attorneys at Law",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_269.jpg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
];

const silverSponsors = [
    {
        name: "Guidant",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_280.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "Sesimi",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_356.png?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "Signation Sign Group",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_291.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "The Entrepreneur's Source",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_406.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "The Franchise Firm",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_288.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
];

export default function ShowSponsors() {
    return (
        <main className={styles.page}>

            {/* HERO */}
           <PageBanner title="Show Sponsors"/>

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