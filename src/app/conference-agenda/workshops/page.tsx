"use client";

import styles from "./Workshops.module.css";

const buyingTopics = [
    {
        title: "Focus On You",
        points: [
            "Do you plan to work alone or with others?",
            "How do you want to spend the next 10, 20 or more years of your life?",
        ],
    },
    {
        title: "The Disclosure Document",
        points: ["Includes 21 Items"],
    },
    {
        title: "How much money can I make?",
        points: ["Fees, bargains, is it justifiable?"],
    },
    {
        title: "Where and how to ask for help?",
        points: ["Consult your advisors with caution"],
    },
];

const businessTopics = [
    {
        title: "The Decision to Franchise",
        points: [
            "How Franchising Works",
            "Alternatives",
            "Quality Control",
            "Legal Aspects of Franchising",
        ],
    },
    {
        title: "Marketing Your Franchise",
        points: [
            "Start locally, then regionally",
            "Don’t expand faster than your support capability",
        ],
    },
    {
        title: "Selling Your Franchise",
        points: [
            "Unique process unlike any other sales",
            "Predictability",
        ],
    },
    {
        title: "Creating a Successful Franchise Strategy",
        points: [
            "Structural Decisions",
            "Financial",
            "Organizational Development",
        ],
    },
];

export default function Workshops() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        Workshops
                    </h1>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introGrid}>

                        <div>
                            <h2 className={styles.sectionTitle}>
                                Join Us For Our Workshops!
                            </h2>

                            <div className={styles.workshopBlock}>
                                <h3>A To Z's Of Buying A Franchise</h3>

                                <p>
                                    If you're looking for no-nonsense,
                                    cut-to-the-quick, how to evaluate
                                    franchises so that you can buy one
                                    that's right for you, this is the
                                    perfect workshop.
                                </p>
                            </div>

                            <div className={styles.workshopBlock}>
                                <h3>Franchise Your Business</h3>

                                <p>
                                    This workshop is ideal for business
                                    owners interested in franchising or
                                    those trying to determine if
                                    franchising is a legitimate growth option.
                                </p>

                                <span className={styles.note}>
                                    * additional workshop fee required
                                </span>
                            </div>
                        </div>

                        <div className={styles.imageBox}>
                            <img
                                src="/images/workshops.webp"
                                alt="Workshop"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* BUYING TOPICS */}
            <section className={styles.topicSection}>
                <div className={styles.container}>

                    <h2 className={styles.topicTitle}>
                        The Topics For <br />
                        A To Z's Of Buying A Franchise
                    </h2>

                    <div className={styles.cardGrid}>
                        {buyingTopics.map((item, index) => (
                            <div
                                key={index}
                                className={styles.topicCard}
                            >
                                <div className={styles.icon}>
                                    ✓
                                </div>

                                <h3>{item.title}</h3>

                                {item.points.map((point, i) => (
                                    <p key={i}>{point}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BUSINESS TOPICS */}
            <section className={styles.topicSection}>
                <div className={styles.container}>

                    <h2 className={styles.topicTitle}>
                        The Topics For <br />
                        Franchise Your Business
                    </h2>

                    <div className={styles.cardGrid}>
                        {businessTopics.map((item, index) => (
                            <div
                                key={index}
                                className={styles.topicCard}
                            >
                                <div className={styles.icon}>
                                    ★
                                </div>

                                <h3>{item.title}</h3>

                                {item.points.map((point, i) => (
                                    <p key={i}>{point}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}