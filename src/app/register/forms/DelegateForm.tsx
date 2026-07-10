// src/app/register/forms/DelegateForm.tsx
"use client";

import { useState } from "react";
// @ts-ignore
import { getNames } from "country-list";
import { useUTMData } from "@/hooks/useUTMTracker";
import { submitContactForm, PROJECT_ID_VAR } from "@/lib/graphql-client";

const HEAR_ABOUT_OPTIONS = [
  "How did you hear about us?",
  "LinkedIn",
  "Email Invitation",
  "Google Search",
  "Referral / Word of Mouth",
  "Industry Association",
  "Other",
];

const COUNTRY_OPTIONS = ["Select Country", ...getNames().sort()];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  country: "Select Country",
  city: "",
  hearAbout: HEAR_ABOUT_OPTIONS[0],
  dietaryRequirements: "",
  agreeTerms: false,
};

const labelClass = "block text-sm font-semibold text-[#011b2e] mb-1.5 font-body";
const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1cb7cf]/50 focus:border-[#1cb7cf] transition-all font-body text-sm";

export default function DelegateForm() {
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
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.company.trim()) next.company = "Company name is required";
    if (!form.designation.trim()) next.designation = "Designation is required";
    if (form.country === "Select Country") next.country = "Please select a country";
    if (!form.city.trim()) next.city = "City is required";
    if (!form.agreeTerms) next.agreeTerms = "Please accept the terms to continue";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const payload = {
      email: form.email,
      formType: "visitor-registration", // maps to leadType VISITOR
      name: form.fullName,
      company: form.company,
      phone: form.phone,
      country: form.country,
      city: form.city,
      jobTitle: form.designation,
      message: `Pass Type: Individual Pass Delegate. How did you hear: ${form.hearAbout}. Dietary Requirements: ${form.dietaryRequirements}`,
      
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
          Individual Pass Registration
        </h3>
        <p className="font-body text-xs text-[#666666] mt-1">
          Provide your credentials below to register as a Summit Delegate.
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
          <p className="font-body text-sm text-[#666666] mt-2 leading-relaxed">
            Thank you! Your Individual Pass request has been received. Our team will verify and send your confirmation email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
              className={`${inputClass} ${errors.fullName ? "border-red-400" : ""}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="delegate-email" className={labelClass}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="delegate-email"
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
              <label htmlFor="delegate-phone" className={labelClass}>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="delegate-phone"
                name="phone"
                type="tel"
                placeholder="+1 000 000 0000"
                value={form.phone}
                onChange={handleChange}
                className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
            </div>
          </div>

          {/* Company + Designation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="delegate-company" className={labelClass}>
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="delegate-company"
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
              <label htmlFor="delegate-designation" className={labelClass}>
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                id="delegate-designation"
                name="designation"
                type="text"
                placeholder="e.g. Director, Operations"
                value={form.designation}
                onChange={handleChange}
                className={`${inputClass} ${errors.designation ? "border-red-400" : ""}`}
              />
              {errors.designation && <p className="text-red-500 text-xs mt-1 font-medium">{errors.designation}</p>}
            </div>
          </div>

          {/* Country + City */}
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
              <label htmlFor="delegate-city" className={labelClass}>
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="delegate-city"
                name="city"
                type="text"
                placeholder="Enter your city"
                value={form.city}
                onChange={handleChange}
                className={`${inputClass} ${errors.city ? "border-red-400" : ""}`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1 font-medium">{errors.city}</p>}
            </div>
          </div>

          {/* How did you hear about us */}
          <div>
            <label htmlFor="delegate-hearAbout" className={labelClass}>
              How did you hear about us?
            </label>
            <select
              id="delegate-hearAbout"
              name="hearAbout"
              value={form.hearAbout}
              onChange={handleChange}
              className={`${inputClass} bg-white cursor-pointer`}
            >
              {HEAR_ABOUT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Dietary Requirements */}
          <div>
            <label htmlFor="delegate-dietaryRequirements" className={labelClass}>
              Dietary Requirements / Accessibility Needs
            </label>
            <textarea
              id="delegate-dietaryRequirements"
              name="dietaryRequirements"
              rows={3}
              placeholder="Let us know of any special requirements (optional)"
              value={form.dietaryRequirements}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Terms checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 text-xs text-[#666666] leading-relaxed cursor-pointer select-none">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
                className="mt-0.5 h-4.5 w-4.5 accent-[#005eb8] border-gray-300 rounded cursor-pointer"
              />
              <span>
                I agree to the{" "}
                <a href="/terms" target="_blank" className="text-[#005eb8] underline hover:text-[#004f99] font-medium">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" target="_blank" className="text-[#005eb8] underline hover:text-[#004f99] font-medium">
                  Privacy Policy
                </a>
                . <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.agreeTerms && <p className="text-red-500 text-xs font-medium mt-1">{errors.agreeTerms}</p>}
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
            {status === "submitting" ? "Registering..." : "Register for Individual Pass"}
          </button>
        </form>
      )}
    </div>
  );
}
