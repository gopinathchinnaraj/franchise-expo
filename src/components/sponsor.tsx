'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const SponsorsSection = () => {
    const goldSponsors = [
        { name: 'emma', logo: 'https://www.franchiseexpo.com/images/slider/cache/82204dc255f327b2c082e10920a35854/Emma_Inc.webp' },
        { name: 'f.c. dadson', logo: 'https://www.franchiseexpo.com/images/sponsors/south/Gold%20Sponsor/f.c.dadson.webp' },
        { name: 'MetAiBlock', logo: 'https://www.franchiseexpo.com/images/slider/cache/a57bcbf263e0caf5064f6b68d994fb98/MetAiBlock-Logo-Main.webp' },
        { name: 'Stark & Stark', logo: 'https://www.franchiseexpo.com/images/slider/cache/d20f9256837b39a202a6ee68ccfa8f6d/stark-logo-thumbnail-scaled.webp' },
        { name: 'BeTheBOSS', logo: 'https://www.franchiseexpo.com/images/sponsors/south/Gold%20Sponsor/BeTheBoss.webp' },
        { name: 'BizBuySell', logo: 'https://www.franchiseexpo.com/images/sponsors/IFE/BizBuySell.svg' },
    ];

    const silverSponsors = [
        { name: 'The Franchise Firm', logo: 'https://www.franchiseexpo.com/images/slider/cache/cfca7d1311f584e56c79c500baf0dc5f/The_Franchise_Firm.webp' },
        { name: 'Guidant', logo: 'https://www.franchiseexpo.com/images/sponsors/guidant.svg' },
        { name: 'sesimi', logo: 'https://www.franchiseexpo.com/images/slider/cache/8c3cd8564c4e8de443e15f2d8826acf4/Sesimi_Wordmark_RGB_Black_2.webp' },
        { name: 'Signation', logo: 'https://www.franchiseexpo.com/images/slider/cache/2e3e5f1fb622da699d1070964069f259/Signation_Sign_Group.webp' },
        { name: "The Entrepreneur's Source", logo: 'https://www.franchiseexpo.com/images/slider/cache/c7eb56813b4ea3a294fa491862e51f8c/The_Entrepreneurs_Source.webp' },
    ];
    
    const platinumSponsors = [
        { name: 'Entrepreneur', logo: 'https://www.franchiseexpo.com/images/sponsors/entrepreneur.webp' }
    ];

    const goldScrollerRef = useRef<HTMLDivElement>(null);
    const silverScrollerRef = useRef<HTMLDivElement>(null);
    const [showGoldArrows, setShowGoldArrows] = useState(false);
    const [showSilverArrows, setShowSilverArrows] = useState(false);
    const [isGoldHovered, setIsGoldHovered] = useState(false);
    const [isSilverHovered, setIsSilverHovered] = useState(false);
    const [goldActiveDot, setGoldActiveDot] = useState(0);
    const [silverActiveDot, setSilverActiveDot] = useState(0);

    // Number of logos visible per slide at 1440px
    const LOGOS_PER_SLIDE = 5;
    
    // Calculate total dots needed
    const goldTotalDots = Math.ceil(goldSponsors.length / LOGOS_PER_SLIDE);
    const silverTotalDots = Math.ceil(silverSponsors.length / LOGOS_PER_SLIDE);

    // ── Go to specific slide (Gold) ──
    const goToGoldSlide = useCallback((index: number) => {
        if (goldScrollerRef.current) {
            const scroller = goldScrollerRef.current;
            const slideWidth = scroller.clientWidth;
            scroller.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
            setGoldActiveDot(index);
        }
    }, []);

    // ── Go to specific slide (Silver) ──
    const goToSilverSlide = useCallback((index: number) => {
        if (silverScrollerRef.current) {
            const scroller = silverScrollerRef.current;
            const slideWidth = scroller.clientWidth;
            scroller.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
            setSilverActiveDot(index);
        }
    }, []);

    // ── Auto-slide Gold every 5 seconds ──
    useEffect(() => {
        if (isGoldHovered) return;

        const interval = setInterval(() => {
            setGoldActiveDot((prev) => {
                const next = (prev + 1) % goldTotalDots;
                goToGoldSlide(next);
                return next;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [isGoldHovered, goToGoldSlide, goldTotalDots]);

    // ── Auto-slide Silver every 5 seconds ──
    useEffect(() => {
        if (isSilverHovered) return;

        const interval = setInterval(() => {
            setSilverActiveDot((prev) => {
                const next = (prev + 1) % silverTotalDots;
                goToSilverSlide(next);
                return next;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [isSilverHovered, goToSilverSlide, silverTotalDots]);

    const scrollLeft = (scrollerRef: React.RefObject<HTMLDivElement>, activeDot: number, setActiveDot: (n: number) => void, totalDots: number, goToSlide: (n: number) => void) => {
        const prev = (activeDot - 1 + totalDots) % totalDots;
        goToSlide(prev);
        setActiveDot(prev);
    };

    const scrollRight = (scrollerRef: React.RefObject<HTMLDivElement>, activeDot: number, setActiveDot: (n: number) => void, totalDots: number, goToSlide: (n: number) => void) => {
        const next = (activeDot + 1) % totalDots;
        goToSlide(next);
        setActiveDot(next);
    };

    return (
        <section className="bg-[#f5f5f5] pt-[60px] pb-[80px] max-sm:pt-10 max-sm:pb-[50px]">
            <div className="max-w-[1400px] mx-auto px-10 max-lg:px-5 max-sm:px-[20px]">
                <h2 className="font-display text-[2.8rem] leading-[1.2] font-bold uppercase text-left text-[#111111] mb-[50px] max-md:text-[2.2rem] max-md:mb-[35px] max-sm:text-[1.8rem] max-sm:mb-[25px]">IFE SPONSORS</h2>

                {/* Platinum Sponsors */}
                <div className="mb-[60px]">
                    <h3 className="font-display text-[1.4rem] font-semibold uppercase text-left text-[#111111] mb-[30px] max-md:text-[1.2rem] max-md:mb-5 max-sm:text-[1rem] max-sm:mb-[15px]">Platinum Sponsors</h3>
                    <div className="flex justify-center items-center w-full">
                        <div className="flex items-center justify-center gap-[60px] max-sm:gap-5">
                            {platinumSponsors.map((sponsor, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center justify-center select-none"
                                    onContextMenu={(e) => e.preventDefault()}
                                >
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name} 
                                        className="w-auto h-[90px] object-contain opacity-90 transition-all duration-300 hover:scale-[1.05] hover:opacity-100 max-md:h-[70px] max-sm:h-[55px] pointer-events-none select-none"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className="mb-[60px]">
                    <h3 className="font-display text-[1.4rem] font-semibold uppercase text-left text-[#111111] mb-[30px] max-md:text-[1.2rem] max-md:mb-5 max-sm:text-[1rem] max-sm:mb-[15px]">Gold Sponsors</h3>
                    <div
                        className="relative flex items-center gap-2.5"
                        onMouseEnter={() => {
                            setShowGoldArrows(true);
                            setIsGoldHovered(true);
                        }}
                        onMouseLeave={() => {
                            setShowGoldArrows(false);
                            setIsGoldHovered(false);
                        }}
                    >
                        <button
                            className={`w-11 h-11 bg-white border-2 border-[#005eb8] text-[#005eb8] text-[28px] font-bold cursor-pointer flex items-center justify-center shrink-0 rounded-none relative z-[2] outline-none transition-all duration-[350ms] ease-out hover:bg-[#005eb8] hover:text-white max-md:w-[38px] max-md:h-[38px] max-md:text-[24px] max-sm:w-8 max-sm:h-8 max-sm:text-[20px] order-[-1] ${
                                showGoldArrows ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-[0.8]"
                            }`}
                            onClick={() => scrollLeft(goldScrollerRef, goldActiveDot, setGoldActiveDot, goldTotalDots, goToGoldSlide)}
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>

                        <div className="flex-1 overflow-hidden scroll-smooth" ref={goldScrollerRef}>
                            <div className="flex gap-10 max-md:gap-[30px] max-sm:gap-5 w-fit">
                                {goldSponsors.map((sponsor, index) => (
                                    <div key={index} className="group w-[260px] min-w-[260px] h-[80px] flex items-center justify-center max-md:w-[180px] max-md:min-w-[180px] max-md:h-[70px] max-sm:w-[140px] max-sm:min-w-[140px] max-sm:h-[60px]">
                                        <img src={sponsor.logo} alt={sponsor.name} className="w-auto max-w-[220px] h-[55px] object-contain opacity-85 transition-all duration-300 group-hover:scale-[1.06] group-hover:opacity-100 max-md:max-w-[150px] max-md:h-[42px] max-sm:max-w-[120px] max-sm:h-[36px]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={`w-11 h-11 bg-white border-2 border-[#005eb8] text-[#005eb8] text-[28px] font-bold cursor-pointer flex items-center justify-center shrink-0 rounded-none relative z-[2] outline-none transition-all duration-[350ms] ease-out hover:bg-[#005eb8] hover:text-white max-md:w-[38px] max-md:h-[38px] max-md:text-[24px] max-sm:w-8 max-sm:h-8 max-sm:text-[20px] order-[1] ${
                                showGoldArrows ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-[0.8]"
                            }`}
                            onClick={() => scrollRight(goldScrollerRef, goldActiveDot, setGoldActiveDot, goldTotalDots, goToGoldSlide)}
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </div>

                    {/* Gold Dots */}
                    <div className="flex justify-center gap-3.5 mt-6 max-md:gap-3 max-md:mt-5 max-sm:gap-2.5 max-sm:mt-4">
                        {Array.from({ length: goldTotalDots }).map((_, dot) => (
                            <button
                                key={dot}
                                className={`w-3.5 h-3.5 max-md:w-3 max-md:h-3 max-sm:w-2.5 max-sm:h-2.5 rounded-full bg-[rgba(0,94,184,0.3)] cursor-pointer border-none p-0 outline-none transition-all duration-250 hover:bg-[rgba(0,94,184,0.7)] hover:scale-[1.3] ${
                                    dot === goldActiveDot ? "!bg-[#005eb8] scale-[1.2] hover:bg-[#005eb8]" : ""
                                }`}
                                onClick={() => goToGoldSlide(dot)}
                                aria-label={`Go to slide ${dot + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div className="mb-[60px]">
                    <h3 className="font-display text-[1.4rem] font-semibold uppercase text-left text-[#111111] mb-[30px] max-md:text-[1.2rem] max-md:mb-5 max-sm:text-[1rem] max-sm:mb-[15px]">Silver Sponsors</h3>
                    <div
                        className="relative flex items-center gap-2.5"
                        onMouseEnter={() => {
                            setShowSilverArrows(true);
                            setIsSilverHovered(true);
                        }}
                        onMouseLeave={() => {
                            setShowSilverArrows(false);
                            setIsSilverHovered(false);
                        }}
                    >
                        <button
                            className={`w-11 h-11 bg-white border-2 border-[#005eb8] text-[#005eb8] text-[28px] font-bold cursor-pointer flex items-center justify-center shrink-0 rounded-none relative z-[2] outline-none transition-all duration-[350ms] ease-out hover:bg-[#005eb8] hover:text-white max-md:w-[38px] max-md:h-[38px] max-md:text-[24px] max-sm:w-8 max-sm:h-8 max-sm:text-[20px] order-[-1] ${
                                showSilverArrows ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-[0.8]"
                            }`}
                            onClick={() => scrollLeft(silverScrollerRef, silverActiveDot, setSilverActiveDot, silverTotalDots, goToSilverSlide)}
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>

                        <div className="flex-1 overflow-hidden scroll-smooth" ref={silverScrollerRef}>
                            <div className="flex gap-10 max-md:gap-[30px] max-sm:gap-5 w-fit">
                                {silverSponsors.map((sponsor, index) => (
                                    <div key={index} className="group w-[260px] min-w-[260px] h-[80px] flex items-center justify-center max-md:w-[180px] max-md:min-w-[180px] max-md:h-[70px] max-sm:w-[140px] max-sm:min-w-[140px] max-sm:h-[60px]">
                                        <img src={sponsor.logo} alt={sponsor.name} className="w-auto max-w-[220px] h-[55px] object-contain opacity-85 transition-all duration-300 group-hover:scale-[1.06] group-hover:opacity-100 max-md:max-w-[150px] max-md:h-[42px] max-sm:max-w-[120px] max-sm:h-[36px]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={`w-11 h-11 bg-white border-2 border-[#005eb8] text-[#005eb8] text-[28px] font-bold cursor-pointer flex items-center justify-center shrink-0 rounded-none relative z-[2] outline-none transition-all duration-[350ms] ease-out hover:bg-[#005eb8] hover:text-white max-md:w-[38px] max-md:h-[38px] max-md:text-[24px] max-sm:w-8 max-sm:h-8 max-sm:text-[20px] order-[1] ${
                                showSilverArrows ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-[0.8]"
                            }`}
                            onClick={() => scrollRight(silverScrollerRef, silverActiveDot, setSilverActiveDot, silverTotalDots, goToSilverSlide)}
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </div>

                    {/* Silver Dots */}
                    <div className="flex justify-center gap-3.5 mt-6 max-md:gap-3 max-md:mt-5 max-sm:gap-2.5 max-sm:mt-4">
                        {Array.from({ length: silverTotalDots }).map((_, dot) => (
                            <button
                                key={dot}
                                className={`w-3.5 h-3.5 max-md:w-3 max-md:h-3 max-sm:w-2.5 max-sm:h-2.5 rounded-full bg-[rgba(0,94,184,0.3)] cursor-pointer border-none p-0 outline-none transition-all duration-250 hover:bg-[rgba(0,94,184,0.7)] hover:scale-[1.3] ${
                                    dot === silverActiveDot ? "!bg-[#005eb8] scale-[1.2] hover:bg-[#005eb8]" : ""
                                }`}
                                onClick={() => goToSilverSlide(dot)}
                                aria-label={`Go to slide ${dot + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;