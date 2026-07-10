// src/app/register/content/SpeakerContent.tsx
import React from "react";

export default function SpeakerContent() {
  const values = [
    {
      title: "Thought Leadership",
      desc: "Share your expertise, business strategies, and success stories directly on our seminar stages.",
    },
    {
      title: "Industry Influence",
      desc: "Position yourself as an authority, networking with other leading franchisors, developers, and advisors.",
    },
    {
      title: "Audience Outreach",
      desc: "Connect with a highly motivated audience of entrepreneurs, managers, and prospective buyers.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 max-sm:p-6 shadow-sm">
      <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        Speaker Panels
      </span>
      <h2 className="font-display text-3xl max-md:text-2xl font-bold text-[#011b2e] leading-tight mb-4">
        Present on the Franchise Stage
      </h2>
      <p className="font-body text-[#666666] text-[15px] leading-relaxed mb-8">
        If you have knowledge, insights, or actionable business wisdom that can benefit aspiring franchisees or scaling franchisors, we want to hear from you. Apply now to participate in our events.
      </p>

      <div className="space-y-6">
        {values.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
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

      <div className="mt-8 pt-6 border-t border-gray-100 bg-[#edfcfd] p-4 rounded-xl text-center">
        <p className="font-body text-xs font-medium text-[#0f8fa0]">
          * Applications are reviewed on a rolling basis by our programming committee. Selected speakers will be contacted with session assignments.
        </p>
      </div>
    </div>
  );
}
