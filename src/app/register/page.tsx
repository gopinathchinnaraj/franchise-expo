"use client"

import { useState } from "react"
// @ts-ignore: Ignore CSS module type issues in this file
import "./register.css"
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
            <div id="speaker-application-form" className="single-event has-banner no-nav-logo white-header event--ife">
                {/* Banner */}


                {/* Main Content */}
                <main>
                    <div className="row">
                        <div className="main-content column">
                            <article className="com-content-article item-page">
                                <div className="com-content-article__body">
                                    <p>Take the stage and share your thought leadership and expertise with attendees and exhibitors. If you are interested in speaking please fill out the&nbsp;form below and we will contact you.</p>

                                    <div className="com-baforms-wrapper">
                                        <form
                                            noValidate
                                            className="ba-form-12 fields-icons-flex-start progress-navigation-style"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="ba-form-page">
                                                <div className="ba-page-items">
                                                    <div className="ba-form-row">
                                                        <div className="ba-form-column-wrapper">
                                                            <div className="span12 ba-form-column">
                                                                {/* Full Name */}
                                                                <div className="ba-form-field-item ba-form-input-field">
                                                                    <div className="ba-input-wrapper">
                                                                        <div className="ba-field-label-wrapper">
                                                                            <span className="ba-input-label-wrapper" id="label-125">
                                                                                Full Name
                                                                            </span>
                                                                            <span className="required-star">*</span>
                                                                        </div>
                                                                        <div className="ba-field-container">
                                                                            <input
                                                                                type="text"
                                                                                name="fullName"
                                                                                placeholder="Full Name *"
                                                                                value={formData.fullName}
                                                                                onChange={handleInputChange}
                                                                                required
                                                                                data-field-id="baform-1"
                                                                            />
                                                                        </div>
                                                                        {errors.fullName && (
                                                                            <span className="error-message">{errors.fullName}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Company */}
                                                                <div className="ba-form-field-item ba-form-input-field">
                                                                    <div className="ba-input-wrapper">
                                                                        <div className="ba-field-label-wrapper">
                                                                            <span className="ba-input-label-wrapper" id="label-126">
                                                                                Company
                                                                            </span>
                                                                            <span className="required-star">*</span>
                                                                        </div>
                                                                        <div className="ba-field-container">
                                                                            <input
                                                                                type="text"
                                                                                name="company"
                                                                                placeholder="Company *"
                                                                                value={formData.company}
                                                                                onChange={handleInputChange}
                                                                                required
                                                                                data-field-id="baform-2"
                                                                            />
                                                                        </div>
                                                                        {errors.company && (
                                                                            <span className="error-message">{errors.company}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Phone */}
                                                                <div className="ba-form-field-item ba-form-input-field">
                                                                    <div className="ba-input-wrapper">
                                                                        <div className="ba-field-label-wrapper">
                                                                            <span className="ba-input-label-wrapper" id="label-129">
                                                                                Phone
                                                                            </span>
                                                                            <span className="required-star">*</span>
                                                                        </div>
                                                                        <div className="ba-field-container">
                                                                            <input
                                                                                type="text"
                                                                                name="phone"
                                                                                placeholder="Phone *"
                                                                                value={formData.phone}
                                                                                onChange={handleInputChange}
                                                                                required
                                                                                data-field-id="baform-7"
                                                                            />
                                                                        </div>
                                                                        {errors.phone && (
                                                                            <span className="error-message">{errors.phone}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Email */}
                                                                <div className="ba-form-field-item ba-form-input-field">
                                                                    <div className="ba-input-wrapper">
                                                                        <div className="ba-field-label-wrapper">
                                                                            <span className="ba-input-label-wrapper" id="label-127">
                                                                                Email
                                                                            </span>
                                                                            <span className="required-star">*</span>
                                                                        </div>
                                                                        <div className="ba-field-container">
                                                                            <input
                                                                                type="email"
                                                                                name="email"
                                                                                placeholder="Email *"
                                                                                value={formData.email}
                                                                                onChange={handleInputChange}
                                                                                required
                                                                                data-validation="email"
                                                                                data-field-id="baform-3"
                                                                            />
                                                                        </div>
                                                                        {errors.email && (
                                                                            <span className="error-message">{errors.email}</span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Events Checkbox */}
                                                                <div className="ba-form-field-item ba-form-checkbox-field show-label">
                                                                    <fieldset className="ba-input-wrapper">
                                                                        <legend className="ba-field-label-wrapper">
                                                                            <span className="ba-input-label-wrapper">Which event(s) are you interested in participating in?</span>
                                                                        </legend>
                                                                        <div className="ba-field-container">
                                                                            <div className="ba-form-checkbox-group-wrapper">
                                                                                {events.map((event) => (
                                                                                    <div key={event} className="ba-form-checkbox-wrapper last-row-checkbox-wrapper">
                                                                                        <div className="ba-checkbox-wrapper">
                                                                                            <span className="ba-checkbox-title">
                                                                                                <span className="ba-form-checkbox-title">{event}</span>
                                                                                            </span>
                                                                                            <label className="ba-form-checkbox" aria-label={event}>
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    name="events[]"
                                                                                                    value={event}
                                                                                                    checked={formData.events.includes(event)}
                                                                                                    onChange={() => handleCheckboxChange(event)}
                                                                                                    data-field-id="baform-11"
                                                                                                />
                                                                                                <span></span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            {errors.events && (
                                                                                <span className="error-message">{errors.events}</span>
                                                                            )}
                                                                        </div>
                                                                    </fieldset>
                                                                </div>

                                                                {/* Target Audience */}
                                                                <div className="ba-form-field-item ba-form-dropdown-field show-label">
                                                                    <div className="ba-input-wrapper">
                                                                        <div className="ba-field-label-wrapper">
                                                                            <span className="ba-input-label-wrapper" id="label-132">
                                                                                Target audience
                                                                            </span>
                                                                        </div>
                                                                        <div className="ba-field-container">
                                                                            <select
                                                                                name="targetAudience"
                                                                                value={formData.targetAudience}
                                                                                onChange={handleInputChange}
                                                                                data-field-id="baform-10"
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
                                                    <div className="ba-form-row">
                                                        <div className="ba-form-column-wrapper">
                                                            <div className="span12 ba-form-column">
                                                                <div className="ba-form-field-item ba-form-submit-field">
                                                                    <div className="ba-form-submit-wrapper">
                                                                        <div className="ba-form-submit-btn-wrapper">
                                                                            <button
                                                                                type="submit"
                                                                                className="ba-form-submit-btn"
                                                                                disabled={isSubmitting}
                                                                            >
                                                                                <span className="ba-form-submit-title">
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
                                                        <div className="ba-form-success-message">
                                                            <p>Thank you! Your application has been submitted successfully.</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="ba-form-footer">
                                                <input type="hidden" name="form-id" value="12" />
                                                <input type="hidden" name="task" value="form.sendMessage" />
                                                <input type="hidden" name="submit-btn" value="0" />
                                                <input type="hidden" name="page-title" value="Speaker Application Form" />
                                                <input type="hidden" name="page-url" value="/ife/attendees/speaker-application-form" />
                                                <input type="hidden" name="page-id" value="323" />
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