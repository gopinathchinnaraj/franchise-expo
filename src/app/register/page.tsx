// src/app/register/page.tsx
"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { TabKey, TAB_QUERY_PARAM, TAB_HERO_METADATA, getCleanTab } from "./tabConfig";

// Info Content components (Left Sticky Column)
import VisitorContent from "./content/VisitorContent";
import DelegateContent from "./content/DelegateContent";
import ExhibitorContent from "./content/ExhibitorContent";
import SpeakerContent from "./content/SpeakerContent";
import EnquiryContent from "./content/EnquiryContent";

// Form components (Right Scroll Column)
import VisitorForm from "./forms/VisitorForm";
import DelegateForm from "./forms/DelegateForm";
import ExhibitorForm from "./forms/ExhibitorForm";
import SpeakerForm from "./forms/SpeakerForm";
import EnquiryForm from "./forms/EnquiryForm";

const TABS: { key: TabKey; label: string }[] = [
  { key: "visitor", label: "Visitor Registration" },
  { key: "delegate", label: "Delegate Pass" },
  { key: "exhibitor", label: "Exhibit / Sponsor" },
  { key: "speaker", label: "Apply to Speak" },
  { key: "enquiry", label: "General Enquiry" },
];

function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read active tab key from URL query param, default to "visitor"
  const rawTab = searchParams.get(TAB_QUERY_PARAM);
  const activeTab = getCleanTab(rawTab);

  const handleTabChange = (tab: TabKey) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(TAB_QUERY_PARAM, tab);
    router.push(`/register?${params.toString()}`, { scroll: false });
  };

  const hero = TAB_HERO_METADATA[activeTab];

  return (
    <>
      {/* Dynamic SEO banner with subtitle */}
      <PageBanner title={hero.title} subtitle={hero.subtitle} />

      <div className="w-full max-w-[1200px] mx-auto px-5 py-12 pb-20">
        
        {/* Tab switcher navigation bar */}
        <div className="w-full border-b border-gray-200 mb-10 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-2 min-w-max pb-1">
            {TABS.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`py-3 px-5 text-sm font-semibold border-b-2 font-display uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "border-[#005eb8] text-[#005eb8]"
                      : "border-transparent text-black hover:text-[#005eb8]/80"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Sticky Split Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 items-start">
          
          {/* Sticky Left Column (Height fit is critical for sticky positioning) */}
          <div className="lg:sticky lg:top-24 h-fit">
            {activeTab === "visitor" && <VisitorContent />}
            {activeTab === "delegate" && <DelegateContent />}
            {activeTab === "exhibitor" && <ExhibitorContent />}
            {activeTab === "speaker" && <SpeakerContent />}
            {activeTab === "enquiry" && <EnquiryContent />}
          </div>

          {/* Scrolling Right Column (Form container) */}
          <div className="w-full bg-[#f8fafc] rounded-2xl">
            {activeTab === "visitor" && <VisitorForm />}
            {activeTab === "delegate" && <DelegateForm />}
            {activeTab === "exhibitor" && <ExhibitorForm />}
            {activeTab === "speaker" && <SpeakerForm />}
            {activeTab === "enquiry" && <EnquiryForm />}
          </div>

        </div>

      </div>
    </>
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