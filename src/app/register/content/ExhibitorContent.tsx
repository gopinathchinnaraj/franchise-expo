// src/app/register/content/ExhibitorContent.tsx
import React from "react";

export default function ExhibitorContent() {
  const points = [
    {
      title: "Meet Qualified Candidates",
      desc: "Present your concept directly to thousands of high-intent candidates seeking franchise investments.",
    },
    {
      title: "Amplified Brand Presence",
      desc: "Position your brand as an industry leader through on-floor banners, sponsorships, and digital catalogs.",
    },
    {
      title: "Dedicated Guest Programs",
      desc: "Invite existing prospects to meet your development team at the show with complimentary passes.",
    },
    {
      title: "Interactive Booth Space",
      desc: "Customize your booth size and design to showcase your operations, brand experience, and products.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 max-sm:p-6 shadow-sm">
      <span className="inline-block px-3 py-1 bg-navy-mid/10 text-navy-mid text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        Exhibitor & Sponsor Hub
      </span>
      <h2 className="font-display text-3xl max-md:text-2xl font-bold text-[#011b2e] leading-tight mb-4">
        Expand Your Franchise System
      </h2>
      <p className="font-body text-[#666666] text-[15px] leading-relaxed mb-8">
        Showcase your franchise concept at the industry's most significant lead-generation event. Connect with candidates interested in multi-unit licenses, master franchises, and single-unit investments.
      </p>

      <div className="space-y-6">
        {points.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-navy-mid/15 flex items-center justify-center text-navy-mid shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#011b2e] leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-sm text-[#666666] mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
        <div className="bg-[#f0f8ff] p-3 rounded-lg text-center">
          <p className="font-display text-2xl font-black text-[#005eb8]">10k+</p>
          <p className="font-body text-[11px] text-[#666666] uppercase tracking-wide mt-1">Expected Visitors</p>
        </div>
        <div className="bg-[#f0f8ff] p-3 rounded-lg text-center">
          <p className="font-display text-2xl font-black text-[#005eb8]">80%</p>
          <p className="font-body text-[11px] text-[#666666] uppercase tracking-wide mt-1">Decision Makers</p>
        </div>
      </div>
    </div>
  );
}
