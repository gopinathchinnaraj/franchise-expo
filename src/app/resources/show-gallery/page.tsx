"use client";

import Image from "next/image";
import styles from "./ShowGallery.module.css";

const galleryImages = [
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05948.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05896.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05883.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05869.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05854.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05847.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05829.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05821.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05817.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05816.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05813.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05798.webp",
];

export default function ShowGallery() {
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

                        <h1>
                            Show Gallery
                        </h1>

                        <p>
                            Explore unforgettable moments, exhibitions,
                            networking experiences, and highlights from
                            Franchise Expo International.
                        </p>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className={styles.gallerySection}>
                <div className={styles.container}>

                    <div className={styles.topContent}>
                        <span className={styles.smallTitle}>
                            Event Memories
                        </span>

                        <h2>
                            Gallery Collection
                        </h2>

                        <p>
                            Discover premium snapshots from the exhibition floor,
                            conferences, exhibitors, and business networking sessions.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}