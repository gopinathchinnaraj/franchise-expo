// src/app/register/content/VisitorContent.tsx
import React from "react";

export default function VisitorContent() {
  const highlights = [
    {
      title: "Explore 400+ Top Brands",
      desc: "Meet leading franchisors across industries: food, retail, home services, healthcare, and more.",
    },
    {
      title: "Free Educational Seminars",
      desc: "Attend expert-led talks on franchise law, financing options, marketing, and operations.",
    },
    {
      title: "1-on-1 Expert Guidance",
      desc: "Connect directly with franchise consultants and legal specialists to evaluate opportunities.",
    },
    {
      title: "Networking Hub",
      desc: "Connect with like-minded entrepreneurs, partners, and funding representatives.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 max-sm:p-6 shadow-sm">
      <span className="inline-block px-3 py-1 bg-[#1cb7cf]/10 text-[#0f8fa0] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        Visitor Experience
      </span>
      <h2 className="font-display text-3xl max-md:text-2xl font-bold text-[#011b2e] leading-tight mb-4">
        Why Visit the Franchise Expo?
      </h2>
      <p className="font-body text-[#666666] text-[15px] leading-relaxed mb-8">
        The International Franchise Expo is the premier event for prospective business owners. Whether you want to buy a franchise, invest in a development agreement, or learn about industry trends, this event is designed for you.
      </p>

      <div className="space-y-6">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#1cb7cf]/15 flex items-center justify-center text-[#1cb7cf] shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

      <div className="mt-8 pt-6 border-t border-gray-100">
        <h4 className="font-display text-sm font-semibold text-[#011b2e] uppercase tracking-wider mb-2">
          Show Information:
        </h4>
        <div className="flex flex-col gap-2 font-body text-sm text-[#666666]">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#fd7122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Major Expo Center (Check Agenda)</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#fd7122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Pre-registration: Complimentary admission</span>
          </div>
        </div>
      </div>
    </div>
  );
}
