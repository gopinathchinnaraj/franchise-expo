"use client";

import Image from "next/image";
import styles from "./ContactUs.module.css";

const contactCards = [
    {
        category: "Sales",
        title: "Request Exhibitor Info",
        name: "Justin Wood",
        role: "Senior Account Executive",
        email: "Justin.Wood@Comexposium.com",
        phone: "240.398.1385",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_307.jpg",
    },

    {
        category: "Marketing",
        title: "Attendee and Conference Info",
        name: "Linda Thompson",
        role: "Marketing Director",
        email: "Linda.Thompson@comexposium.com",
        phone: "201.881.1646",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_311.png",
    },

    {
        category: "Customer Relations",
        title: "Exhibitor Services and Operations",
        name: "Murphy Connolly",
        role: "Director of Operations & Services",
        email: "Murphy.Connolly@comexposium.com",
        phone: "631.335.5696",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_314.png",
    },
];

const events = [
    "International Franchise Expo",
    "Franchise Expo South",
    "Franchise Expo Cincinnati",
    "Franchise Expo Dallas",
    "Franchise Expo West",
];

export default function ContactUs() {
    return (
        <main className={styles.page}>

            {/* HERO */}

            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.container}>
                    <div className={styles.heroContent}>

                        <span className={styles.tag}>
                            Franchise Expo International
                        </span>

                        <h1>Contact Us</h1>

                        <p>
                            Connect with our team for exhibitor info,
                            attendee inquiries, sponsorship opportunities,
                            and event participation.
                        </p>

                    </div>
                </div>
            </section>

            {/* CONTACT CARDS */}

            <section className={styles.cardsSection}>
                <div className={styles.container}>

                    <div className={styles.grid}>
                        {contactCards.map((item, index) => (
                            <div
                                key={index}
                                className={styles.card}
                            >

                                <div className={styles.imageWrap}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.image}
                                    />

                                    <span className={styles.category}>
                                        {item.category}
                                    </span>
                                </div>

                                <div className={styles.cardContent}>

                                    <p className={styles.cardTitle}>
                                        {item.title}
                                    </p>

                                    <h3>{item.name}</h3>

                                    <p className={styles.role}>
                                        {item.role}
                                    </p>

                                    <div className={styles.info}>
                                        <span>
                                            E: {item.email}
                                        </span>

                                        <span>
                                            T: {item.phone}
                                        </span>
                                    </div>

                                    <a
                                        href={`mailto:${item.email}`}
                                        className={styles.button}
                                    >
                                        Email Me
                                    </a>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CONTACT FORM */}

            <section className={styles.formSection}>
                <div className={styles.container}>

                    <div className={styles.formWrapper}>

                        <div className={styles.formLeft}>
                            <span>GET IN TOUCH</span>

                            <h2>
                                Let’s Start
                                The Conversation
                            </h2>

                            <p>
                                Fill out the form and our team
                                will get back to you regarding
                                event participation, exhibiting,
                                sponsorships, or conference inquiries.
                            </p>
                        </div>

                        <form className={styles.form}>

                            <div className={styles.row}>
                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Company *"
                                    required
                                />
                            </div>

                            <div className={styles.row}>
                                <input
                                    type="text"
                                    placeholder="Phone *"
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Email *"
                                    required
                                />
                            </div>

                            <div className={styles.checkboxGroup}>

                                <label className={styles.label}>
                                    Which event(s) are you interested in?
                                </label>

                                <div className={styles.checkboxGrid}>
                                    {events.map((event, index) => (
                                        <label
                                            key={index}
                                            className={styles.checkbox}
                                        >
                                            <input type="checkbox" />

                                            <span>{event}</span>
                                        </label>
                                    ))}
                                </div>

                            </div>

                            <textarea
                                placeholder="Do you have any comments?"
                                rows={6}
                            ></textarea>

                            <button type="submit">
                                Submit
                            </button>

                        </form>

                    </div>

                </div>
            </section>

        </main>
    );
}