// src/app/register/content/VisitorInclusions.tsx
import React from "react";
import { Check, X } from "lucide-react";

interface VisitorInclusionsProps {
  onSwitchToDelegate: () => void;
}

export default function VisitorInclusions({ onSwitchToDelegate }: VisitorInclusionsProps) {
  const whatsIncluded = [
    "Limited access to exhibition area",
    "Post-event report"
  ];

  const whatsNotIncluded = [
    "Access to the networking lounge",
    "Dedicated meeting facilitation",
    "Logo on the participant page of the event website",
    "Refreshments",
    "Access to the conference sessions",
    "Access to meeting rooms",
    "Logo promotion in the digital post event report & pre event magazine"
  ];

  return (
    <div className="w-full bg-[#011b2e] rounded-3xl p-8 max-sm:p-6 text-white shadow-md flex flex-col justify-between h-full min-h-[550px] border border-gray-800">
      <div>
        {/* FREE ENTRY Badge */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase tracking-wider rounded-full font-body">
            Free Entry
          </span>
        </div>

        {/* Heading */}
        <h3 className="font-display text-3xl max-md:text-2xl font-bold tracking-wide leading-tight mb-4">
          Visit Franchise Expo
        </h3>
        <p className="font-body text-gray-300 text-sm leading-relaxed mb-8">
          Join thousands of aspiring entrepreneurs, investors, and business leaders at the premier lead-generation event.
        </p>

        {/* What's Included */}
        <div className="mb-6">
          <h4 className="font-display text-xs font-bold text-[#1cb7cf] uppercase tracking-wider mb-3.5">
            What's Included
          </h4>
          <ul className="space-y-2.5">
            {whatsIncluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span className="font-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div>
          <h4 className="font-display text-xs font-bold text-[#fd7122] uppercase tracking-wider mb-3.5">
            Not Included
          </h4>
          <ul className="space-y-2.5">
            {whatsNotIncluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400">
                <X className="w-4 h-4 text-[#fd7122] shrink-0 mt-0.5" />
                <span className="font-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Switch to Delegate CTA Link */}
      <div className="mt-8 pt-6 border-t border-gray-800/80">
        <button
          type="button"
          onClick={onSwitchToDelegate}
          className="w-full flex items-center justify-between text-left group font-body text-xs font-semibold text-[#1cb7cf] hover:text-[#1cb7cf]/80 transition-colors"
        >
          <span>Want full access? Register as a Delegate</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
