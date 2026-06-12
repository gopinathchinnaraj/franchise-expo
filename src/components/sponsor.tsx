'use client';

import { useState, useRef } from 'react';
import styles from './SponsorsSection.module.css';

const SponsorsSection = () => {
    const goldScrollerRef = useRef<HTMLDivElement>(null);
    const silverScrollerRef = useRef<HTMLDivElement>(null);
    const [showGoldArrows, setShowGoldArrows] = useState(false);
    const [showSilverArrows, setShowSilverArrows] = useState(false);

    const platinumSponsors = [
        { name: 'Entrepreneur', logo: 'https://www.franchiseexpo.com/images/sponsors/entrepreneur.webp' }
    ];

    const goldSponsors = [
        { name: 'BeTheBoss', logo: 'https://www.franchiseexpo.com/images/sponsors/south/Gold%20Sponsor/BeTheBoss.webp' },
        { name: 'BizBuySell', logo: 'https://www.franchiseexpo.com/images/sponsors/IFE/BizBuySell.svg' },
        { name: 'Emma Inc.', logo: 'https://www.franchiseexpo.com/images/slider/cache/82204dc255f327b2c082e10920a35854/Emma_Inc.webp' },
        { name: 'F.C. Dadson', logo: 'https://www.franchiseexpo.com/images/sponsors/south/Gold%20Sponsor/f.c.dadson.webp' },
        { name: 'MetAiBlock', logo: 'https://www.franchiseexpo.com/images/slider/cache/a57bcbf263e0caf5064f6b68d994fb98/MetAiBlock-Logo-Main.webp' }
    ];

    const silverSponsors = [
        { name: 'Sesimi', logo: 'https://www.franchiseexpo.com/images/slider/cache/8c3cd8564c4e8de443e15f2d8826acf4/Sesimi_Wordmark_RGB_Black_2.webp' },
        { name: 'Signation Sign Group', logo: 'https://www.franchiseexpo.com/images/slider/cache/2e3e5f1fb622da699d1070964069f259/Signation_Sign_Group.webp' },
        { name: "The Entrepreneur's Source", logo: 'https://www.franchiseexpo.com/images/slider/cache/c7eb56813b4ea3a294fa491862e51f8c/The_Entrepreneurs_Source.webp' },
        { name: 'The Franchise Firm', logo: 'https://www.franchiseexpo.com/images/slider/cache/cfca7d1311f584e56c79c500baf0dc5f/The_Franchise_Firm.webp' }
    ];

    // Scroll left
    const scrollLeft = (scrollerRef: React.RefObject<HTMLDivElement>) => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Scroll right
    const scrollRight = (scrollerRef: React.RefObject<HTMLDivElement>) => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.sponsorSection}>
            <div className={styles.sponsorContainer}>
                <h2 className={styles.sponsorMainTitle}>IFE SPONSORS</h2>

                {/* Platinum Sponsors */}
                <div className={styles.sponsorGroup}>
                    <h3 className={styles.sponsorGroupTitle}>Platinum Sponsors</h3>
                    <div className={styles.sponsorScroller}>
                        <div className={styles.sponsorTrack}>
                            {platinumSponsors.map((sponsor, index) => (
                                <div key={index} className={styles.sponsorSlide}>
                                    <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorImg} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className={styles.sponsorGroup}>
                    <h3 className={styles.sponsorGroupTitle}>Gold Sponsors</h3>
                    <div
                        className={styles.sponsorSliderWrapper}
                        onMouseEnter={() => setShowGoldArrows(true)}
                        onMouseLeave={() => setShowGoldArrows(false)}
                    >
                        {showGoldArrows && (
                            <button
                                className={styles.sponsorArrowPrev}
                                onClick={() => scrollLeft(goldScrollerRef)}
                            >
                                ‹
                            </button>
                        )}

                        <div className={styles.sponsorScroller} ref={goldScrollerRef}>
                            <div className={styles.sponsorTrack}>
                                {goldSponsors.map((sponsor, index) => (
                                    <div key={index} className={styles.sponsorSlide}>
                                        <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorImg} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {showGoldArrows && (
                            <button
                                className={styles.sponsorArrowNext}
                                onClick={() => scrollRight(goldScrollerRef)}
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div className={styles.sponsorGroup}>
                    <h3 className={styles.sponsorGroupTitle}>Silver Sponsors</h3>
                    <div
                        className={styles.sponsorSliderWrapper}
                        onMouseEnter={() => setShowSilverArrows(true)}
                        onMouseLeave={() => setShowSilverArrows(false)}
                    >
                        {showSilverArrows && (
                            <button
                                className={styles.sponsorArrowPrev}
                                onClick={() => scrollLeft(silverScrollerRef)}
                            >
                                ‹
                            </button>
                        )}

                        <div className={styles.sponsorScroller} ref={silverScrollerRef}>
                            <div className={styles.sponsorTrack}>
                                {silverSponsors.map((sponsor, index) => (
                                    <div key={index} className={styles.sponsorSlide}>
                                        <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorImg} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {showSilverArrows && (
                            <button
                                className={styles.sponsorArrowNext}
                                onClick={() => scrollRight(silverScrollerRef)}
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;