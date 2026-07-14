// src/app/register/forms/EnquiryForm.tsx
"use client";

import { useState } from "react";
import { useUTMData } from "@/hooks/useUTMTracker";
import { submitContactForm, PROJECT_ID_VAR } from "@/lib/graphql-client";

const INDUSTRY_OPTIONS = [
  "Select Industry",
  "IT / Software / Technology",
  "BFSI (Banking, Financial Services & Insurance)",
  "Manufacturing & Engineering",
  "Healthcare & Life Sciences",
  "Retail & E-commerce",
  "Telecom",
  "Automotive",
  "Pharmaceuticals",
  "Consulting & Professional Services",
  "Energy & Utilities",
  "Media & Entertainment",
  "Government / Public Sector",
  "Other",
];

const REQUEST_TYPE_OPTIONS = [
  "Select Request Type",
  "Sponsorship Enquiry",
  "Exhibiting Enquiry",
  "Speaking Opportunity",
  "Delegate Registration",
  "Media Partnership",
  "General Enquiry",
];

const PHONE_CODES = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+65", flag: "🇸🇬" },
];

const initialFormState = {
  fullName: "",
  email: "",
  phoneCode: "+1",
  phone: "",
  company: "",
  jobTitle: "",
  industry: INDUSTRY_OPTIONS[0],
  requestType: REQUEST_TYPE_OPTIONS[0],
  message: "",
};

const labelClass = "block text-sm font-semibold text-[#011b2e] mb-1.5 font-body";
const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/20 focus:border-[#005eb8] transition-all font-body text-sm bg-white";

export default function EnquiryForm() {
  const { utmData, campaign } = useUTMData();
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.company.trim()) next.company = "Company name is required";
    if (form.industry === INDUSTRY_OPTIONS[0]) next.industry = "Please select an industry";
    if (form.requestType === REQUEST_TYPE_OPTIONS[0]) next.requestType = "Please select a request type";
    if (!form.message.trim()) next.message = "Please add a short message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const payload = {
      email: form.email,
      formType: "contact-us", // maps to leadType OTHER
      name: form.fullName,
      company: form.company,
      phone: `${form.phoneCode} ${form.phone}`.trim(),
      jobTitle: form.jobTitle,
      message: `Request Type: ${form.requestType}. Industry: ${form.industry}. Message: ${form.message}`,
      
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
      const restUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '') + '/api';
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
          Register Your Interest
        </h3>
        <p className="font-body text-xs text-[#666666] mt-1">
          Fill in your details below and our team will reach out to you shortly.
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto mb-4">
            <svg className="w-8 h-8 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display text-xl font-bold text-[#011b2e]">Thank You!</p>
          <p className="font-body text-sm text-[#666666] mt-2 leading-relaxed">
            Your enquiry has been submitted. Our team will contact you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="enquiry-fullName" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="enquiry-fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className={`${inputClass} ${errors.fullName ? "border-red-400" : ""}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="enquiry-email" className={labelClass}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="enquiry-phone" className={labelClass}>
                Phone Number <span className="text-red-500">*</span>
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
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  placeholder="000 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
            </div>
          </div>

          {/* Company + Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="enquiry-company" className={labelClass}>
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="enquiry-company"
                name="company"
                type="text"
                placeholder="Your organization"
                value={form.company}
                onChange={handleChange}
                className={`${inputClass} ${errors.company ? "border-red-400" : ""}`}
              />
              {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company}</p>}
            </div>

            <div>
              <label htmlFor="enquiry-jobTitle" className={labelClass}>
                Job Title
              </label>
              <input
                id="enquiry-jobTitle"
                name="jobTitle"
                type="text"
                placeholder="e.g. Director, Operations"
                value={form.jobTitle}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Industry + Request Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="enquiry-industry" className={labelClass}>
                Select Industry <span className="text-red-500">*</span>
              </label>
              <select
                id="enquiry-industry"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className={`${inputClass} bg-white cursor-pointer ${errors.industry ? "border-red-400" : ""}`}
              >
                {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.industry && <p className="text-red-500 text-xs mt-1 font-medium">{errors.industry}</p>}
            </div>

            <div>
              <label htmlFor="enquiry-requestType" className={labelClass}>
                Request Type <span className="text-red-500">*</span>
              </label>
              <select
                id="enquiry-requestType"
                name="requestType"
                value={form.requestType}
                onChange={handleChange}
                className={`${inputClass} bg-white cursor-pointer ${errors.requestType ? "border-red-400" : ""}`}
              >
                {REQUEST_TYPE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.requestType && <p className="text-red-500 text-xs mt-1 font-medium">{errors.requestType}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="enquiry-message" className={labelClass}>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              placeholder="Tell us a bit about your enquiry..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none ${errors.message ? "border-red-400" : ""}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
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
            {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
