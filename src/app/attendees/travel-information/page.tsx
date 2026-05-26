"use client";

import styles from "./TravelInformation.module.css";

const hotels = [
    {
        name: "HYATT PLACE New York City / Times Square",
        address: "350 W. 39th Street, New York City, NY 10018",
        image: "/images/hyatt-place.webp",
        link: "#",
    },
    {
        name: "EVEN Hotel New York - Times Square South",
        address: "321 West 35th Street, New York City, NY 10001",
        image: "/images/even-hotel.webp",
        link: "#",
    },
    {
        name: "Crowne Plaza HY36 Midtown Manhattan",
        address: "320 West 36th Street, New York City, NY 10018",
        image: "/images/crowne-plaza.webp",
        link: "#",
    },
    {
        name: "Four Points by Sheraton Manhattan Midtown West",
        address: "444 10th Ave, New York City, NY 10001",
        image: "/images/four-points.webp",
        link: "#",
    },
];

export default function TravelInformation() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>
                            Travel Information
                        </h1>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introContent}>
                        <h2>
                            THE INTERNATIONAL FRANCHISE EXPO HAS
                            PARTNERED WITH THE HOTELS BELOW:
                        </h2>

                        <p>
                            <em>
                                *Take note that we do NOT work with third
                                party agency room brokers. Should you be
                                contacted by them, please refrain from using
                                their services to book your room.
                            </em>
                        </p>
                    </div>

                </div>
            </section>

            {/* HOTELS */}
            <section className={styles.hotelsSection}>
                <div className={styles.container}>

                    <div className={styles.hotelsGrid}>

                        {hotels.map((hotel, index) => (
                            <div
                                className={styles.hotelCard}
                                key={index}
                            >

                                <div className={styles.hotelContent}>
                                    <h3>{hotel.name}</h3>

                                    <p>{hotel.address}</p>

                                    <a
                                        href={hotel.link}
                                        className={styles.hotelBtn}
                                    >
                                        MAKE YOUR RESERVATION
                                    </a>
                                </div>

                                <div className={styles.hotelImageWrap}>
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className={styles.hotelImage}
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