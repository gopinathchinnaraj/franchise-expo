"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./TravelInformation.module.css";

const hotels = [
    {
        name: "HYATT PLACE New York City / Times Square",
        address: "350 W. 39th Street, New York City, NY 10018",
        image: "https://www.franchiseexpo.com/images/ife/Hyatt-Place-New-York-City-Times-Square-P013-Exterior.4x3.webp",
        link: "#",
    },
    {
        name: "EVEN Hotel New York - Times Square South",
        address: "321 West 35th Street, New York City, NY 10001",
        image: "https://www.franchiseexpo.com/images/ife/even-hotel-times-square.jpg",
        link: "#",
    },
    {
        name: "Crowne Plaza HY36 Midtown Manhattan",
        address: "320 West 36th Street, New York City, NY 10018",
        image: "https://www.franchiseexpo.com/images/ife/crowne-plaza-new-york-5519815692-2x1.jpg",
        link: "#",
    },
    {
        name: "Four Points by Sheraton Manhattan Midtown West",
        address: "444 10th Ave, New York City, NY 10001",
        image: "https://www.franchiseexpo.com/images/7565f357.jpg",
        link: "#",
    },
];

export default function TravelInformation() {
    return (
        <main className={styles.page}>
            <PageBanner title="Travel Information" />

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

                                    <a href="#" className={styles.hotelBtn}>
                                        <span>Make Your Reservation</span>

                                        <span className={styles.hotelBtnIcon}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <path d="M9 18L15 12L9 6" />
                                            </svg>
                                        </span>
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