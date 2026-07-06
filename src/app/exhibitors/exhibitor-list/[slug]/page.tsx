"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const exhibitors: Record<string, any> = {
    "101-chicken": {
        name: "101 Chicken",
        bannerTitle: "AWARD-WINNING\nKOREAN FRIED CHICKEN",
        bannerBg: "#cc1f2e",
        bannerImage: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop",
        logo: "101\nCHICKEN",
        stand: "423",
        type: "FRANCHISOR",
        exhibitorCategories: ["FOOD: BAKED...", "FOOD: RESTAURANTS"],
        address: {
            street: "2151 Lemoine Avenue",
            city: "Fort Lee",
            state: "NJ",
            zip: "07024",
            country: "United States",
        },
        description: [
            "101 Chicken™, with our award-winning Korean fried chicken, partners with technology to consistently deliver the best tasting and quality K-chicken to our customers.",
            "The 101 in our name, which signifies the binary code (most basic form of computer code), represents what we believe is the foundation of any great food—the recipes and the cook.",
        ],
        products: [
            { image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=200&auto=format&fit=crop", title: "AWARD-WINNING KOREAN FRIED CHICKEN" },
            { image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&auto=format&fit=crop", title: "EATNOVATION" },
            { image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&auto=format&fit=crop", title: "Korean Fried Chicken, Elevated" },
        ],
    },
    "7-eleven": {
        name: "7-Eleven",
        bannerTitle: "CONVENIENCE\nREDEFINED",
        bannerBg: "#e8000d",
        bannerImage: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=600&auto=format&fit=crop",
        logo: "7\nELEVEN",
        stand: "230",
        type: "FRANCHISOR",
        exhibitorCategories: ["RETAIL", "CONVENIENCE"],
        address: { street: "3200 Hackberry Road", city: "Irving", state: "TX", zip: "75063", country: "United States" },
        description: ["7-Eleven is the world's largest convenience store chain, offering franchise opportunities globally."],
        products: [],
    },
    "subway": {
        name: "Subway",
        bannerTitle: "FRESH FOOD.\nFRESH FRANCHISES.",
        bannerBg: "#00703c",
        bannerImage: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop",
        logo: "SUB\nWAY",
        stand: "230",
        type: "FRANCHISOR",
        exhibitorCategories: ["FOOD: RESTAURANTS", "QSR"],
        address: { street: "325 Sub Way", city: "Milford", state: "CT", zip: "06461", country: "United States" },
        description: ["Subway® is one of the world's largest fast food restaurant brands, offering fresh sandwiches, wraps, and salads."],
        products: [],
    },
};

// Fallback: generate a basic entry for any slug not in the map
function getExhibitor(slug: string) {
    if (exhibitors[slug]) return exhibitors[slug];
    // Build a generic entry from the slug
    const name = slug
        .split("-")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    return {
        name,
        bannerTitle: name.toUpperCase(),
        bannerBg: "#1a3a5c",
        bannerImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop",
        logo: name.charAt(0),
        stand: "—",
        type: "FRANCHISOR",
        exhibitorCategories: [],
        address: { street: "", city: "", state: "", zip: "", country: "" },
        description: ["Details coming soon."],
        products: [],
    };
}

const TABS = ["PRODUCTS", "ARTICLES", "VIDEOS", "RESOURCES"];

export default function ExhibitorDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [activeTab, setActiveTab] = useState("PRODUCTS");
    const exhibitor = getExhibitor(slug);

    return (
        <main className="w-full bg-[#f5f7fb] min-h-screen">

            {/* HERO BANNER */}
            <div className="relative w-full h-[220px] max-md:h-auto overflow-hidden flex max-md:flex-col" style={{ background: exhibitor.bannerBg }}>
                <div className="flex-1 flex items-center p-[28px_40px] max-md:p-[24px_20px_60px] z-[2]">
                    <h1 className="font-display text-[36px] max-md:text-[26px] font-bold text-white leading-[1.1] uppercase tracking-wider">
                        {exhibitor.bannerTitle.split("\n").map((line: string, i: number) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h1>
                </div>
                <div className="w-[420px] max-md:w-full shrink-0 relative overflow-hidden max-md:h-[180px]">
                    <img src={exhibitor.bannerImage} alt={exhibitor.name} className="w-full h-[220px] max-md:h-[180px] object-cover object-center block" />
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[52px] bg-[#1a3a5c] flex items-center justify-end px-6 z-[3]">
                    <div className="absolute left-24 bottom-0 w-[90px] h-[90px] bg-white rounded-full border-[3px] border-white shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center z-10 translate-y-[40%]">
                        <span className="text-[7px] font-bold text-[#1a3a5c] tracking-wider uppercase leading-none mb-0.5">FRANCHISOR</span>
                        <span className="text-2xl font-black text-[#cc1f2e] font-display leading-none text-center whitespace-pre-line">{exhibitor.logo}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-white/80 flex items-center transition-colors duration-150 hover:text-white"><FaFacebookF size={18} /></a>
                        <a href="#" className="text-white/80 flex items-center transition-colors duration-150 hover:text-white"><FaInstagram size={18} /></a>
                        <span className="text-[12px] font-bold text-white tracking-wider border border-white/40 px-3.5 py-1 rounded-sm">FEATURED</span>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-[1000px] mx-auto px-6 py-6 pb-20">

                {/* Stand */}
                <div className="text-right text-[13px] text-[#5f6b76] mb-3">
                    <span>Stand: <strong className="text-[#011b2e] font-bold">{exhibitor.stand}</strong></span>
                </div>

                <div className="grid grid-cols-[1fr_260px] max-md:grid-cols-1 gap-10 max-md:gap-6 mb-8">
                    {/* LEFT */}
                    <div className="min-w-0">
                        <h2 className="font-display text-[22px] font-bold text-[#011b2e] mb-3.5">{exhibitor.name}</h2>
                        {exhibitor.description.map((para: string, i: number) => (
                            <p key={i} className="text-sm text-[#2d3e4f] leading-[1.65] mb-2.5">{para}</p>
                        ))}

                        {exhibitor.address.street && (
                            <div className="mt-5">
                                <h4 className="text-sm font-bold text-[#011b2e] mb-2">Address</h4>
                                <p className="text-sm text-[#2d3e4f] leading-[1.8]">
                                    {exhibitor.address.street}<br />
                                    {exhibitor.address.city}<br />
                                    {exhibitor.address.state}<br />
                                    {exhibitor.address.zip}<br />
                                    {exhibitor.address.country}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT sidebar */}
                    <div className="flex flex-col gap-5">
                        <button className="flex items-center justify-center gap-2 w-full bg-[#1a3a5c] text-white border-none rounded-md py-3 px-5 text-[13px] font-bold tracking-wider cursor-pointer transition-colors duration-150 hover:bg-[#1f4570]">
                            <Mail size={16} />
                            EMAIL
                        </button>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-[#011b2e]">Type</span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3a5c] bg-[#e8edf4] rounded px-3 py-1.25 w-fit before:content-[''] before:inline-block before:w-2.5 before:h-2.5 before:bg-[#1a3a5c] before:rounded-sm before:shrink-0">{exhibitor.type}</span>
                        </div>

                        {exhibitor.exhibitorCategories.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-[#011b2e]">Exhibitor Categories</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {exhibitor.exhibitorCategories.map((cat: string, i: number) => (
                                        <span key={i} className="text-[11px] font-semibold text-[#2d3e4f] bg-[#e8edf4] rounded px-2.5 py-1.25 whitespace-nowrap">{cat}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* TABS */}
                <div className="grid grid-cols-4 max-md:grid-cols-2 border border-[#dde3ea] rounded-md overflow-hidden mb-6 bg-white">
                    {TABS.map((tab, idx) => (
                        <button
                            key={tab}
                            className={`py-3.5 px-2 text-[12px] font-bold tracking-wider text-[#5f6b76] bg-white cursor-pointer transition-all duration-150 text-center hover:bg-[#f5f7fb] hover:text-[#1a3a5c] border-b-0 border-r border-[#dde3ea] last:border-r-0 max-md:even:border-r-0 max-md:nth-child(n+3):border-t max-md:nth-child(n+3):border-t-[#dde3ea] ${activeTab === tab ? "text-[#1a3a5c] bg-white border-b-[3px] border-[#1a3a5c]" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === "PRODUCTS" && exhibitor.products.length > 0 && (
                    <div className="flex gap-4 flex-wrap">
                        {exhibitor.products.map((product: any, i: number) => (
                            <div key={i} className="w-[120px] cursor-pointer group">
                                <div className="w-[120px] h-[100px] rounded overflow-hidden mb-2">
                                    <img src={product.image} alt={product.title} className="w-full h-full object-cover block transition-transform duration-200 group-hover:scale-105" />
                                </div>
                                <p className="text-[11px] font-bold text-[#1a3a5c] leading-[1.4] uppercase">{product.title}</p>
                            </div>
                        ))}
                    </div>
                )}

                {(activeTab !== "PRODUCTS" || exhibitor.products.length === 0) && (
                    <div className="p-10 text-center text-[#9aa6b2] text-sm bg-white rounded border border-[#dde3ea]">
                        <p>No {activeTab.toLowerCase()} available.</p>
                    </div>
                )}

            </div>
        </main>
    );
}