"use client";

import Image from "next/image";
import styles from "./AboutUs.module.css";

const expoCards = [
    {
        title: "The International Franchise Expo (IFE)",
        image: "https://www.franchiseexpo.com/images/ife/ife-thumbnail.jpg",
        description:
            "The largest franchise exhibition in the USA bringing together hundreds of franchise concepts and thousands of qualified prospects from across the world.",
        link: "/ife",
    },
    {
        title: "Franchise Expo Dallas",
        image: "https://www.franchiseexpo.com/images/dallas/dallas-thumbnail.jpg",
        description:
            "Explore franchise opportunities, meet leading brands, and attend educational workshops designed for entrepreneurs and investors.",
        link: "/dallas",
    },
    {
        title: "Franchise Expo South",
        image: "https://www.franchiseexpo.com/images/south/south-thumbnail.jpg",
        description:
            "Learn about the franchise process, connect with brands, and attend educational sessions focused on franchise ownership.",
        link: "/south",
    },
    {
        title: "Franchise Expo West",
        image: "https://www.franchiseexpo.com/images/west/west-thumbnail.jpg",
        description:
            "The premier franchise event in the growing West Coast market connecting investors with top franchise concepts.",
        link: "/west",
    },
];

export default function AboutUs() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>
                            Franchise Expo
                        </span>

                        <h1>About Us</h1>

                        <p>
                            Bringing the franchise world together since 1991 through
                            global franchise expos, networking opportunities,
                            educational conferences, and business expansion platforms.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introGrid}>

                        <div className={styles.introContent}>
                            <h2>
                                Bringing The Franchise World Together
                            </h2>

                            <p>
                                MFV Expositions global brands have been generating qualified
                                leads for franchisors through premier franchise events,
                                online platforms, and business networking opportunities.
                            </p>

                            <p>
                                The Franchise Expo Series connects entrepreneurs,
                                franchisors, investors, and industry experts under one roof
                                across major metropolitan markets in North America.
                            </p>

                            <p>
                                Our mission is to foster economic growth and create
                                opportunities through innovative business concepts,
                                franchise education, and strategic networking.
                            </p>
                        </div>

                        <div className={styles.introImage}>
                            <Image
                                src="https://www.franchiseexpo.com/images/austin/E-zone-page/crowd-2.webp"
                                alt="Franchise Expo"
                                fill
                                className={styles.image}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* MEMBERS */}
            <section className={styles.memberSection}>
                <div className={styles.container}>

                    <div className={styles.sectionTop}>
                        <span>PROUD MEMBER</span>
                        <h2>Industry Associations</h2>
                    </div>

                    <div className={styles.memberGrid}>

                        <div className={styles.memberCard}>
                            <Image
                                src="https://www.franchiseexpo.com/images/IFA_member.webp"
                                alt="IFA"
                                width={180}
                                height={180}
                            />
                        </div>

                        <div className={styles.memberCard}>
                            <Image
                                src="https://www.franchiseexpo.com/images/IFA_Supplier_Forum.webp"
                                alt="IFA Supplier"
                                width={180}
                                height={180}
                            />
                        </div>

                        <div className={styles.memberCard}>
                            <Image
                                src="https://www.franchiseexpo.com/images/canadian-francise-association-member.webp"
                                alt="Canadian Franchise"
                                width={200}
                                height={120}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* EXPO CARDS */}
            <section className={styles.expoSection}>
                <div className={styles.container}>

                    <div className={styles.sectionTop}>
                        <span>OUR EVENTS</span>
                        <h2>Franchise Expo Series</h2>
                    </div>

                    <div className={styles.cardGrid}>
                        {expoCards.map((expo, index) => (
                            <div
                                key={index}
                                className={styles.card}
                            >

                                <div className={styles.cardImage}>
                                    <Image
                                        src={expo.image}
                                        alt={expo.title}
                                        fill
                                        className={styles.image}
                                    />
                                </div>

                                <div className={styles.cardContent}>
                                    <h3>{expo.title}</h3>

                                    <p>{expo.description}</p>

                                    <a href={expo.link}>
                                        Explore Event
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}