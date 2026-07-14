"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import {
    Search,
    TrendingUp,
    Users,
    Plus,
} from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useUTMData } from "@/hooks/useUTMTracker";
import { submitContactForm, PROJECT_ID_VAR } from "@/lib/graphql-client";

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
    const { utmData, campaign } = useUTMData();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        fdd: "",
        interests: [] as string[],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleCheckboxChange = (event: string) => {
        setFormData((prev) => {
            const newInterests = prev.interests.includes(event)
                ? prev.interests.filter((item) => item !== event)
                : [...prev.interests, event];
            return { ...prev, interests: newInterests };
        });
    };

    const handleFddChange = (option: string) => {
        setFormData(prev => ({
            ...prev,
            fdd: prev.fdd === option ? "" : option
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.company.trim()) {
            setSubmitError("Please fill out all required fields marked with *");
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        const payload = {
            email: formData.email,
            formType: "exhibitor-enquiry",
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            company: formData.company,
            phone: formData.phone,
            message: `FDD Check: ${formData.fdd || "None"}. Interests: ${formData.interests.join(", ")}`,
            
            utmSource: utmData?.utm_source || "",
            utmMedium: utmData?.utm_medium || "",
            utmCampaign: utmData?.utm_campaign || "",
            utmTerm: utmData?.utm_term || "",
            utmContent: utmData?.utm_content || "",
            utmId: utmData?.utm_id || "",
            referrer: utmData?.referrer || "",
            landingPage: utmData?.landingPage || "",
            utmTimestamp: utmData?.timestamp || "",
            
            cmsCampaignId: campaign?.id || "",
            cmsCampaignName: campaign?.name || "",
            cmsCampaignSource: campaign?.utm_source || "",
            cmsCampaignMedium: campaign?.utm_medium || "",
        };

        try {
            if (!PROJECT_ID_VAR.projectId) {
                throw new Error("CMS Project ID is missing.");
            }

            // 1. Submit to CMS GraphQL API
            const result = await submitContactForm(PROJECT_ID_VAR.projectId, payload);
            if (result.errors) {
                throw new Error(result.errors[0]?.message || "Failed to submit lead to CMS.");
            }

            // 2. Submit to parallel REST API (fallback notification)
            const restUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '') + '/api';
            await fetch(`${restUrl}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }).catch((err) => console.warn("Parallel REST submit failed:", err));

            console.log("Form submitted successfully:", payload);
            setIsSubmitted(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                phone: "",
                fdd: "",
                interests: [],
            });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setSubmitError(error.message || "Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                    <form className="w-full" onSubmit={handleSubmit}>

                        <input type="text" placeholder="First Name *" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" required />
                        <input type="text" placeholder="Last Name *" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" required />
                        <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" required />
                        <input type="text" placeholder="Company *" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" required />
                        <input type="text" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full h-[54px] px-4 bg-[#ececec] border-none rounded-none mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0067b2]" />

                        <div className="mt-6">
                            <label className="block text-xl font-bold text-[#0d2340] mb-3.5">
                                Does your company have a FDD? *
                            </label>

                            <div className="flex flex-col gap-3">
                                {["YES", "NO", "Not Sure"].map((item) => (
                                    <label key={item} className="flex items-center gap-3 text-[#111] text-sm cursor-pointer">
                                        <input type="checkbox" checked={formData.fdd === item} onChange={() => handleFddChange(item)} className="w-5 h-5 m-0" />
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
                                        <input type="checkbox" checked={formData.interests.includes(event)} onChange={() => handleCheckboxChange(event)} className="w-5 h-5 m-0" />
                                        <span>{event}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <br />
                        
                        <div className="flex flex-col gap-4 items-start">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative inline-flex items-center pl-[18px] pr-[52px] h-[48px] border-none rounded-full bg-[#0067b2] text-white font-display text-sm font-medium uppercase cursor-pointer hover:bg-[#00528c] transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</span>

                                <span className="absolute right-1 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-[#d9d9d9] border border-[#1d2357] flex items-center justify-center text-[#1d2357] text-[22px] leading-none group-hover:bg-white group-hover:scale-105 transition-all duration-200">
                                    <ChevronRight size={18} />
                                </span>
                            </button>

                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="p-4 bg-green-50 border border-green-300 text-green-800 font-medium font-body w-full max-w-[600px]">
                                    <p className="m-0 text-sm">Thank you! Your inquiry has been submitted successfully.</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {submitError && (
                                <div className="p-4 bg-red-50 border border-red-300 text-red-800 font-medium font-body w-full max-w-[600px]">
                                    <p className="m-0 text-sm">{submitError}</p>
                                </div>
                            )}
                        </div>

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