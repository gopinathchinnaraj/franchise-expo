// app/ife/exhibitors/exhibitor-list/[slug]/page.tsx

"use client";

import styles from "./ExhibitorDetails.module.css";
import { MapPin, Globe, Phone } from "lucide-react";

const exhibitors: any = {
    subway: {
        name: "Subway",
        category: "Food & Beverage",
        location: "New York, USA",
        website: "www.subway.com",
        phone: "+1 212 555 1234",
        description:
            "Subway is one of the world's largest restaurant franchise brands offering fresh sandwiches, wraps, and salads.",
    },

    "anytime-fitness": {
        name: "Anytime Fitness",
        category: "Fitness",
        location: "Minnesota, USA",
        website: "www.anytimefitness.com",
        phone: "+1 612 555 4321",
        description:
            "Anytime Fitness is a global fitness franchise with 24/7 gym access and wellness services.",
    },

    "the-ups-store": {
        name: "The UPS Store",
        category: "Business Services",
        location: "California, USA",
        website: "www.theupsstore.com",
        phone: "+1 310 555 1122",
        description:
            "The UPS Store offers printing, shipping, mailbox, and small business solutions.",
    },
};

export default function ExhibitorDetails({
    params,
}: {
    params: { slug: string };
}) {

    const exhibitor = exhibitors[params.slug];

    if (!exhibitor) {
        return <div>Exhibitor Not Found</div>;
    }

    return (
        <main className={styles.page}>

            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.container}>
                    <span className={styles.tag}>
                        Exhibitor Details
                    </span>

                    <h1>{exhibitor.name}</h1>

                    <p>{exhibitor.description}</p>
                </div>
            </section>

            <section className={styles.details}>
                <div className={styles.container}>

                    <div className={styles.card}>

                        <div className={styles.infoItem}>
                            <MapPin size={20} />
                            <span>{exhibitor.location}</span>
                        </div>

                        <div className={styles.infoItem}>
                            <Globe size={20} />
                            <span>{exhibitor.website}</span>
                        </div>

                        <div className={styles.infoItem}>
                            <Phone size={20} />
                            <span>{exhibitor.phone}</span>
                        </div>

                        <div className={styles.category}>
                            {exhibitor.category}
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}