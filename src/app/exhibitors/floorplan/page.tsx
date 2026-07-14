"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ChevronRight } from "lucide-react";
import { useUTMData } from "@/hooks/useUTMTracker";
import { submitContactForm, PROJECT_ID_VAR } from "@/lib/graphql-client";

export default function FloorPlan() {
    const { utmData, campaign } = useUTMData();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        agreeShowInfo: false,
        agreeDataStoring: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
            setSubmitError("Please fill out all required fields marked with *");
            return;
        }

        if (!formData.agreeDataStoring) {
            setSubmitError("You must agree to Comexposium storing and processing your personal data.");
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        const payload = {
            email: formData.email,
            formType: "visitor-registration",
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            message: `Floorplan Request. Agree to show info: ${formData.agreeShowInfo ? "Yes" : "No"}. Agree to data storing: ${formData.agreeDataStoring ? "Yes" : "No"}`,
            
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
                name: "",
                phone: "",
                email: "",
                company: "",
                agreeShowInfo: false,
                agreeDataStoring: false,
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
        <main className="w-full overflow-hidden bg-[#f3f3f3]">
            {/* HERO */}
            <PageBanner title="Floor Plan"/>

            {/* FORM SECTION */}
            <section className="py-20 pb-[120px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="w-full bg-transparent">

                        <h2 className="font-display text-[52px] max-lg:text-[48px] max-md:text-[36px] leading-none uppercase text-[#151515] mb-10 max-w-full">
                            Enter Your Details To View Our Floorplan
                        </h2>

                        <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Name *"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Phone Number *"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                            />

                            <div className="mt-2.5 flex flex-col gap-6">

                                <label className="flex items-start gap-4 text-[18px] leading-[1.8] text-[#444] cursor-pointer">
                                    <input type="checkbox" checked={formData.agreeShowInfo} onChange={(e) => setFormData({...formData, agreeShowInfo: e.target.checked})} className="w-[22px] h-[22px] mt-1.5" />

                                    <span>
                                        I agree to receiving all show
                                        information, in addition to
                                        the information I have requested.
                                    </span>
                                </label>

                                <label className="flex items-start gap-4 text-[18px] leading-[1.8] text-[#444] cursor-pointer">
                                    <input type="checkbox" checked={formData.agreeDataStoring} onChange={(e) => setFormData({...formData, agreeDataStoring: e.target.checked})} className="w-[22px] h-[22px] mt-1.5" required />

                                    <span>
                                        I agree to Comexposium storing
                                        and processing my personal data
                                        for the purpose of the request.
                                    </span>
                                </label>

                            </div>

                            <p className="mt-2.5 text-base leading-[1.8] text-[#666] italic">
                                You can unsubscribe from these
                                communications at any time.
                                For more information, please
                                review our Privacy Policy.
                            </p>

                            <div className="flex flex-col gap-4 items-start mt-5">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group inline-flex items-center pl-4 pr-1 h-[42px] min-w-[140px] max-w-[200px] border-none rounded-full bg-[#0067b2] text-white text-[12px] font-bold uppercase cursor-pointer transition-colors duration-300 hover:bg-[#00589a] self-start disabled:opacity-75 disabled:cursor-not-allowed"
                                >
                                    <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</span>

                                    <span className="w-6.5 h-6.5 ml-2 rounded-full bg-[#e8e8e8] border border-[#143d7a] flex items-center justify-center text-[#143d7a] text-sm font-bold shrink-0">
                                        <ChevronRight size={16} />
                                    </span>
                                </button>

                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="p-4 bg-green-50 border border-green-300 text-green-800 font-medium font-body w-full max-w-[600px]">
                                        <p className="m-0 text-sm">Thank you! Your floorplan request has been submitted successfully.</p>
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

                    {/* CTA */}
                    <div className="mt-[70px] grid grid-cols-2 max-md:grid-cols-1 gap-9 max-md:gap-5">

                        <div className="bg-white h-[120px] max-md:h-auto max-md:min-h-[100px] px-[30px] max-md:p-10 flex items-center max-md:flex-col max-md:items-start justify-between max-md:gap-[15px] border border-[#ececec] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-0.5">

                            <h3 className="font-display text-2xl max-md:text-[30px] font-medium leading-[1.1] uppercase text-[#111111] m-0">
                                INTERESTED IN ATTENDING?
                            </h3>

                            <a href="#" className="inline-flex items-center justify-center h-8 pl-4 pr-1 rounded-full bg-[#0067b2] text-white font-display text-[11px] font-bold uppercase no-underline transition-colors duration-300 hover:bg-[#00589a]">
                                LEARN MORE

                                <span className="w-6 h-6 ml-2 rounded-full bg-[#e8e8e8] border border-[#143d7a] flex items-center justify-center text-[#143d7a] text-sm font-bold shrink-0">
                                    <ChevronRight size={18} />
                                </span>
                            </a>

                        </div>

                        <div className="bg-white h-[120px] max-md:h-auto max-md:min-h-[100px] px-[30px] max-md:p-10 flex items-center max-md:flex-col max-md:items-start justify-between max-md:gap-[15px] border border-[#ececec] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-0.5">

                            <h3 className="font-display text-2xl max-md:text-[30px] font-medium leading-[1.1] uppercase text-[#111111] m-0">
                                INTERESTED IN EXHIBITING?
                            </h3>

                            <a href="#" className="inline-flex items-center justify-center h-8 pl-4 pr-1 rounded-full bg-[#0067b2] text-white font-display text-[11px] font-bold uppercase no-underline transition-colors duration-300 hover:bg-[#00589a]">
                                LEARN MORE

                                <span className="w-6 h-6 ml-2 rounded-full bg-[#e8e8e8] border border-[#143d7a] flex items-center justify-center text-[#143d7a] text-sm font-bold shrink-0">
                                    <ChevronRight size={18} />
                                </span>
                            </a>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}