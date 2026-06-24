// app/our-team/page.tsx
"use client";

import Image from "next/image";
import styles from "./OurTeam.module.css";

const teamSections = [
    {
        title: "SALES",
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
                note: "Request Exhibitor Info",
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
        title: "MARKETING",
        members: [
            {
                name: "Linda Thompson",
                role: "Marketing Director",
                email: "Linda.Thompson@comexposium.com",
                phone: "201.881.1646",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_311.png",
                note: "Attendee and Conference Info",
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
        title: "CUSTOMER RELATIONS",
        members: [
            {
                name: "Murphy Connolly",
                role: "Director of Operations & Services",
                email: "Murphy.Connolly@comexposium.com",
                phone: "631.335.5696",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_283_314.png",
                note: "Exhibitor Services and Operations",
            },
        ],
    },
    {
        title: "FINANCE",
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
        title: "SHOW MANAGEMENT",
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
            <section className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.bannerTitle}>
                            MEET THE FRANCHISE EXPO TEAM - EVENT EXPERTS
                        </h1>
                    </div>
                </div>
            </section>

            {/* TEAM SECTIONS */}
            {teamSections.map((section, index) => (
                <section
                    key={index}
                    className={`${styles.teamSection} ${index % 2 === 0 ? styles.lightBg : styles.grayBg
                        }`}
                >
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.ourPeople}>OUR PEOPLE</span>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                        </div>

                        <div className={styles.grid}>
                            {section.members.map((member, idx) => (
                                <div key={idx} className={styles.card}>
                                    <div className={styles.imageWrap}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                                        />
                                    </div>

                                    <div className={styles.content}>
                                        <h3 className={styles.memberName}>{member.name}</h3>
                                        <p className={styles.memberRole}>{member.role}</p>
                                        {member.note && (
                                            <p className={styles.memberNote}>{member.note}</p>
                                        )}
                                        <div className={styles.contactInfo}>
                                            <span>
                                                <span className={styles.label}>E: </span>
                                                {member.email}
                                            </span>
                                            <span>
                                                <span className={styles.label}>T: </span>
                                                {member.phone}
                                            </span>
                                        </div>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className={styles.emailButton}
                                        >
                                            EMAIL ME
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