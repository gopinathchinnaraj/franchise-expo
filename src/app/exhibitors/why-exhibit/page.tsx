"use client";

import styles from "./WhyExhibit.module.css";
import {
    Search,
    TrendingUp,
    Users,
    Plus,
} from "lucide-react";

const benefits = [
    {
        icon: <Search size={28} />,
        title: "Exposure",
        description:
            "Engage with visitors pre-show, onsite and post-show through our marketing vehicles, including exhibiting, digital and print marketing, enhanced sponsorships, and appointment setting opportunities.",
    },

    {
        icon: <TrendingUp size={28} />,
        title: "Generate New Leads",
        description:
            "Thousands of qualified candidates attend seeking franchise ownership opportunities including multi-unit ownership, area development, and master franchising.",
    },

    {
        icon: <Users size={28} />,
        title: "Connect With Candidates",
        description:
            "Showcase your franchise and actively engage with prospective candidates throughout your sales funnel using our complimentary guest program.",
    },

    {
        icon: <Plus size={28} />,
        title: "New Product Launches",
        description:
            "Gain exposure for company launches, new initiatives, and press releases through the Expo's targeted network of attendees, sponsors, partners, and associations.",
    },
];

const events = [
    "International Franchise Expo",
    "Franchise Expo South",
    "Franchise Expo Cincinnati",
    "Franchise Expo West",
    "Franchise Expo Dallas",
];

export default function WhyExhibit() {
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

                        <h1>Why Exhibit</h1>

                        <p>
                            Showcase your franchise brand and connect
                            with entrepreneurs, investors, and industry
                            leaders from around the world.
                        </p>
                    </div>

                </div>
            </section>

            {/* OPPORTUNITIES */}

            <section className={styles.opportunities}>
                <div className={styles.container}>

                    <div className={styles.opportunityGrid}>

                        <div className={styles.opportunityCard}>
                            <h2>Exhibitor Opportunities</h2>

                            <p>
                                <strong>FRANCHISE BRANDS</strong> —
                                Showcase your concept on a global stage.
                                Connect with entrepreneurs and investors
                                exploring franchise ownership opportunities.
                            </p>

                            <p>
                                <strong>INDUSTRY SUPPLIERS</strong> —
                                Position your brand as a trusted partner
                                in the franchise ecosystem and generate
                                valuable leads through targeted exposure.
                            </p>
                        </div>

                        <div className={styles.opportunityCard}>
                            <h2>Sponsorship Opportunities</h2>

                            <p>
                                Non-exhibiting sponsorship opportunities
                                allow suppliers to strategically connect
                                with franchisors and key decision-makers
                                using branding, messaging, and on-site
                                visibility.
                            </p>

                            <p>
                                Sponsors also gain access to exclusive
                                exhibitor networking events and private
                                receptions to expand their franchise
                                network.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* FORM */}

            <section className={styles.formSection}>
                <div className={styles.container}>

                    <div className={styles.formWrapper}>

                        <div className={styles.formLeft}>
                            <span>GET STARTED</span>

                            <h2>
                                Learn More About Exhibitor &
                                Sponsorship Opportunities
                            </h2>

                            <p>
                                Fill out the form below and our team
                                will contact you with exhibitor and
                                sponsorship information.
                            </p>
                        </div>

                        <form className={styles.form}>

                            <div className={styles.row}>
                                <input
                                    type="text"
                                    placeholder="First Name *"
                                />

                                <input
                                    type="text"
                                    placeholder="Last Name *"
                                />
                            </div>

                            <div className={styles.row}>
                                <input
                                    type="email"
                                    placeholder="Email *"
                                />

                                <input
                                    type="text"
                                    placeholder="Company *"
                                />
                            </div>

                            <div className={styles.row}>
                                <input
                                    type="text"
                                    placeholder="Phone *"
                                />
                            </div>

                            <div className={styles.checkboxSection}>
                                <label className={styles.label}>
                                    Does your company have a FDD?
                                </label>

                                <div className={styles.checkboxGroup}>
                                    {["YES", "NO", "Not Sure"].map(
                                        (item, index) => (
                                            <label
                                                key={index}
                                                className={styles.checkbox}
                                            >
                                                <input type="checkbox" />
                                                <span>{item}</span>
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className={styles.checkboxSection}>
                                <label className={styles.label}>
                                    Which event(s) are you interested in?
                                </label>

                                <div className={styles.eventGrid}>
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

                            <button type="submit">
                                Submit
                            </button>

                        </form>

                    </div>

                </div>
            </section>

            {/* BENEFITS */}

            <section className={styles.benefits}>
                <div className={styles.container}>

                    <div className={styles.heading}>
                        <span>WHY EXHIBIT</span>

                        <h2>Benefits Of Exhibiting</h2>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className={styles.benefitCard}
                            >

                                <div className={styles.icon}>
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}