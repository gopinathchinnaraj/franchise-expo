"use client"

import { useState } from "react"
import { Mail, Phone, Building, User, Calendar, Users, Check, AlertCircle } from "lucide-react"

export default function SpeakerApplicationForm() {
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
        // Clear error for this field
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
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            console.log("Form submitted:", formData)
            setIsSubmitted(true)

            // Reset form after successful submission
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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Speaker Application Form
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Take the stage and share your thought leadership and expertise with attendees and exhibitors.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    {/* Success Message */}
                    {isSubmitted && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-green-800 font-medium">Application Submitted!</p>
                                <p className="text-green-700 text-sm">
                                    Thank you for your interest. We will review your application and contact you soon.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {errors.submit && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <p className="text-red-800">{errors.submit}</p>
                        </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                        If you are interested in speaking, please fill out the form below and we will contact you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.fullName ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Full Name *"
                                />
                            </div>
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Company */}
                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
                                Company <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.company ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Company *"
                                />
                            </div>
                            {errors.company && (
                                <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.phone ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Phone *"
                                />
                            </div>
                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Email *"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Events */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Which event(s) are you interested in participating in? <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                {events.map((event) => (
                                    <label key={event} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                                        <input
                                            type="checkbox"
                                            checked={formData.events.includes(event)}
                                            onChange={() => handleCheckboxChange(event)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700">{event}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.events && (
                                <p className="mt-1 text-sm text-red-600">{errors.events}</p>
                            )}
                        </div>

                        {/* Target Audience */}
                        <div>
                            <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-700 mb-1">
                                Target Audience
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400" />
                                </div>
                                <select
                                    id="targetAudience"
                                    name="targetAudience"
                                    value={formData.targetAudience}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white"
                                >
                                    <option value="">Target Audience</option>
                                    <option value="Attendees">Attendees</option>
                                    <option value="Franchisors">Franchisors</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-lg transition transform hover:scale-[1.02] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                By submitting this form, you agree to be contacted by our team regarding your speaking application.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}