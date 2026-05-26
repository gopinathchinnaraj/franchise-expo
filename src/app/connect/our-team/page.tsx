"use client";

import Image from "next/image";
import styles from "./OurTeam.module.css";

const teamSections = [
    {
        title: "Sales",
        members: [
            {
                name: "Frank Fazio",
                role: "Senior Account Executive",
                email: "Frank.Fazio@comexposium.com",
                phone: "201.881.1624",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_306.png",
            },
            {
                name: "Justin Wood",
                role: "Senior Account Executive",
                email: "Justin.Wood@Comexposium.com",
                phone: "240.398.1385",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_307.jpg",
            },
            {
                name: "Simone Knaap",
                role: "Senior Account Executive",
                email: "simone.knaap@comexposium.com",
                phone: "201.881.1654",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_309.png",
            },
            {
                name: "James Materandrea",
                role: "VP International Sales",
                email: "James.Mastandrea@comexposium.com",
                phone: "201.704.1240",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_310.png",
            },
        ],
    },

    {
        title: "Marketing",
        members: [
            {
                name: "Linda Thompson",
                role: "Marketing Director",
                email: "Linda.Thompson@comexposium.com",
                phone: "201.881.1646",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_311.png",
            },
            {
                name: "Rafael Arango",
                role: "Marketing Assistant",
                email: "rafael.arango@comexposium.com",
                phone: "201.881.1616",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_313.png",
            },
        ],
    },

    {
        title: "Customer Relations",
        members: [
            {
                name: "Murphy Connolly",
                role: "Director of Operations & Services",
                email: "Murphy.Connolly@comexposium.com",
                phone: "631.335.5696",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_283_314.png",
            },
        ],
    },

    {
        title: "Finance",
        members: [
            {
                name: "Ismael Iraola",
                role: "SVP Finance",
                email: "Ismael.Iraola@comexposium.com",
                phone: "201.515.3075",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_315.png",
            },
            {
                name: "Mohammed Abdelmajid",
                role: "Staff Accountant",
                email: "Mohammed.Abdelmajid@comexposium.com",
                phone: "201.515.3072",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_317.png",
            },
            {
                name: "Roman Onica",
                role: "Staff Accountant",
                email: "Roman.Onica@comexposium.com",
                phone: "201.881.1636",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_318.png",
            },
        ],
    },

    {
        title: "Show Management",
        members: [
            {
                name: "Martin Joksimovic",
                role: "President",
                email: "Martin.Joksimovic@comexposium.com",
                phone: "201.881.1658",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_285_319.png",
            },
        ],
    },
];

export default function OurTeam() {
    return (
        <main className={styles.page}>

            {/* HERO */}

            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>
                            Franchise Expo Team
                        </span>

                        <h1>Meet Our Team</h1>

                        <p>
                            Connect with our experienced professionals behind the
                            largest franchise expos and international business events.
                        </p>
                    </div>
                </div>
            </section>

            {/* TEAM */}

            {teamSections.map((section, index) => (
                <section
                    key={index}
                    className={styles.teamSection}
                >
                    <div className={styles.container}>

                        <div className={styles.sectionTop}>
                            <span>OUR PEOPLE</span>
                            <h2>{section.title}</h2>
                        </div>

                        <div className={styles.grid}>
                            {section.members.map((member, idx) => (
                                <div
                                    key={idx}
                                    className={styles.card}
                                >

                                    <div className={styles.imageWrap}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={styles.image}
                                        />
                                    </div>

                                    <div className={styles.content}>
                                        <h3>{member.name}</h3>

                                        <p className={styles.role}>
                                            {member.role}
                                        </p>

                                        <div className={styles.info}>
                                            <span>
                                                E: {member.email}
                                            </span>

                                            <span>
                                                T: {member.phone}
                                            </span>
                                        </div>

                                        <a
                                            href={`mailto:${member.email}`}
                                            className={styles.button}
                                        >
                                            Email Me
                                        </a>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            ))}

        </main>
    );
}