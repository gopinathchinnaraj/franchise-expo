import PageBanner from "@/components/PageBanner";
import {
    Search,
    TrendingUp,
    Users,
    Plus,
} from "lucide-react";
import { ChevronRight } from "lucide-react";

const benefits = [
    {
        icon: <Search size={28} />,
        title: "Exposure",
        description:
            "Engage with visitors pre-show, onsite and post-show through our marketing vehicles, including exhibiting, digital and print marketing, enhanced sponsorships, and appointment setting opportunities.",
    },

    {
        icon: <TrendingUp size={28} />,
        title: "Generate New Leads",
        description:
            "Thousands of qualified candidates attend seeking franchise ownership opportunities including multi-unit ownership, area development, and master franchising.",
    },

    {
        icon: <Users size={28} />,
        title: "Connect With Candidates",
        description:
            "Showcase your franchise and actively engage with prospective candidates throughout your sales funnel using our complimentary guest program.",
    },

    {
        icon: <Plus size={28} />,
        title: "New Product Launches",
        description:
            "Gain exposure for company launches, new initiatives, and press releases through the Expo's targeted network of attendees, sponsors, partners, and associations.",
    },
];

const events = [
    "International Franchise Expo",
    "Franchise Expo South",
    "Franchise Expo Cincinnati",
    "Franchise Expo West",
    "Franchise Expo Dallas",
];

export default function WhyExhibit() {
    return (
        <main className="w-full overflow-hidden bg-[#f5f7fb]">

            {/* HERO */}
            <PageBanner title="Why Exhibit"/>

            {/* OPPORTUNITIES */}
            <section className="py-[100px] pb-[50px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">

                        <div className="bg-[#0067B2] p-[50px] max-md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                            <h2 className="font-display text-[42px] text-white mb-6 leading-none">Exhibitor Opportunities</h2>

                            <p className="text-white text-base leading-[1.9] mb-4.5">
                                <strong className="text-white">FRANCHISE BRANDS</strong> —
                                Showcase your concept on a global stage.
                                Connect with entrepreneurs and investors
                                exploring franchise ownership opportunities.
                            </p>

                            <p className="text-white text-base leading-[1.9] mb-4.5">
                                <strong className="text-white">INDUSTRY SUPPLIERS</strong> —
                                Position your brand as a trusted partner
                                in the franchise ecosystem and generate
                                valuable leads through targeted exposure.
                            </p>
                        </div>

                        <div className="bg-[#0067B2] p-[50px] max-md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                            <h2 className="font-display text-[42px] text-white mb-6 leading-none">Sponsorship Opportunities</h2>

                            <p className="text-white text-base leading-[1.9] mb-4.5">
                                Non-exhibiting sponsorship opportunities
                                allow suppliers to strategically connect
                                with franchisors and key decision-makers
                                using branding, messaging, and on-site
                                visibility.
                            </p>

                            <p className="text-white text-base leading-[1.9] mb-4.5">
                                Sponsors also gain access to exclusive
                                exhibitor networking events and private
                                receptions to expand their franchise
                                network.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* FORM */}
            <section className="py-20 bg-[#f3f3f3]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <h2 className="font-display text-[42px] max-md:text-[32px] font-bold uppercase text-[#0d2340] mb-[30px]">
                        LEARN MORE ABOUT EXHIBITOR AND SPONSORSHIP OPPORTUNITIES
                    </h2>

                    <form className="w-full">

                        <input type="text" placeholder="First Name *" className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" />
                        <input type="text" placeholder="Last Name *" className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" />
                        <input type="email" placeholder="Email *" className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" />
                        <input type="text" placeholder="Company *" className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" />
                        <input type="text" placeholder="Phone" className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" />

                        <div className="mt-6">
                            <label className="block text-xl font-bold text-[#0d2340] mb-3.5">
                                Does your company have a FDD? *
                            </label>

                            <div className="flex flex-col gap-3">
                                {["YES", "NO", "Not Sure"].map((item) => (
                                    <label key={item} className="flex items-center gap-3 text-[#111] text-sm cursor-pointer">
                                        <input type="checkbox" className="w-5 h-5 m-0" />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-xl font-bold text-[#0d2340] mb-3.5">
                                Which event(s) are you interested in participating in? *
                            </label>

                            <div className="flex flex-col gap-3">
                                {events.map((event) => (
                                    <label key={event} className="flex items-center gap-3 text-[#111] text-sm cursor-pointer">
                                        <input type="checkbox" className="w-5 h-5 m-0" />
                                        <span>{event}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group relative inline-flex items-center pl-[18px] pr-[52px] h-[48px] border-none rounded-full bg-[#0067b2] text-white font-display text-sm font-medium uppercase cursor-pointer hover:bg-[#00528c] transition-colors duration-200"
                        >
                            <span>SUBMIT</span>

                            <span className="absolute right-1 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-[#d9d9d9] border border-[#1d2357] flex items-center justify-center text-[#1d2357] text-[22px] leading-none group-hover:bg-white group-hover:scale-105 transition-all duration-200">
                                <ChevronRight size={18} />
                            </span>
                        </button>

                    </form>

                </div>
            </section>

            {/* BENEFITS */}
            <section className="pb-[120px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="text-center mb-[60px]">
                        <span className="text-[#0067B2] text-sm font-bold tracking-[2px]">WHY EXHIBIT</span>

                        <h2 className="font-display text-[64px] max-md:text-[42px] text-[#011b2e] mt-[18px]">Benefits Of Exhibiting</h2>
                    </div>

                    <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-7">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-[40px_32px] transition-transform duration-400 ease-out hover:-translate-y-2.5"
                            >

                                <div className="w-[70px] h-[70px] flex items-center justify-center text-[#0067B2] mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="font-display text-[28px] text-[#011b2e] mb-4">{item.title}</h3>

                                <p className="text-[#5f6b76] leading-[1.8] text-[15px]">{item.description}</p>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}