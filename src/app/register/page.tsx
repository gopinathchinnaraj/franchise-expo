// src/app/register/page.tsx
"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TabKey, TAB_QUERY_PARAM, getCleanTab } from "./tabConfig";

// Side cards & sidebar components
import RegisterSideCard from "./content/RegisterSideCard";
import VisitorInclusions from "./content/VisitorInclusions";

// Form components
import VisitorForm from "./forms/VisitorForm";
import DelegateForm from "./forms/DelegateForm";
import ExhibitorForm from "./forms/ExhibitorForm";
import SpeakerForm from "./forms/SpeakerForm";
import EnquiryForm from "./forms/EnquiryForm";

const TABS: { key: TabKey; label: string }[] = [
  { key: "enquiry", label: "Enquiry" },
  { key: "delegate", label: "Delegate" },
  { key: "exhibitor", label: "Exhibitor" },
  { key: "speaker", label: "Speaker" },
  { key: "visitor", label: "Visitor" },
];

function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read active tab key from URL query param, default to "enquiry"
  const rawTab = searchParams.get(TAB_QUERY_PARAM);
  const activeTab = getCleanTab(rawTab);

  // Modal states for Delegate Pass registration
  const [isDelegateModalOpen, setIsDelegateModalOpen] = useState(false);
  const [delegatePassType, setDelegatePassType] = useState<"individual" | "group">("individual");

  const handleTabChange = (tab: TabKey) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(TAB_QUERY_PARAM, tab);
    router.push(`/register?${params.toString()}`, { scroll: false });
  };

  const openDelegateModal = (type: "individual" | "group") => {
    setDelegatePassType(type);
    setIsDelegateModalOpen(true);
  };

  return (
    <div className="w-full bg-[#f8fafc] py-10 px-4 md:px-8">
      
      {/* Outer Card Container encapsulating tab bar and active tab contents */}
      <div 
        id="register-tabs-container"
        className="w-full max-w-[1250px] mx-auto bg-white rounded-3xl border border-gray-200/50 p-8 max-sm:p-4 shadow-sm-custom mt-2 mb-10 scroll-mt-24"
      >
        
        {/* Tab switcher navigation bar */}
        <div className="w-full border-b border-gray-100 mb-10 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-3 pb-3">
            {TABS.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`py-2 px-6 text-sm font-semibold rounded-full font-display uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#005eb8] text-white shadow-sm border border-[#005eb8]"
                      : "bg-white text-black border border-gray-200 hover:border-[#005eb8] hover:text-[#005eb8] hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic content rendering depending on tab type */}
        <div>
          {/* Enquiry Tab */}
          {activeTab === "enquiry" && (
            <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 items-stretch">
              <EnquiryForm />
              <RegisterSideCard 
                title="Register, Submit & Step Into the World of Franchise Expo"
                subtitle="Connect with leading franchisors, attend business scaling keynotes, and discover your next investment opportunity."
              />
            </div>
          )}

          {/* Exhibitor Tab */}
          {activeTab === "exhibitor" && (
            <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 items-stretch">
              <ExhibitorForm />
              <RegisterSideCard 
                title="Exhibit, Sponsor & Showcase Your Brand at Franchise Expo"
                subtitle="Position your concept in front of thousands of high-intent candidates searching for single, multi-unit or master franchise systems."
              />
            </div>
          )}

          {/* Speaker Tab */}
          {activeTab === "speaker" && (
            <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 items-stretch">
              <SpeakerForm />
              <RegisterSideCard 
                title="Apply to Speak & Share Your Insights at Franchise Expo"
                subtitle="Present case studies, operational frameworks, or capital sourcing advice to expanding business owners and delegates."
              />
            </div>
          )}

          {/* Visitor Tab */}
          {activeTab === "visitor" && (
            <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 items-stretch">
              <VisitorInclusions onSwitchToDelegate={() => handleTabChange("delegate")} />
              <VisitorForm />
            </div>
          )}

          {/* Delegate Tab (Two Pricing Cards side-by-side) */}
          {activeTab === "delegate" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[1100px] mx-auto py-4">
              
              {/* Individual Pass */}
              <div className="bg-white rounded-3xl border border-gray-200/80 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#fd7122]/10 text-[#e05a0a] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider font-body">
                      Flash Sale
                    </span>
                    <span className="text-[#666666] text-xs font-semibold uppercase tracking-wider font-body">
                      Single Pass
                    </span>
                  </div>

                  {/* Pricing Details */}
                  <h3 className="font-display text-2xl font-bold text-[#011b2e] leading-snug">
                    Individual Pass
                  </h3>
                  <p className="font-body text-xs text-[#666666] mt-1 mb-4">Single Delegate Pass</p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-4xl font-extrabold text-[#011b2e]">$134.21</span>
                    <span className="font-body text-[#666666] line-through text-sm">$157.89</span>
                    <span className="font-body text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-md">
                      15% off
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#fd7122] font-semibold mb-6">Save 15% for a limited time only</p>

                  {/* Spots remaining progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-[11px] font-semibold font-body text-[#666666] mb-1.5">
                      <span>Hurry! Only 29 passes left</span>
                      <span>87% claimed</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#fd7122] rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>

                  {/* Benefits check list */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-display text-xs font-bold text-[#011b2e] uppercase tracking-wider mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3 font-body text-xs text-[#666666]">
                      {[
                        "Full access to exhibition area",
                        "Full access to all conference sessions",
                        "Access to networking lounge",
                        "Access to meeting rooms",
                        "Dedicated meeting facilitation",
                        "Logo promotion in the digital post event report & pre event magazine",
                        "Logo on the participant page of the event website",
                        "Logo promotion across all marketing collateral including socials & email",
                        "Refreshments"
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => openDelegateModal("individual")}
                    className="w-full bg-[#005eb8] text-[#ffffff] hover:bg-[#004f99] font-display uppercase tracking-widest py-4 px-6 rounded-full font-bold leading-none border-0 cursor-pointer shadow-sm hover:shadow transition-all duration-300 text-center"
                  >
                    Register Now
                  </button>
                </div>
              </div>

              {/* Group Delegate Pass */}
              <div className="bg-white rounded-3xl border border-gray-200/80 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#005eb8]/10 text-[#005eb8] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider font-body">
                      Flash Sale
                    </span>
                    <span className="text-[#666666] text-xs font-semibold uppercase tracking-wider font-body">
                      Group Pass
                    </span>
                  </div>

                  {/* Pricing Details */}
                  <h3 className="font-display text-2xl font-bold text-[#011b2e] leading-snug">
                    Group Delegate Pass
                  </h3>
                  <p className="font-body text-xs text-[#666666] mt-1 mb-4">2 or more Delegate Passes</p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-4xl font-extrabold text-[#011b2e]">$126.32<span className="text-sm font-normal text-[#666666] lowercase">/pass</span></span>
                    <span className="font-body text-[#666666] line-through text-sm">$157.89</span>
                    <span className="font-body text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-md">
                      20% off
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#005eb8] font-semibold mb-6">Save 20% for a limited time only</p>

                  {/* Spots remaining progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-[11px] font-semibold font-body text-[#666666] mb-1.5">
                      <span>236 already registered</span>
                      <span>79% claimed</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#005eb8] rounded-full" style={{ width: "79%" }}></div>
                    </div>
                  </div>

                  {/* Benefits check list */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-display text-xs font-bold text-[#011b2e] uppercase tracking-wider mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3 font-body text-xs text-[#666666]">
                      {[
                        "Full access to exhibition area",
                        "Full access to all conference sessions",
                        "Access to networking lounge",
                        "Access to meeting rooms",
                        "Dedicated meeting facilitation",
                        "Logo promotion in the digital post event report & pre event magazine",
                        "Logo on the participant page of the event website",
                        "Logo promotion across all marketing collateral including socials & email",
                        "Refreshments"
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => openDelegateModal("group")}
                    className="w-full bg-[#005eb8] text-[#ffffff] hover:bg-[#004f99] font-display uppercase tracking-widest py-4 px-6 rounded-full font-bold leading-none border-0 cursor-pointer shadow-sm hover:shadow transition-all duration-300 text-center"
                  >
                    Register Now
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

      {/* Full-width CTA Banner above the footer */}
      <div className="w-full max-w-[1250px] mx-auto bg-gradient-to-r from-[#005eb8] to-[#1cb7cf] py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 rounded-3xl shadow-md border border-[#005eb8]/20 mb-8">
        <div className="text-white text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-wider">
            Don’t Miss Out - learn more Now
          </h3>
          <p className="font-body text-xs md:text-sm text-white/85 mt-1 max-w-[500px]">
            Have questions about ticket passes, booths, or sponsorship slots? Get in touch with our team.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            handleTabChange("enquiry");
            const el = document.getElementById("register-tabs-container");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-white text-black hover:bg-gray-100 font-display uppercase tracking-widest font-bold py-4 px-8 rounded-full border-0 cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 shrink-0 text-xs"
        >
          Get in Touch
        </button>
      </div>

      {/* Delegate Modal Popup */}
      {isDelegateModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="w-full max-w-[650px] relative max-h-[90vh]">
            <DelegateForm 
              passType={delegatePassType} 
              onClose={() => setIsDelegateModalOpen(false)} 
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-12">
        <div className="w-10 h-10 border-4 border-[#005eb8] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-body text-sm text-gray-500 mt-4">Loading registration...</p>
      </div>
    }>
      <RegisterPageContent />
    </Suspense>
  );
}