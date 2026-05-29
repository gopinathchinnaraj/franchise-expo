"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./PromotionalOpportunities.module.css";

const opportunities = [
    {
        title: "Aisle Sign Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Aisle_Sign_Sponsor.webp",
        description:
            "Own your aisle with a premium aisle sign. Attendees will have no trouble finding you when they see your logo overhead.",
    },
    {
        title: "Attendee E-Badge Email Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Attendee_E-Badge_Email_Sponsor.webp",
        description:
            "Capture the attention of pre-registered attendees and be top of mind before they even enter the expo hall.",
        note: "* Exclusive",
    },
    {
        title: "Badge Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Attendee_E-Newsletter_Sponsor.webp",
        description:
            "Generate connections and brand recall as every attendee and exhibitor promotes your brand while walking the show floor.",
        note: "* Exclusive",
    },
    {
        title: "Branded Wifi Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Badge_Sponsor.webp",
        description:
            "Amplify your presence as the official supplier of wifi services to the event.",
        note: "* Exclusive",
    },
    {
        title: "Entrance Banner",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Badge_Lanyard_Sponsor.webp",
        description:
            "Welcome attendees with a bold, unforgettable entrance banner and put your brand in the spotlight.",
        note: "SOLD OUT",
    },
    {
        title: "Expo Floor Graphics",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Branded_Wifi_Sponsor.webp",
        description:
            "Stand out in the crowd with customized floor graphics promoting your brand and booth location.",
    },
    {
        title: "Official Show Bag",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Entrance_Column_Wrap.webp",
        description:
            "Grab the attention of attendees with one of the most visible sponsorships – the Official Show Bag.",
        note: "* Exclusive",
    },
    {
        title: "Show Bag Insert",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Entrance_Door_Graphics.webp",
        description:
            "Put your brand directly into attendees' hands with a show bag insert opportunity.",
    },
    {
        title: "Vehicles In Lobby",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Event_Guide_Advertising.webp",
        description:
            "Steer attention to your brand with premium placement of your branded vehicle.",
        note: "SOLD OUT",
    },
];

export default function PromotionalOpportunities() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            
            <PageBanner title="Promotional Opportunities"/>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introContent}>
                        <p>
                            MFV Expositions’ franchise events provide the greatest
                            variety of opportunities to grow your business.
                            Make face-to-face connections with highly qualified
                            candidates, accelerating your sales process and lowering
                            your cost per lead. Through key onsite promotion and advertising options,
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
                            <div className={styles.card} key={index}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.cardImage}
                                />

                                <div className={styles.overlay}>
                                    <div className={styles.triangle}></div>

                                    <h3>{item.title}</h3>

                                    <div className={styles.hiddenContent}>
                                        <p>{item.description}</p>

                                        {item.note && (
                                            <span>{item.note}</span>
                                        )}
                                    </div>
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