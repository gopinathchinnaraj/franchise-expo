// src/app/register/content/EnquiryContent.tsx
import React from "react";

export default function EnquiryContent() {
  return (
    <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 max-sm:p-6 shadow-sm">
      <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        Support Center
      </span>
      <h2 className="font-display text-3xl max-md:text-2xl font-bold text-[#011b2e] leading-tight mb-4">
        We're Here to Help
      </h2>
      <p className="font-body text-[#666666] text-[15px] leading-relaxed mb-6">
        Have questions about ticket passes, exhibiting spaces, venue access, or sponsorships? Drop us a message, and our customer relations team will guide you.
      </p>

      <div className="space-y-4">
        <div className="p-4 bg-white border border-gray-100 rounded-xl">
          <p className="font-display text-sm font-bold text-[#011b2e] uppercase tracking-wide">Typical Response Time</p>
          <p className="font-body text-sm text-[#666666] mt-1">Our average response time is under 24 business hours.</p>
        </div>

        <div className="p-4 bg-white border border-gray-100 rounded-xl">
          <p className="font-display text-sm font-bold text-[#011b2e] uppercase tracking-wide">Press & Media Enquiries</p>
          <p className="font-body text-sm text-[#666666] mt-1">For media credentials, interview scheduling, or logo requests, please select "Media Partnership" in the request type.</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2 font-body text-xs text-[#666666]">
        <p><strong>Organizer:</strong> Max Business Media & MFV Expositions</p>
        <p><strong>Email support:</strong> info@franchiseexpo.com</p>
      </div>
    </div>
  );
}
