// app/ife/exhibitors/exhibitor-list/page.tsx

"use client";

import styles from "./ExhibitorList.module.css";
import {
    Search,
    MapPin,
    Building2,
    ArrowRight,
} from "lucide-react";

const exhibitors = [
    {
        name: "Subway",
        category: "Food & Beverage",
        location: "New York, USA",
        slug: "subway",
    },
    {
        name: "Anytime Fitness",
        category: "Fitness",
        location: "Minnesota, USA",
        slug: "anytime-fitness",
    },
    {
        name: "The UPS Store",
        category: "Business Services",
        location: "California, USA",
        slug: "the-ups-store",
    },
    {
        name: "Krispy Kreme",
        category: "Food Franchise",
        location: "North Carolina, USA",
        slug: "krispy-kreme",
    },
    {
        name: "Mathnasium",
        category: "Education",
        location: "California, USA",
        slug: "mathnasium",
    },
    {
        name: "7-Eleven",
        category: "Retail",
        location: "Texas, USA",
        slug: "7-eleven",
    },
];

export default function ExhibitorList() {
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

                        <h1>Exhibitor List</h1>

                        <p>
                            Browse exhibiting franchise brands by
                            industry, investment range, and location.
                            Discover the right opportunities for your
                            business journey.
                        </p>

                    </div>
                </div>
            </section>

            {/* FILTERS */}

            <section className={styles.filtersSection}>
                <div className={styles.container}>

                    <div className={styles.filtersWrapper}>

                        <div className={styles.searchBox}>
                            <Search size={18} />

                            <input
                                type="text"
                                placeholder="Search exhibitors..."
                            />
                        </div>

                        <select>
                            <option>All Categories</option>
                            <option>Food</option>
                            <option>Fitness</option>
                            <option>Retail</option>
                            <option>Education</option>
                        </select>

                        <select>
                            <option>Investment Range</option>
                            <option>$10k - $50k</option>
                            <option>$50k - $100k</option>
                            <option>$100k+</option>
                        </select>

                    </div>

                </div>
            </section>

            {/* EXHIBITORS */}

            <section className={styles.exhibitors}>
                <div className={styles.container}>

                    <div className={styles.heading}>
                        <span>2026 EXHIBITORS</span>
                        <h2>Featured Franchise Brands</h2>
                    </div>

                    <div className={styles.grid}>

                        {exhibitors.map((item, index) => (
                            <div
                                key={index}
                                className={styles.card}
                            >

                                <div className={styles.logo}>
                                    <Building2 size={34} />
                                </div>

                                <div className={styles.cardContent}>
                                    <h3>{item.name}</h3>

                                    <p>{item.category}</p>

                                    <div className={styles.location}>
                                        <MapPin size={15} />
                                        <span>{item.location}</span>
                                    </div>
                                </div>

                                <a
                                    href={`/ife/exhibitors/exhibitor-list/${item.slug}`}
                                    className={styles.button}
                                >
                                    View Details
                                    <ArrowRight size={16} />
                                </a>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}