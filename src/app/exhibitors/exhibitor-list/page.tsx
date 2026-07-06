"use client";

import PageBanner from "@/components/PageBanner";
import {
    Search,
    ChevronDown,
    ChevronUp,
    X,
    Grid,
    List,
    Monitor,
    ShoppingCart,
    Video,
    MapPin,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const alphabet = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function toSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

// Dummy image function - generates consistent colors based on name
function getDummyImage(name: string) {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85929E', '#73C6B6',
        '#E59866', '#AF7AC5', '#5DADE2', '#58D68D', '#F4D03F'
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
}

// Get initials for logo placeholder
function getInitials(name: string) {
    return name
        .split(' ')
        .slice(0, 2)
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

const exhibitors = [
    { name: "101 Chicken", stand: "423", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: true } },
    { name: "7-Eleven", stand: "230", featured: true, type: "Retail", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
    { name: "A La Mode Shoppe", stand: "SMB Pavill...", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
    { name: "Accurate Franchising", stand: "437", featured: true, type: "Consulting", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: true } },
    { name: "Almera Tech Services", stand: "321", featured: true, type: "Technology", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
    { name: "Amorino", stand: "119", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "Angelina Italian Bakery", stand: "241", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: false } },
    { name: "B-Fresh", stand: "311", featured: true, type: "Health & Wellness", category: "FRANCHISOR", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "BattleKart", stand: "505", featured: true, type: "Entertainment", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: true } },
    { name: "bb.q Chicken", stand: "414", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: true } },
    { name: "BBFRY", stand: "203", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: false } },
    { name: "BeTheBoss.com", stand: "Gold Spons...", featured: true, type: "Franchise Portal", category: "SPONSOR", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "Big Frog Custom T-Shirts & More", stand: "302", featured: true, type: "Retail", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: true } },
    { name: "Big Sky Franchise Team", stand: "255", featured: true, type: "Consulting", category: "SUPPLIER", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "Billy's Downtown Diner", stand: "102", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
];

const types = ["Please select", "Food & Beverage", "Retail", "Consulting", "Technology", "Health & Wellness", "Entertainment", "Franchise Portal"];
const categories = ["Please select", "FRANCHISOR", "SUPPLIER", "SPONSOR"];

