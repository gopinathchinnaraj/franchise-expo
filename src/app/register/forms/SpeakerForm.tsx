// src/app/register/forms/SpeakerForm.tsx
"use client";

import { useState } from "react";
// @ts-ignore
import { getNames } from "country-list";
import { useUTMData } from "@/hooks/useUTMTracker";
import { submitContactForm, PROJECT_ID_VAR } from "@/lib/graphql-client";

const INDUSTRY_OPTIONS = [
  "Select Industry",
  "IT / Software",
  "BFSI",
  "Manufacturing",
  "Healthcare",
  "Retail / E-commerce",
  "Telecom",
  "Automotive",
  "Other",
];

const PHONE_CODES = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+65", flag: "🇸🇬" },
];

const COUNTRY_OPTIONS = ["Select Country", ...getNames().sort()];

const initialFormState = {
  fullName: "",
  jobTitle: "",
  companyName: "",
  workEmail: "",
  phoneCode: "+1",
  phone: "",
  country: "Select Country",
  industry: INDUSTRY_OPTIONS[0],
  message: "",
  agreeTerms: false,
  agreeMarketing: false,
};

const labelClass = "block text-sm font-semibold text-[#011b2e] mb-1.5 font-body";
const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/20 focus:border-[#005eb8] transition-all font-body text-sm bg-white";

export default function SpeakerForm() {
  const { utmData, campaign } = useUTMData();
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full Name is required";
    if (!form.jobTitle.trim()) next.jobTitle = "Job Title is required";
    if (!form.companyName.trim()) next.companyName = "Company Name is required";
    if (!form.workEmail.trim()) {
      next.workEmail = "Work Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      next.workEmail = "Enter a valid email address";
    }
    if (form.country === "Select Country") next.country = "Please select your country";
    if (!form.agreeTerms) next.agreeTerms = "You must accept the Terms and Conditions";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const payload = {
      email: form.workEmail,
      formType: "speaker-application",
      name: form.fullName,
      company: form.companyName,
      phone: `${form.phoneCode} ${form.phone}`.trim(),
      country: form.country,
      jobTitle: form.jobTitle,
      message: `Industry: ${form.industry}. Message/Topic proposal: ${form.message}`,
      
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

      // 1. GraphQL submit
      const result = await submitContactForm(PROJECT_ID_VAR.projectId, payload);
      if (result.errors) {
        throw new Error(result.errors[0]?.message || "Failed to submit lead to CMS.");
      }

      // 2. Parallel REST submit
      const restUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      await fetch(`${restUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.warn("Parallel REST submit failed:", err));

      setStatus("success");
      setForm(initialFormState);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-8 max-sm:p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold text-[#011b2e]">
          Speaker Application
        </h3>
        <p className="font-body text-xs text-[#666666] mt-1">
          Apply to speak or participate in panel discussions at the event.
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto mb-4">
            <svg className="w-8 h-8 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display text-xl font-bold text-[#011b2e]">Application Submitted</p>
          <p className="font-body text-sm text-[#666666] mt-2 leading-relaxed">
            Thank you! Your speaker application has been submitted successfully. Our programming committee will review your proposal.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="speaker-fullName" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="speaker-fullName"
              name="fullName"
              type="text"
              placeholder="e.g. Dr. Arthur Pendelton"
              value={form.fullName}
              onChange={handleChange}
              className={`${inputClass} ${errors.fullName ? "border-red-400" : ""}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
          </div>

          {/* Job Title + Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="speaker-jobTitle" className={labelClass}>
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                id="speaker-jobTitle"
                name="jobTitle"
                type="text"
                placeholder="e.g. Chief Executive Officer"
                value={form.jobTitle}
                onChange={handleChange}
                className={`${inputClass} ${errors.jobTitle ? "border-red-400" : ""}`}
              />
              {errors.jobTitle && <p className="text-red-500 text-xs mt-1 font-medium">{errors.jobTitle}</p>}
            </div>
            <div>
              <label htmlFor="speaker-companyName" className={labelClass}>
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="speaker-companyName"
                name="companyName"
                type="text"
                placeholder="e.g. Enterprise Partners"
                value={form.companyName}
                onChange={handleChange}
                className={`${inputClass} ${errors.companyName ? "border-red-400" : ""}`}
              />
              {errors.companyName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.companyName}</p>}
            </div>
          </div>

          {/* Work Email + Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="speaker-workEmail" className={labelClass}>
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="speaker-workEmail"
                name="workEmail"
                type="email"
                placeholder="you@company.com"
                value={form.workEmail}
                onChange={handleChange}
                className={`${inputClass} ${errors.workEmail ? "border-red-400" : ""}`}
              />
              {errors.workEmail && <p className="text-red-500 text-xs mt-1 font-medium">{errors.workEmail}</p>}
            </div>
            <div>
              <label htmlFor="speaker-phone" className={labelClass}>
                Phone Number
              </label>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-[#005eb8]/20 focus-within:border-[#005eb8] transition-all bg-white">
                <select
                  name="phoneCode"
                  value={form.phoneCode}
                  onChange={handleChange}
                  className="bg-[#f8fafc] px-3.5 py-3 border-r border-gray-300 text-gray-700 text-sm focus:outline-none cursor-pointer"
                >
                  {PHONE_CODES.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.flag} {p.code}
                    </option>
                  ))}
                </select>
                <input
                  id="speaker-phone"
                  name="phone"
                  type="tel"
                  placeholder="000 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Country + Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="speaker-country" className={labelClass}>
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="speaker-country"
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`${inputClass} bg-white cursor-pointer ${errors.country ? "border-red-400" : ""}`}
              >
                <option value="Select Country">Select Country</option>
                {COUNTRY_OPTIONS.filter((c) => c !== "Select Country").map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1 font-medium">{errors.country}</p>}
            </div>
            <div>
              <label htmlFor="speaker-industry" className={labelClass}>
                Industry
              </label>
              <select
                id="speaker-industry"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className={`${inputClass} bg-white cursor-pointer`}
              >
                {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Topic */}
          <div>
            <label htmlFor="speaker-message" className={labelClass}>
              Topic Proposal / Message
            </label>
            <textarea
              id="speaker-message"
              name="message"
              rows={4}
              placeholder="Outline your proposed topic, case studies, or presentation points..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-2.5 text-xs text-[#666666] leading-relaxed cursor-pointer select-none">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
                className="mt-0.5 h-4.5 w-4.5 accent-[#005eb8] border-gray-300 rounded cursor-pointer"
              />
              <span>
                I confirm that I have read, understand and accept the event's{" "}
                <a href="/terms" target="_blank" className="text-[#005eb8] underline hover:text-[#004f99] font-medium">
                  Terms and Conditions
                </a>
                <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.agreeTerms && <p className="text-red-500 text-xs font-medium">{errors.agreeTerms}</p>}

            <label className="flex items-start gap-2.5 text-xs text-[#666666] leading-relaxed cursor-pointer select-none">
              <input
                type="checkbox"
                name="agreeMarketing"
                checked={form.agreeMarketing}
                onChange={handleChange}
                className="mt-0.5 h-4.5 w-4.5 accent-[#005eb8] border-gray-300 rounded cursor-pointer"
              />
              <span>
                Maxpo Exhibitions may contact you from time to time with updates and information about our
                events, products and services. We may pass your details to sponsors and exhibitors at this event.
              </span>
            </label>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#005eb8] text-[#ffffff] hover:bg-[#004f99] font-display uppercase tracking-wider py-4 px-6 rounded-full font-bold leading-none border-0 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-75 disabled:cursor-not-allowed text-center"
          >
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      )}
    </div>
  );
}
