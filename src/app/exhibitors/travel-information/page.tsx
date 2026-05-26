"use client";

import styles from "./TravelInformation.module.css";

const hotels = [
    {
        name: "HYATT PLACE New York City / Times Square",
        address: "350 W. 39th Street, New York City, NY 10018",
        image: "/images/travel/hyatt.webp",
        button: "MAKE YOUR RESERVATION",
        link: "#",
    },
    {
        name: "EVEN Hotel New York - Times Square South",
        address: "321 West 35th Street, New York City, NY 10001",
        image: "/images/travel/even-hotel.jpg",
        button: "MAKE RESERVATION",
        link: "#",
    },
    {
        name: "Crowne Plaza HY36 Midtown Manhattan",
        address: "320 West 36th Street, New York City, NY 10018",
        image: "/images/travel/crowne-plaza.jpg",
        button: "MAKE RESERVATION",
        link: "#",
    },
    {
        name: "Four Points by Sheraton Manhattan Midtown West",
        address: "444 10th Ave, New York City, NY 10001",
        image: "/images/travel/four-points.jpg",
        button: "MAKE RESERVATION",
        link: "#",
    },
];

export default function TravelInformation() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        Travel Information
                    </h1>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introContent}>
                        <h2>
                            The International Franchise Expo has partnered
                            with the hotels below:
                        </h2>

                        <p>
                            *Take note that we do NOT work with third
                            party agency room brokers. Should you be
                            contacted by them, please refrain from using
                            their services to book your room.
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
                                <div className={styles.hotelImage}>
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                    />
                                </div>

                                <div className={styles.hotelContent}>
                                    <h3>{hotel.name}</h3>

                                    <p>{hotel.address}</p>

                                    <a
                                        href={hotel.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {hotel.button}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* VENUE */}
            <section className={styles.venueSection}>
                <div className={styles.container}>

                    <div className={styles.venueCard}>
                        <h2>Venue / Location</h2>

                        <div className={styles.venueInfo}>
                            <p><strong>New York City, New York</strong></p>
                            <p>Javits Center, Hall 1C</p>
                            <p>429 11th Ave</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}