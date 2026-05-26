"use client";

import styles from "./PromotionalOpportunities.module.css";

const opportunities = [
    {
        title: "Aisle Sign Sponsor",
        image: "/images/promotional/Aisle_Sign_Sponsor.webp",
        description:
            "Own your aisle with a premium aisle sign. Attendees will have no trouble finding you when they see your logo overhead.",
    },
    {
        title: "Attendee E-Badge Email Sponsor",
        image: "/images/promotional/Attendee_E-Badge_Email_Sponsor.webp",
        description:
            "Capture the attention of pre-registered attendees and be top of mind before they even enter the expo hall.",
        note: "* Exclusive",
    },
    {
        title: "Badge Sponsor",
        image: "/images/promotional/Badge_Sponsor.webp",
        description:
            "Generate connections and brand recall as every attendee and exhibitor promotes your brand while walking the show floor.",
        note: "* Exclusive",
    },
    {
        title: "Branded Wifi Sponsor",
        image: "/images/promotional/Branded_Wifi_Sponsor.webp",
        description:
            "Amplify your presence as the official supplier of wifi services to the event.",
        note: "* Exclusive",
    },
    {
        title: "Entrance Banner",
        image: "/images/promotional/Entrance_Banner.webp",
        description:
            "Welcome attendees with a bold, unforgettable entrance banner and put your brand in the spotlight.",
        note: "SOLD OUT",
    },
    {
        title: "Expo Floor Graphics",
        image: "/images/promotional/Expo_Floor_Graphics.webp",
        description:
            "Stand out in the crowd with customized floor graphics promoting your brand and booth location.",
    },
    {
        title: "Official Show Bag",
        image: "/images/promotional/Official_Show_Bag.webp",
        description:
            "Grab the attention of attendees with one of the most visible sponsorships – the Official Show Bag.",
        note: "* Exclusive",
    },
    {
        title: "Show Bag Insert",
        image: "/images/promotional/Show_Bag_Insert.webp",
        description:
            "Put your brand directly into attendees' hands with a show bag insert opportunity.",
    },
    {
        title: "Vehicles In Lobby",
        image: "/images/promotional/Vehicles_In_Lobby.webp",
        description:
            "Steer attention to your brand with premium placement of your branded vehicle.",
        note: "SOLD OUT",
    },
];

export default function PromotionalOpportunities() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        Promotional Opportunities
                    </h1>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introContent}>
                        <p>
                            MFV Expositions’ franchise events provide the greatest
                            variety of opportunities to grow your business.
                            Make face-to-face connections with highly qualified
                            candidates, accelerating your sales process and lowering
                            your cost per lead.
                        </p>

                        <p>
                            Through key onsite promotion and advertising options,
                            take your brand to the next level and make the impact
                            you want.
                        </p>
                    </div>

                </div>
            </section>

            {/* CARDS */}
            <section className={styles.cardsSection}>
                <div className={styles.container}>

                    <div className={styles.cardsGrid}>
                        {opportunities.map((item, index) => (
                            <div
                                className={styles.card}
                                key={index}
                            >
                                <div className={styles.imageWrap}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className={styles.cardContent}>
                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    {item.note && (
                                        <span>{item.note}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CONTACT */}
            <section className={styles.contactSection}>
                <div className={styles.container}>

                    <div className={styles.contactCard}>
                        <h2>Get In Touch</h2>

                        <p>
                            If you're interested in any of our promotional opportunities,
                            please contact:
                        </p>

                        <a href="mailto:Justin.Wood@Comexposium.com">
                            Justin.Wood@Comexposium.com
                        </a>
                    </div>

                </div>
            </section>

        </main>
    );
}