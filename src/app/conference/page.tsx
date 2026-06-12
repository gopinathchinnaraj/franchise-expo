"use client";

import { useState, useMemo } from "react";
import styles from "./agenda.module.css";

/* ── Types ──────────────────────────────────────────────── */
type Day = "friday" | "saturday";

interface Speaker {
    role: string;
    org: string;
    avatar?: string; // initials fallback if no image
}

interface Session {
    id: number;
    day: Day;
    time: string;          // e.g. "8:30AM"
    timeEnd: string;       // e.g. "9:30AM"
    title: string;
    room: string;
    roomColor: string;     // CSS color dot
    location: string;      // "Room 1C02" | "Theater 2" etc.
    description: string;
    speakers: Speaker[];
}

/* ── Sample data (mirrors the screenshot sessions) ──────── */
const SESSIONS: Session[] = [
    {
        id: 1,
        day: "friday",
        time: "8:30AM",
        timeEnd: "9:30AM",
        title: "Franchising Fundamentals: Interacting with Franchisors",
        room: "Room 1C02",
        roomColor: "#7B5EA7",
        location: "Room 1C02",
        description:
            "Industry experts share tips to better organize and structure communications with franchisors. The program is designed for international contacts and investors wishing to invest and diversify through the franchise business model.",
        speakers: [
            { role: "CFE, Senior Franchise Consultant", org: "iFranchise Group" },
            { role: "Founding Partner", org: "The Franchise Firm" },
            { role: "SVP International Operations and Development", org: "Captain D's" },
        ],
    },
    {
        id: 2,
        day: "friday",
        time: "10:15AM",
        timeEnd: "11:45AM",
        title: "A to Z's of Buying A Franchise",
        room: "Theater 2",
        roomColor: "#E8294A",
        location: "Theater 2",
        description:
            "If you're looking for no-nonsense, cut-to-the-quick guidance on how to evaluate franchises so you can buy one that's right for you — this is the workshop you need. Perfect for people just getting started with their research.",
        speakers: [
            { role: "Titus Chair for Franchise Leadership", org: "Titus Center for Franchising, Palm Beach Atlantic University" },
        ],
    },
    {
        id: 3,
        day: "friday",
        time: "11:00AM",
        timeEnd: "12:00PM",
        title: "Financing Your Franchise: Options and Strategies",
        room: "Room 1C04",
        roomColor: "#1A7ABF",
        location: "Room 1C04",
        description:
            "Explore the full spectrum of financing tools available to franchise buyers — from SBA loans and 401(k) rollovers to franchisor financing programs. Walk away with a clear funding roadmap.",
        speakers: [
            { role: "Director of Franchise Finance", org: "Benetrends Financial" },
            { role: "SBA Lending Specialist", org: "Live Oak Bank" },
        ],
    },
    {
        id: 4,
        day: "friday",
        time: "1:00PM",
        timeEnd: "2:00PM",
        title: "International Expansion: Entering the U.S. Market",
        room: "Theater 1",
        roomColor: "#E8294A",
        location: "Theater 1",
        description:
            "A practical session for international brands seeking U.S. entry and U.S. brands eyeing global growth. Topics include legal frameworks, master franchise agreements, and cultural adaptation.",
        speakers: [
            { role: "International Franchise Counsel", org: "Faegre Drinker" },
            { role: "VP Global Development", org: "Anytime Fitness" },
        ],
    },
    {
        id: 5,
        day: "friday",
        time: "2:30PM",
        timeEnd: "3:30PM",
        title: "FDD Deep Dive: What Every Buyer Must Know",
        room: "Room 1C02",
        roomColor: "#7B5EA7",
        location: "Room 1C02",
        description:
            "An item-by-item walkthrough of the Franchise Disclosure Document with franchise attorneys. Understand what to look for, what red flags to watch out for, and how to negotiate.",
        speakers: [
            { role: "Franchise Attorney, Partner", org: "DLA Piper" },
        ],
    },
    {
        id: 6,
        day: "friday",
        time: "4:00PM",
        timeEnd: "5:00PM",
        title: "Emerging Brands Spotlight Panel",
        room: "Theater 2",
        roomColor: "#E8294A",
        location: "Theater 2",
        description:
            "Meet the founders and executives behind the fastest-growing emerging franchise concepts. Hear their growth stories and what makes their model an attractive investment opportunity.",
        speakers: [
            { role: "Co-Founder & CEO", org: "Taim Mediterranean Kitchen" },
            { role: "VP Franchising", org: "Crumbl Cookies" },
            { role: "Director of Development", org: "Swig" },
        ],
    },
    {
        id: 7,
        day: "saturday",
        time: "9:00AM",
        timeEnd: "10:00AM",
        title: "Women in Franchising: Breaking Barriers and Building Wealth",
        room: "Theater 1",
        roomColor: "#E8294A",
        location: "Theater 1",
        description:
            "A candid conversation with women who have built multi-unit franchise empires. Covering mindset, capital access, mentorship, and the path to financial independence through franchising.",
        speakers: [
            { role: "Multi-Unit Franchise Owner", org: "Sport Clips" },
            { role: "Executive Director", org: "Women's Franchise Committee, IFA" },
        ],
    },
    {
        id: 8,
        day: "saturday",
        time: "10:30AM",
        timeEnd: "11:30AM",
        title: "Technology & AI: The Future of Franchise Operations",
        room: "Room 1C02",
        roomColor: "#7B5EA7",
        location: "Room 1C02",
        description:
            "How franchisors and franchisees are leveraging AI-driven tools to streamline operations, reduce costs, and enhance the customer experience. Real case studies from leading brands.",
        speakers: [
            { role: "Chief Technology Officer", org: "Neighborly" },
            { role: "Head of Innovation", org: "Dine Brands" },
        ],
    },
    {
        id: 9,
        day: "saturday",
        time: "12:00PM",
        timeEnd: "1:00PM",
        title: "Multi-Unit Ownership: Scaling Your Franchise Portfolio",
        room: "Theater 2",
        roomColor: "#E8294A",
        location: "Theater 2",
        description:
            "Strategies for franchisees looking to grow from single-unit to multi-unit operators. Covers talent acquisition, systems, capital planning, and lessons learned from operators who've done it.",
        speakers: [
            { role: "Multi-Unit Franchisee, 18 locations", org: "Jersey Mike's Subs" },
            { role: "Director of Franchisee Success", org: "Great Clips" },
        ],
    },
    {
        id: 10,
        day: "saturday",
        time: "1:30PM",
        timeEnd: "2:30PM",
        title: "Resale Opportunities: Buying an Existing Franchise",
        room: "Room 1C04",
        roomColor: "#1A7ABF",
        location: "Room 1C04",
        description:
            "Why buying a resale can be a smarter entry point than a new unit. Learn how to value an existing franchise business, conduct due diligence, and navigate the transfer process.",
        speakers: [
            { role: "Franchise Resale Specialist", org: "Transworld Business Advisors" },
        ],
    },
    {
        id: 11,
        day: "saturday",
        time: "3:00PM",
        timeEnd: "4:00PM",
        title: "Closing Keynote: The State of Franchising 2026",
        room: "Theater 1",
        roomColor: "#E8294A",
        location: "Theater 1",
        description:
            "An authoritative overview of franchise industry trends, economic conditions, and the outlook for 2026 and beyond. Data-driven insights from the International Franchise Association.",
        speakers: [
            { role: "President & CEO", org: "International Franchise Association" },
        ],
    },
];