export default function ExhibitorList() {
    const router = useRouter();
    const [activeLetter, setActiveLetter] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("Please select");
    const [selectedCategory, setSelectedCategory] = useState("Please select");
    const [filterLogic, setFilterLogic] = useState<"AND" | "OR">("AND");
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

    const navigateTo = (name: string) => {
        router.push(`/exhibitors/exhibitor-list/${toSlug(name)}`);
    };

    const toggleExpand = (name: string) => {
        const slug = toSlug(name);
        setExpandedSlug(prev => (prev === slug ? null : slug));
    };

    const filteredExhibitors = exhibitors.filter(ex => {
        const matchSearch = !searchQuery || ex.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchType = selectedType === "Please select" || ex.type === selectedType;
        const matchCategory = selectedCategory === "Please select" || ex.category === selectedCategory;
        const matchLetter = !activeLetter
            ? true
            : activeLetter === "#"
                ? !isNaN(parseInt(ex.name.charAt(0)))
                : ex.name.charAt(0).toUpperCase() === activeLetter;

        if (filterLogic === "AND") {
            return matchSearch && matchType && matchCategory && matchLetter;
        } else {
            return (matchSearch || matchType || matchCategory) && matchLetter;
        }
    });

    const clearFilters = () => {
        setActiveLetter(null);
        setSearchQuery("");
        setSelectedType("Please select");
        setSelectedCategory("Please select");
    };

    const hasActiveFilters = activeLetter || searchQuery || selectedType !== "Please select" || selectedCategory !== "Please select";

    // Dummy logo component
    const DummyLogo = ({ name, size = 80 }: { name: string; size?: number }) => {
        const bgColor = getDummyImage(name);
        const initials = getInitials(name);
        return (
            <div
                style={{
                    backgroundColor: bgColor,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className="shrink-0 text-white font-bold font-display"
            >
                <span style={{ fontSize: size * 0.4 }}>
                    {initials}
                </span>
            </div>
        );
    };

    return (
        <main className="w-full bg-[#f0f2f5]">
            <PageBanner title="Exhibitor List" />

            <section className="py-8 px-6 pb-20 max-sm:py-5 max-sm:px-4 max-sm:pb-[60px]">
                <div className="max-w-[1400px] mx-auto flex gap-5 items-start max-lg:flex-col">

                    {/* SIDEBAR */}
                    <aside className="w-[185px] shrink-0 flex flex-col gap-0 max-lg:w-full">
                        <div className="flex items-center gap-2 bg-white border border-[#dde3ea] rounded-md p-2 mb-3">
                            <Search size={16} className="text-[#9aa6b2] shrink-0" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 border-none outline-none text-[13px] text-[#011b2e] bg-transparent min-w-0"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")} className="bg-transparent border-none cursor-pointer p-0 text-[#9aa6b2] flex items-center"><X size={14} /></button>
                            )}
                        </div>

                        <div className="grid grid-cols-4 max-lg:grid-cols-8 gap-0.5 bg-white border border-[#dde3ea] rounded-md p-1.5 mb-4">
                            {alphabet.map(letter => (
                                <button
                                    key={letter}
                                    onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                                    className={`bg-transparent border-none py-1.25 px-0.5 text-[13px] font-medium text-[#011b2e] cursor-pointer rounded transition-all duration-150 hover:bg-[#f0f2f5] text-center leading-none ${activeLetter === letter ? "bg-[#1a3a5c] text-white hover:bg-[#1a3a5c]" : ""}`}
                                >
                                    {letter}
                                </button>
                            ))}
                            <button className="bg-transparent border-none py-1.25 px-0.5 text-[11px] font-semibold text-[#1a3a5c] cursor-pointer rounded text-center col-span-2 hover:underline" onClick={() => setActiveLetter(null)}>
                                CLEAR
                            </button>
                        </div>

                        <div className="flex flex-col gap-1.5 mb-3.5">
                            <label className="text-[12px] font-semibold text-[#011b2e]">Type</label>
                            <div className="relative">
                                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="appearance-none w-full bg-white border border-[#dde3ea] rounded-md py-2 pl-2.5 pr-7 text-[13px] text-[#011b2e] cursor-pointer">
                                    {types.map(t => <option key={t}>{t}</option>)}
                                </select>
                                <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9aa6b2] pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 mb-3.5">
                            <label className="text-[12px] font-semibold text-[#011b2e]">Exhibitor Categories</label>
                            <div className="relative">
                                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="appearance-none w-full bg-white border border-[#dde3ea] rounded-md py-2 pl-2.5 pr-7 text-[13px] text-[#011b2e] cursor-pointer">
                                    {categories.map(c => <option key={c}>{c}</option>)}
                                </select>
                                <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9aa6b2] pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                            <span className="text-[13px] font-medium text-[#011b2e]">Filters:</span>
                            <button
                                className={`py-1 px-3 text-[12px] font-semibold border border-[#dde3ea] rounded bg-white cursor-pointer transition-all duration-150 text-[#5f6b76] ${filterLogic === "AND" ? "bg-[#1a3a5c] text-white border-[#1a3a5c]" : ""}`}
                                onClick={() => setFilterLogic("AND")}
                            >AND</button>
                            <button
                                className={`py-1 px-3 text-[12px] font-semibold border border-[#dde3ea] rounded bg-white cursor-pointer transition-all duration-150 text-[#5f6b76] ${filterLogic === "OR" ? "bg-[#1a3a5c] text-white border-[#1a3a5c]" : ""}`}
                                onClick={() => setFilterLogic("OR")}
                            >OR</button>
                            <span className="w-[18px] h-[18px] bg-[#1a3a5c] text-white rounded-full inline-flex items-center justify-center text-[11px] font-bold cursor-pointer shrink-0">ℹ</span>
                        </div>

                        <div className="text-[13px] text-[#5f6b76] mb-2">
                            <span>Showing: <strong className="text-[#011b2e]">{filteredExhibitors.length} results</strong></span>
                        </div>

                        {hasActiveFilters && (
                            <button onClick={clearFilters} className="bg-transparent border-none text-[12px] font-bold text-[#5f6b76] cursor-pointer text-left p-0 mb-4 tracking-wider hover:underline">CLEAR ALL</button>
                        )}

                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[13px] text-[#5f6b76]">View</span>
                            <div className="flex gap-1">
                                <button
                                    className={`w-9 h-9 flex items-center justify-center border border-[#dde3ea] rounded-md bg-white cursor-pointer text-[#9aa6b2] transition-all duration-150 hover:bg-[#f0f2f5] ${viewMode === "grid" ? "bg-[#1a3a5c] border-[#1a3a5c] text-white" : ""}`}
                                    onClick={() => setViewMode("grid")}
                                    title="Grid view"
                                >
                                    <Grid size={18} />
                                </button>
                                <button
                                    className={`w-9 h-9 flex items-center justify-center border border-[#dde3ea] rounded-md bg-white cursor-pointer text-[#9aa6b2] transition-all duration-150 hover:bg-[#f0f2f5] ${viewMode === "list" ? "bg-[#1a3a5c] border-[#1a3a5c] text-white" : ""}`}
                                    onClick={() => setViewMode("list")}
                                    title="List view"
                                >
                                    <List size={18} />
                                </button>
                            </div>
                            <button
                                className={`text-[13px] font-medium bg-transparent border-none cursor-pointer p-0 ${viewMode === "list" ? "text-[#1a3a5c] font-semibold" : "text-[#9aa6b2]"}`}
                                onClick={() => setViewMode("list")}
                            >
                                View List
                            </button>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <div className="flex-1 min-w-0 w-full">

                        {/* LIST VIEW */}
                        {viewMode === "list" && (
                            <div className="flex flex-col gap-0">
                                {filteredExhibitors.map((item, index) => {
                                    const slug = toSlug(item.name);
                                    const isExpanded = expandedSlug === slug;
                                    return (
                                        <div key={index} className="flex flex-col">
                                            {/* ROW */}
                                            <div
                                                className={`flex items-center bg-[#1a3a5c] px-4 h-[52px] gap-3 border-b border-white/8 cursor-pointer transition-colors duration-150 hover:bg-[#1f4570] ${index === 0 ? "rounded-t-md" : ""} ${index === filteredExhibitors.length - 1 && !isExpanded ? "rounded-b-md border-b-0" : ""} ${isExpanded ? "bg-[#1f4570] border-b-0" : ""}`}
                                                onClick={() => toggleExpand(item.name)}
                                            >
                                                <span className="text-[11px] font-bold text-white bg-[#2a4f78] px-2.5 py-1 rounded-sm tracking-wider whitespace-nowrap shrink-0">FEATURED</span>
                                                <span className="flex-1 text-[15px] max-sm:text-[13px] font-semibold text-white font-display min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</span>
                                                <div className="flex items-center gap-1.5 text-white/60 shrink-0">
                                                    {item.hasIcons.monitor && <Monitor size={16} />}
                                                    {item.hasIcons.cart && <ShoppingCart size={16} />}
                                                    {item.hasIcons.video && <Video size={16} />}
                                                </div>
                                                <div className="flex items-center gap-1 shrink-0">
                                                    <span className="text-[13px] text-white/60">Stand:</span>
                                                    <span className="text-[13px] font-semibold text-white">{item.stand}</span>
                                                </div>
                                                <span className="text-white/70 flex items-center shrink-0">
                                                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </span>
                                            </div>

                                            {/* DROPDOWN CARD - WITH DUMMY LOGO */}
                                            {isExpanded && (
                                                <div className={`bg-[#f0f4f8] border border-[#dde3ea] border-t-0 p-4 ${index === filteredExhibitors.length - 1 ? "rounded-b-md" : ""}`}>
                                                    <div className="flex items-center gap-4 bg-white border border-[#dde3ea] rounded-lg p-4">
                                                        <div className="w-16 h-16 bg-[#e8edf4] rounded-lg flex items-center justify-center shrink-0">
                                                            <DummyLogo name={item.name} size={50} />
                                                        </div>
                                                        <div className="flex-1 flex flex-col gap-1 min-w-0">
                                                            <span className="text-[10px] font-bold text-[#9aa6b2] tracking-wider uppercase">{item.category}</span>
                                                            <h3 className="text-base font-bold text-[#011b2e] font-display m-0">{item.name}</h3>
                                                            <div className="flex items-center gap-1 text-[13px] text-[#5f6b76]">
                                                                <MapPin size={13} className="text-[#1a3a5c] shrink-0" />
                                                                <span>Stand: {item.stand}</span>
                                                            </div>
                                                            <span className="inline-block text-[11px] font-bold text-[#1a3a5c] bg-[#e8edf4] rounded px-2 py-0.5 w-fit mt-0.5">{item.type}</span>
                                                        </div>
                                                        <button
                                                            className="bg-[#1a3a5c] text-white border-none rounded-md px-5 py-2.5 text-[13px] font-bold cursor-pointer whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1f4570]"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                navigateTo(item.name);
                                                            }}
                                                        >
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* GRID VIEW - WITH DUMMY LOGO */}
                        {viewMode === "grid" && (
                            <div className="grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3">
                                {filteredExhibitors.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-md border border-[#dde3ea] overflow-hidden flex flex-col cursor-pointer transition-shadow duration-150 hover:shadow-lg"
                                        onClick={() => navigateTo(item.name)}
                                    >
                                        <div className="bg-[#f0f2f5] text-[10px] font-bold text-[#5f6b76] tracking-wider px-2.5 py-1 text-center">{item.category}</div>
                                        <div className="h-[90px] flex items-center justify-center bg-white p-3">
                                            <DummyLogo name={item.name} size={60} />
                                        </div>
                                        <div className="p-2.5 flex-1">
                                            <h3 className="text-[13px] font-bold text-[#011b2e] mb-1 font-display leading-[1.3]">{item.name}</h3>
                                            <div className="flex items-center gap-1 mb-1.5">
                                                <span className="text-[12px] text-[#5f6b76]">Stand:</span>
                                                <span className="text-[12px] font-semibold text-[#011b2e]">{item.stand}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[#9aa6b2]">
                                                {item.hasIcons.monitor && <Monitor size={14} />}
                                                {item.hasIcons.cart && <ShoppingCart size={14} />}
                                                {item.hasIcons.video && <Video size={14} />}
                                            </div>
                                        </div>
                                        <div className="bg-[#1a3a5c] text-white text-center text-[11px] font-bold tracking-wider py-1.5">FEATURED</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {filteredExhibitors.length === 0 && (
                            <div className="text-center p-15 bg-white rounded-md">
                                <p className="text-[#5f6b76] mb-5">No exhibitors found matching your criteria.</p>
                                <button onClick={clearFilters} className="bg-[#1a3a5c] border-none px-6 py-2.5 rounded-full font-semibold cursor-pointer text-white">Clear Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}