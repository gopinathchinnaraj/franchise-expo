// src/app/register/forms/DelegateForm.tsx
"use client";

import React, { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";
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

interface AdditionalDelegate {
  fullName: string;
  jobTitle: string;
  email: string;
}

interface DelegateFormProps {
  passType?: "individual" | "group";
  onClose?: () => void;
}

const labelClass = "block text-sm font-semibold text-[#011b2e] mb-1.5 font-body";
const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/20 focus:border-[#005eb8] transition-all font-body text-sm bg-white";

export default function DelegateForm({ passType = "individual", onClose }: DelegateFormProps) {
  const { utmData, campaign } = useUTMData();
  
  const minQty = passType === "group" ? 2 : 1;
  const [quantity, setQuantity] = useState(minQty);

  const [form, setForm] = useState({
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
  });

  const [additionalDelegates, setAdditionalDelegates] = useState<AdditionalDelegate[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  // Synchronize additional delegates array size when quantity changes
  useEffect(() => {
    const requiredSize = quantity - 1;
    if (requiredSize < 0) return;
    
    setAdditionalDelegates((prev) => {
      if (prev.length < requiredSize) {
        // Add new empty delegates
        const diff = requiredSize - prev.length;
        const newItems = Array.from({ length: diff }, () => ({
          fullName: "",
          jobTitle: "",
          email: "",
        }));
        return [...prev, ...newItems];
      } else if (prev.length > requiredSize) {
        // Remove excess delegates
        return prev.slice(0, requiredSize);
      }
      return prev;
    });
  }, [quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAdditionalChange = (idx: number, field: keyof AdditionalDelegate, value: string) => {
    setAdditionalDelegates((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
    // Clear dynamic error key if any
    setErrors((prev) => ({ ...prev, [`delegate_${idx}_${field}`]: "" }));
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
    
    if (form.country === "Select Country") next.country = "Please select a country";
    if (form.industry === "Select Industry") next.industry = "Please select an industry";
    if (!form.agreeTerms) next.agreeTerms = "You must accept the Terms and Conditions";

    // Validate additional delegates
    additionalDelegates.forEach((del, idx) => {
      if (!del.fullName.trim()) {
        next[`delegate_${idx}_fullName`] = `Delegate ${idx + 2} Full Name is required`;
      }
      if (!del.jobTitle.trim()) {
        next[`delegate_${idx}_jobTitle`] = `Delegate ${idx + 2} Job Title is required`;
      }
      if (!del.email.trim()) {
        next[`delegate_${idx}_email`] = `Delegate ${idx + 2} Email is required`;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(del.email)) {
        next[`delegate_${idx}_email`] = "Enter a valid email address";
      }
    });

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Construct detailed message listing all delegates
    let delegateDetails = `Primary Delegate: ${form.fullName} (${form.jobTitle}) - ${form.workEmail}`;
    additionalDelegates.forEach((del, idx) => {
      delegateDetails += `\nDelegate ${idx + 2}: ${del.fullName} (${del.jobTitle}) - ${del.email}`;
    });

    const payload = {
      email: form.workEmail,
      formType: "visitor-registration", // matches VISITOR type
      name: form.fullName,
      company: form.companyName,
      phone: `${form.phoneCode} ${form.phone}`.trim(),
      country: form.country,
      jobTitle: form.jobTitle,
      message: `Pass Type: ${passType === "group" ? "Group Pass" : "Individual Pass"}. Quantity: ${quantity}. Industry: ${form.industry}. \n${delegateDetails}\n\nMessage: ${form.message}`,
      
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
    } catch (err: any) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl relative p-8 max-sm:p-6 shadow-xl border border-gray-100 max-h-[85vh] overflow-y-auto no-scrollbar">
      {/* Modal Close Button */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1 bg-gray-50 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="mb-6 pr-8">
        <h3 className="font-display text-2xl font-bold text-[#011b2e]">
          {passType === "group" ? "Group Delegate Pass Registration" : "Individual Pass Registration"}
        </h3>
        <p className="font-body text-xs text-[#666666] mt-1">
          {passType === "group" 
            ? "Register multiple attendees. Discounted group rates will apply." 
            : "Complete your credentials to access the VIP Franchise Summit."}
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto mb-4">
            <svg className="w-8 h-8 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display text-xl font-bold text-[#011b2e]">Registration Received</p>
          <p className="font-body text-sm text-[#666666] mt-2 leading-relaxed max-w-md mx-auto">
            Thank you! Your Delegate Pass registration has been received. Our relations team will verify details and reach out to complete ticketing.
          </p>
          {onClose && (
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#005eb8] text-white rounded-full font-body text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Main Delegate Details */}
          <div className="space-y-4">
            {passType === "group" && (
              <h4 className="font-display text-xs font-bold text-[#005eb8] uppercase tracking-wider border-b border-gray-100 pb-1">
                Primary Attendee Details
              </h4>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="delegate-fullName" className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="delegate-fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                className={`${inputClass} ${errors.fullName ? "border-red-400 focus:ring-red-200" : ""}`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
            </div>

            {/* Job Title + Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="delegate-jobTitle" className={labelClass}>
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="delegate-jobTitle"
                  name="jobTitle"
                  type="text"
                  placeholder="e.g. Director, Operations"
                  value={form.jobTitle}
                  onChange={handleChange}
                  className={`${inputClass} ${errors.jobTitle ? "border-red-400 focus:ring-red-200" : ""}`}
                />
                {errors.jobTitle && <p className="text-red-500 text-xs mt-1 font-medium">{errors.jobTitle}</p>}
              </div>

              <div>
                <label htmlFor="delegate-companyName" className={labelClass}>
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="delegate-companyName"
                  name="companyName"
                  type="text"
                  placeholder="Your organization"
                  value={form.companyName}
                  onChange={handleChange}
                  className={`${inputClass} ${errors.companyName ? "border-red-400 focus:ring-red-200" : ""}`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.companyName}</p>}
              </div>
            </div>

            {/* Work Email + Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="delegate-workEmail" className={labelClass}>
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="delegate-workEmail"
                  name="workEmail"
                  type="email"
                  placeholder="you@company.com"
                  value={form.workEmail}
                  onChange={handleChange}
                  className={`${inputClass} ${errors.workEmail ? "border-red-400 focus:ring-red-200" : ""}`}
                />
                {errors.workEmail && <p className="text-red-500 text-xs mt-1 font-medium">{errors.workEmail}</p>}
              </div>

              <div>
                <label htmlFor="delegate-phone" className={labelClass}>
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
                    id="delegate-phone"
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
                <label htmlFor="delegate-country" className={labelClass}>
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="delegate-country"
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
                <label htmlFor="delegate-industry" className={labelClass}>
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  id="delegate-industry"
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
            </div>
          </div>

          {/* Quantity Stepper (Mockup style full width stepper) */}
          <div>
            <label className={labelClass}>Quantity <span className="text-red-500">*</span></label>
            <div className="flex w-full items-center rounded-lg border border-gray-300 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(minQty, q - 1))}
                className="px-5 py-3.5 bg-[#f8fafc] text-gray-600 font-bold hover:bg-gray-100 border-r border-gray-300 cursor-pointer focus:outline-none select-none transition-all"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="flex-1 text-center font-body text-sm font-semibold text-gray-900 select-none py-3">
                {quantity}
              </div>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-5 py-3.5 bg-[#f8fafc] text-gray-600 font-bold hover:bg-gray-100 border-l border-gray-300 cursor-pointer focus:outline-none select-none transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {passType === "group" && (
              <p className="text-[11px] text-[#e05a0a] font-medium mt-1">
                Group Pass requires a minimum of 2 delegates.
              </p>
            )}
          </div>

          {/* Additional Delegate Inputs */}
          {additionalDelegates.map((del, idx) => (
            <div key={idx} className="space-y-4 pt-4 border-t border-gray-100 bg-[#f8fafc] p-4 rounded-xl">
              <h4 className="font-display text-xs font-bold text-[#005eb8] uppercase tracking-wider">
                Attendee {idx + 2} Details
              </h4>
              
              {/* Full Name */}
              <div>
                <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Enter attendee's full name"
                  value={del.fullName}
                  onChange={(e) => handleAdditionalChange(idx, "fullName", e.target.value)}
                  className={`${inputClass} ${errors[`delegate_${idx}_fullName`] ? "border-red-400" : ""}`}
                />
                {errors[`delegate_${idx}_fullName`] && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors[`delegate_${idx}_fullName`]}</p>
                )}
              </div>

              {/* Job Title + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Job Title <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Manager"
                    value={del.jobTitle}
                    onChange={(e) => handleAdditionalChange(idx, "jobTitle", e.target.value)}
                    className={`${inputClass} ${errors[`delegate_${idx}_jobTitle`] ? "border-red-400" : ""}`}
                  />
                  {errors[`delegate_${idx}_jobTitle`] && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors[`delegate_${idx}_jobTitle`]}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={del.email}
                    onChange={(e) => handleAdditionalChange(idx, "email", e.target.value)}
                    className={`${inputClass} ${errors[`delegate_${idx}_email`] ? "border-red-400" : ""}`}
                  />
                  {errors[`delegate_${idx}_email`] && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors[`delegate_${idx}_email`]}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Message */}
          <div>
            <label htmlFor="delegate-message" className={labelClass}>
              Message / Notes
            </label>
            <textarea
              id="delegate-message"
              name="message"
              rows={3}
              placeholder="Tell us a bit about your group or special requirements..."
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
                Maxpo Exhibitions may contact you from time to time with updates and information about our events, products and services that may be of interest. We may also pass your details to carefully selected third parties and to sponsors and exhibitors at this event. Please see our Privacy Policy for full details.
              </span>
            </label>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#005eb8] text-[#ffffff] hover:bg-[#004f99] font-display uppercase tracking-wider py-4 px-6 rounded-full font-bold leading-none border-0 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-75 disabled:cursor-not-allowed text-center"
          >
            {status === "submitting" ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      )}
    </div>
  );
}