const LOCATIONS = ["All Locations", "Theater 1", "Theater 2", "Room 1C02", "Room 1C04"];
const TIMES_FRIDAY = ["All Times", "8:30AM", "10:15AM", "11:00AM", "1:00PM", "2:30PM", "4:00PM"];
const TIMES_SATURDAY = ["All Times", "9:00AM", "10:30AM", "12:00PM", "1:30PM", "3:00PM"];

/* ── Avatar initials helper ─────────────────────────────── */
function AvatarInitials({ org }: { org: string }) {
    const initials = org
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
    const hue = [...org].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
    return (
        <div
            className={styles.avatarInitials}
            style={{ background: `hsl(${hue},45%,40%)` }}
            aria-hidden="true"
        >
            {initials}
        </div>
    );
}

/* ── Main Component ─────────────────────────────────────── */
export default function ConferenceAgenda() {
    const [activeDay, setActiveDay] = useState<Day>("friday");
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const [timeFilter, setTimeFilter] = useState("All Times");

    const times = activeDay === "friday" ? TIMES_FRIDAY : TIMES_SATURDAY;

    const filtered = useMemo(() => {
        return SESSIONS.filter((s) => {
            if (s.day !== activeDay) return false;
            if (search && !s.title.toLowerCase().includes(search.toLowerCase()) &&
                !s.description.toLowerCase().includes(search.toLowerCase())) return false;
            if (locationFilter !== "All Locations" && s.location !== locationFilter) return false;
            if (timeFilter !== "All Times" && s.time !== timeFilter) return false;
            return true;
        });
    }, [activeDay, search, locationFilter, timeFilter]);

    const clearAll = () => {
        setSearch("");
        setLocationFilter("All Locations");
        setTimeFilter("All Times");
    };

    /* Group by time slot */
    const grouped = useMemo(() => {
        const map = new Map<string, Session[]>();
        filtered.forEach((s) => {
            if (!map.has(s.time)) map.set(s.time, []);
            map.get(s.time)!.push(s);
        });
        return map;
    }, [filtered]);

    return (
        <div className={styles.agendaRoot}>
            {/* ── Day tabs ────────────────────────────────────────── */}
            <div className={styles.dayTabs} role="tablist" aria-label="Select day">
                <button
                    role="tab"
                    aria-selected={activeDay === "friday"}
                    className={`${styles.dayTab} ${activeDay === "friday" ? styles.dayTabActive : ""}`}
                    onClick={() => { setActiveDay("friday"); setTimeFilter("All Times"); }}
                >
                    Friday 29th May
                </button>
                <button
                    role="tab"
                    aria-selected={activeDay === "saturday"}
                    className={`${styles.dayTab} ${activeDay === "saturday" ? styles.dayTabActive : ""}`}
                    onClick={() => { setActiveDay("saturday"); setTimeFilter("All Times"); }}
                >
                    Saturday 30th May
                </button>
            </div>

            <div className={styles.agendaBody}>
                {/* ── Sidebar ─────────────────────────────────────── */}
                <aside className={styles.sidebar} aria-label="Filters">
                    {/* Search */}
                    <div className={styles.searchWrap}>
                        <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        <input
                            type="search"
                            placeholder="Search sessions…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={styles.searchInput}
                            aria-label="Search sessions"
                        />
                    </div>

                    {/* Location */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Location</label>
                        <div className={styles.selectWrap}>
                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                className={styles.select}
                                aria-label="Filter by location"
                            >
                                {LOCATIONS.map((l) => (
                                    <option key={l} value={l}>{l}</option>
                                ))}
                            </select>
                            <svg className={styles.selectChevron} viewBox="0 0 12 8" fill="none">
                                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Time */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Time</label>
                        <div className={styles.selectWrap}>
                            <select
                                value={timeFilter}
                                onChange={(e) => setTimeFilter(e.target.value)}
                                className={styles.select}
                                aria-label="Filter by time"
                            >
                                {times.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                            <svg className={styles.selectChevron} viewBox="0 0 12 8" fill="none">
                                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Results count + clear */}
                    <div className={styles.filterMeta}>
                        <span className={styles.resultsCount}>
                            Showing <strong>{filtered.length}</strong> session{filtered.length !== 1 ? "s" : ""}
                        </span>
                        <button
                            className={styles.clearBtn}
                            onClick={clearAll}
                            disabled={!search && locationFilter === "All Locations" && timeFilter === "All Times"}
                        >
                            Clear all
                        </button>
                    </div>
                </aside>

                {/* ── Session list ─────────────────────────────────── */}
                <div className={styles.sessionList} role="feed" aria-label="Conference sessions">
                    {grouped.size === 0 && (
                        <div className={styles.emptyState}>
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.emptyIcon}>
                                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                            </svg>
                            <p>No sessions match your filters.</p>
                            <button className={styles.clearBtnAlt} onClick={clearAll}>Clear filters</button>
                        </div>
                    )}

                    {[...grouped.entries()].map(([time, sessions]) => (
                        <div key={time} className={styles.timeGroup}>
                            <div className={styles.timeStamp} aria-label={`Sessions at ${time}`}>
                                {time}
                            </div>

                            <div className={styles.sessionCards}>
                                {sessions.map((s) => (
                                    <article key={s.id} className={styles.sessionCard}>
                                        {/* Header */}
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.cardTitle}>{s.title}</h3>
                                        </div>

                                        {/* Meta row */}
                                        <div className={styles.cardMeta}>
                                            <span className={styles.metaTime}>
                                                <svg viewBox="0 0 16 16" fill="none" className={styles.metaIcon}>
                                                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                                                    <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                                </svg>
                                                {s.time} – {s.timeEnd} · {activeDay === "friday" ? "Friday 29th May" : "Saturday 30th May"}
                                            </span>
                                            <span className={styles.metaRoom}>
                                                <span
                                                    className={styles.roomDot}
                                                    style={{ background: s.roomColor }}
                                                    aria-hidden="true"
                                                />
                                                {s.location}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className={styles.cardDesc}>{s.description}</p>

                                        {/* Speakers — no names */}
                                        {s.speakers.length > 0 && (
                                            <div className={styles.speakerRow}>
                                                {s.speakers.map((sp, i) => (
                                                    <div key={i} className={styles.speakerCard}>
                                                        <AvatarInitials org={sp.org} />
                                                        <div className={styles.speakerInfo}>
                                                            <span className={styles.speakerRole}>{sp.role}</span>
                                                            <span className={styles.speakerOrg}>{sp.org}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}