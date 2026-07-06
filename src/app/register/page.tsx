"use client";

import { useState } from "react"
import PageBanner from "@/components/PageBanner"

export default function SpeakerApplication() {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        phone: "",
        email: "",
        events: [] as string[],
        targetAudience: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const events = [
        "International Franchise Expo",
        "Franchise Expo South",
        "Franchise Expo Cincinnati",
        "Franchise Expo West",
        "Franchise Expo Dallas",
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" })
        }
    }

    const handleCheckboxChange = (event: string) => {
        setFormData(prev => {
            const events = prev.events.includes(event)
                ? prev.events.filter(e => e !== event)
                : [...prev.events, event]
            return { ...prev, events }
        })
        if (errors.events) {
            setErrors({ ...errors, events: "" })
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required"
        }
        if (!formData.company.trim()) {
            newErrors.company = "Company name is required"
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required"
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }
        if (formData.events.length === 0) {
            newErrors.events = "Please select at least one event"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log("Form submitted:", formData)
            setIsSubmitted(true)

            setTimeout(() => {
                setFormData({
                    fullName: "",
                    company: "",
                    phone: "",
                    email: "",
                    events: [],
                    targetAudience: "",
                })
                setIsSubmitted(false)
            }, 5000)
        } catch (error) {
            console.error("Error submitting form:", error)
            setErrors({ submit: "Failed to submit form. Please try again." })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <PageBanner title="Speaker Application Form"/>
            <div id="speaker-application-form" className="w-full max-w-[1200px] mx-auto px-5 max-md:px-4 max-sm:px-3 py-10 pb-15">

                {/* Main Content */}
                <main>
                    <div className="flex flex-wrap -mx-3.75">
                        <div className="flex-1 px-3.75 max-w-full">
                            <article className="bg-white">
                                <div className="text-base text-[#212121]">
                                    <p className="mb-5 text-base leading-relaxed text-[#212121]">Take the stage and share your thought leadership and expertise with attendees and exhibitors. If you are interested in speaking please fill out the&nbsp;form below and we will contact you.</p>

                                    <div className="mt-7.5">
                                        <form
                                            noValidate
                                            className="w-full bg-white p-6 max-sm:p-5 max-[480px]:p-4 border-0 rounded-none"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="w-full">
                                                <div className="flex flex-col gap-5">
                                                    <div className="w-full mb-0">
                                                        <div className="w-full">
                                                            <div className="w-full">
                                                                {/* Full Name */}
                                                                <div className="mb-5 w-full">
                                                                    <div className="flex flex-col gap-1.5">
                                                                        <div className="flex items-center gap-1">
                                                                            <span className="text-[18px] max-md:text-base max-sm:text-sm font-bold text-[#212121] leading-9 max-md:leading-7.5 max-sm:leading-[26px]">
                                                                                Full Name
                                                                            </span>
                                                                            <span className="text-red-500 font-bold text-[18px]">*</span>
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <input
                                                                                type="text"
                                                                                name="fullName"
                                                                                placeholder="Full Name *"
                                                                                value={formData.fullName}
                                                                                onChange={handleInputChange}
                                                                                className="w-full p-[15px] max-md:p-[12px_14px] max-sm:p-[10px_12px] bg-[#f5f8f9] border-0 rounded-none text-base max-md:text-[15px] max-sm:text-sm font-normal text-[#212121] leading-7 transition-all duration-300 outline-none focus:bg-[#edf2f7] focus:ring-inset focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-400"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        {errors.fullName && (
                                                                            <span className="block text-red-500 text-sm mt-1 font-medium">{errors.fullName}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Company */}
                                                                <div className="mb-5 w-full">
                                                                    <div className="flex flex-col gap-1.5">
                                                                        <div className="flex items-center gap-1">
                                                                            <span className="text-[18px] max-md:text-base max-sm:text-sm font-bold text-[#212121] leading-9 max-md:leading-7.5 max-sm:leading-[26px]">
                                                                                Company
                                                                            </span>
                                                                            <span className="text-red-500 font-bold text-[18px]">*</span>
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <input
                                                                                type="text"
                                                                                name="company"
                                                                                placeholder="Company *"
                                                                                value={formData.company}
                                                                                onChange={handleInputChange}
                                                                                className="w-full p-[15px] max-md:p-[12px_14px] max-sm:p-[10px_12px] bg-[#f5f8f9] border-0 rounded-none text-base max-md:text-[15px] max-sm:text-sm font-normal text-[#212121] leading-7 transition-all duration-300 outline-none focus:bg-[#edf2f7] focus:ring-inset focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-400"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        {errors.company && (
                                                                            <span className="block text-red-500 text-sm mt-1 font-medium">{errors.company}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Phone */}
                                                                <div className="mb-5 w-full">
                                                                    <div className="flex flex-col gap-1.5">
                                                                        <div className="flex items-center gap-1">
                                                                            <span className="text-[18px] max-md:text-base max-sm:text-sm font-bold text-[#212121] leading-9 max-md:leading-7.5 max-sm:leading-[26px]">
                                                                                Phone
                                                                            </span>
                                                                            <span className="text-red-500 font-bold text-[18px]">*</span>
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <input
                                                                                type="text"
                                                                                name="phone"
                                                                                placeholder="Phone *"
                                                                                value={formData.phone}
                                                                                onChange={handleInputChange}
                                                                                className="w-full p-[15px] max-md:p-[12px_14px] max-sm:p-[10px_12px] bg-[#f5f8f9] border-0 rounded-none text-base max-md:text-[15px] max-sm:text-sm font-normal text-[#212121] leading-7 transition-all duration-300 outline-none focus:bg-[#edf2f7] focus:ring-inset focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-400"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        {errors.phone && (
                                                                            <span className="block text-red-500 text-sm mt-1 font-medium">{errors.phone}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Email */}
                                                                <div className="mb-5 w-full">
                                                                    <div className="flex flex-col gap-1.5">
                                                                        <div className="flex items-center gap-1">
                                                                            <span className="text-[18px] max-md:text-base max-sm:text-sm font-bold text-[#212121] leading-9 max-md:leading-7.5 max-sm:leading-[26px]">
                                                                                Email
                                                                            </span>
                                                                            <span className="text-red-500 font-bold text-[18px]">*</span>
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <input
                                                                                type="email"
                                                                                name="email"
                                                                                placeholder="Email *"
                                                                                value={formData.email}
                                                                                onChange={handleInputChange}
                                                                                className="w-full p-[15px] max-md:p-[12px_14px] max-sm:p-[10px_12px] bg-[#f5f8f9] border-0 rounded-none text-base max-md:text-[15px] max-sm:text-sm font-normal text-[#212121] leading-7 transition-all duration-300 outline-none focus:bg-[#edf2f7] focus:ring-inset focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-400"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        {errors.email && (
                                                                            <span className="block text-red-500 text-sm mt-1 font-medium">{errors.email}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Events Checkbox */}
                                                                <div className="mb-5 w-full mt-2.5">
                                                                    <fieldset className="flex flex-col gap-2.5">
                                                                        <legend className="flex items-center gap-1">
                                                                            <span className="text-[18px] max-md:text-base max-sm:text-sm font-bold text-[#212121] leading-9 max-md:leading-7.5 max-sm:leading-[26px]">Which event(s) are you interested in participating in?</span>
                                                                        </legend>
                                                                        <div className="w-full">
                                                                            <div className="flex flex-col gap-2 bg-[#f5f8f9] p-4 max-md:p-3 max-sm:p-2.5">
                                                                                {events.map((event) => (
                                                                                    <div key={event} className="flex items-center py-1 max-md:py-0.75">
                                                                                        <div className="flex items-center gap-3 w-full cursor-pointer">
                                                                                            <span className="flex-1 text-base max-sm:text-sm text-[#212121] font-normal">
                                                                                                <span className="ba-form-checkbox-title">{event}</span>
                                                                                            </span>
                                                                                            <label className="flex items-center gap-2 cursor-pointer relative pl-7 min-h-[24px]" aria-label={event}>
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    name="events[]"
                                                                                                    value={event}
                                                                                                    checked={formData.events.includes(event)}
                                                                                                    onChange={() => handleCheckboxChange(event)}
                                                                                                    className="absolute opacity-0 w-0 h-0"
                                                                                                />
                                                                                                <span className={`absolute left-0 top-0 w-5 h-5 bg-white border-2 border-gray-300 rounded transition-all duration-200 hover:border-[#fbbf24] ${formData.events.includes(event) ? "bg-[#fbbf24] border-[#fbbf24] after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-[#212121] after:text-sm after:font-bold" : ""}`}></span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            {errors.events && (
                                                                                <span className="block text-red-500 text-sm mt-1 font-medium">{errors.events}</span>
                                                                            )}
                                                                        </div>
                                                                    </fieldset>
                                                                </div>

                                                                {/* Target Audience */}
                                                                <div className="mb-5 w-full">
                                                                    <div className="flex flex-col gap-1.5">
                                                                        <div className="flex items-center gap-1">
                                                                            <span className="text-[18px] max-md:text-base max-sm:text-sm font-bold text-[#212121] leading-9 max-md:leading-7.5 max-sm:leading-[26px]">
                                                                                Target audience
                                                                            </span>
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <select
                                                                                name="targetAudience"
                                                                                value={formData.targetAudience}
                                                                                onChange={handleInputChange}
                                                                                className="w-full p-[15px] max-md:p-[12px_14px] max-sm:p-[10px_12px] bg-[#f5f8f9] border-0 rounded-none text-base max-md:text-[15px] max-sm:text-sm font-normal text-[#212121] leading-7 transition-all duration-300 outline-none focus:bg-[#edf2f7] focus:ring-inset focus:ring-2 focus:ring-[#fbbf24] appearance-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2212%22_height=%2212%22_viewBox=%220_0_12_12%22%3E%3Cpath_fill=%22%236b7280%22_d=%22M6_8L1_3h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_15px_center] pr-10 cursor-pointer"
                                                                            >
                                                                                <option hidden value="">Target audience</option>
                                                                                <option value="Attendees">Attendees</option>
                                                                                <option value="Franchisors">Franchisors</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Submit Button */}
                                                    <div className="w-full mb-0">
                                                        <div className="w-full">
                                                            <div className="w-full">
                                                                <div className="mt-5">
                                                                    <div className="flex justify-start max-md:justify-center">
                                                                        <div className="w-full">
                                                                            <button
                                                                                type="submit"
                                                                                className="inline-flex items-center justify-center py-5 px-[60px] max-md:p-[16px_40px] max-sm:p-[14px_24px] bg-[#fbbf24] text-white text-[18px] max-md:text-base max-sm:text-[15px] font-bold leading-none border-0 rounded-none cursor-pointer transition-all duration-300 text-decoration-none min-w-[200px] max-md:min-w-[160px] max-sm:min-w-[140px] max-md:w-full hover:bg-[#212121] hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                                                                disabled={isSubmitting}
                                                                            >
                                                                                <span>
                                                                                    {isSubmitting ? "Submitting..." : "Submit"}
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Success Message */}
                                                    {isSubmitted && (
                                                        <div className="mt-5 p-[16px_20px] bg-green-50 border border-green-300 rounded-none text-green-800 font-medium">
                                                            <p className="margin-0 text-base">Thank you! Your application has been submitted successfully.</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}