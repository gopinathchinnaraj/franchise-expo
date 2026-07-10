// src/app/register/content/DelegateContent.tsx
import React from "react";

export default function DelegateContent() {
  const benefits = [
    {
      title: "Exclusive Summit Sessions",
      desc: "Gain entry to high-level keynotes, masterclasses, and specialized panel discussions.",
    },
    {
      title: "VIP Networking Lounge",
      desc: "Connect with high-net-worth investors, multi-unit developers, and corporate executives.",
    },
    {
      title: "Speaker Presentations & Files",
      desc: "Receive digital download packages containing all speaker decks, templates, and reference guides.",
    },
    {
      title: "Summit Catering & Breaks",
      desc: "Includes networking lunches, coffee bar access, and VIP reception passes.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 max-sm:p-6 shadow-sm">
      <span className="inline-block px-3 py-1 bg-[#fd7122]/10 text-[#e05a0a] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        Delegate Privileges
      </span>
      <h2 className="font-display text-3xl max-md:text-2xl font-bold text-[#011b2e] leading-tight mb-4">
        Join the Franchise VIP Summit
      </h2>
      <p className="font-body text-[#666666] text-[15px] leading-relaxed mb-8">
        Delegate registration grants full access to the Franchise Summit, featuring advanced strategies for area developers, corporate investors, and brands scaling internationally.
      </p>

      <div className="space-y-6">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-[#fd7122]/15 flex items-center justify-center text-[#fd7122] shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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

      <div className="mt-8 pt-6 border-t border-gray-100 bg-white/50 p-4 rounded-xl">
        <h4 className="font-display text-xs font-semibold text-[#011b2e] uppercase tracking-wider mb-2">
          Pass Highlights:
        </h4>
        <ul className="list-disc pl-4 font-body text-xs text-[#666666] space-y-1">
          <li>Access to general exhibition halls</li>
          <li>Official Delegate Certificate and Event Guidebook</li>
          <li>Pre-show matchmaking scheduler platform entry</li>
        </ul>
      </div>
    </div>
  );
}
