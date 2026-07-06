"use client";

import Image from "next/image";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";

const contactCards = [
    {
        category: "Sales",
        title: "Request Exhibitor Info",
        name: "Justin Wood",
        role: "Senior Account Executive",
        email: "Justin.Wood@Comexposium.com",
        phone: "240.398.1385",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_307.jpg",
    },

    {
        category: "Marketing",
        title: "Attendee and Conference Info",
        name: "Linda Thompson",
        role: "Marketing Director",
        email: "Linda.Thompson@comexposium.com",
        phone: "201.881.1646",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_311.png",
    },

    {
        category: "Customer Relations",
        title: "Exhibitor Services and Operations",
        name: "Murphy Connolly",
        role: "Director of Operations & Services",
        email: "Murphy.Connolly@comexposium.com",
        phone: "631.335.5696",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_314.png",
    },
];

const events = [
    "International Franchise Expo",
    "Franchise Expo South",
    "Franchise Expo Cincinnati",
    "Franchise Expo Dallas",
    "Franchise Expo West",
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        phone: "",
        email: "",
        interests: [] as string[],
        comments: "",
    });

    const handleCheckboxChange = (event: string) => {
        setFormData((prev) => {
            const newInterests = prev.interests.includes(event)
                ? prev.interests.filter((item) => item !== event)
                : [...prev.interests, event];
            return { ...prev, interests: newInterests };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <main className="w-full bg-white overflow-hidden">
            {/* HERO */}
            <PageBanner title="Contact Us" />

            {/* CONTACT CARDS */}
            <section className="py-[35px] pb-[25px]">
                <div className="w-full max-w-[1180px] mx-auto px-4 max-sm:px-3">
                    <div className="flex flex-wrap gap-5 max-md:gap-4">
                        {contactCards.map((item, index) => (
                            <div key={index} className="w-[280px] max-lg:w-[calc(50%-10px)] max-md:w-full bg-white border border-[#ececec] overflow-hidden group">
                                <div className="relative w-full h-[205px] max-md:h-[240px] max-sm:h-[220px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-400 group-hover:scale-105"
                                    />
                                    <span className="absolute left-2 bottom-2 bg-black/45 text-white text-[10px] font-semibold p-[4px_8px]">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="p-2.5">
                                    <p className="text-[10px] font-bold text-[#111] mb-1 leading-normal">
                                        {item.title}
                                    </p>
                                    <h3 className="font-display text-[20px] max-md:text-[18px] leading-none uppercase text-[#111] mb-1">{item.name}</h3>
                                    <p className="text-[11px] text-[#333] mb-2.5">
                                        {item.role}
                                    </p>
                                    <div className="mb-3">
                                        <span className="block text-[10px] leading-[1.7] text-[#111] break-words">E: {item.email}</span>
                                        <span className="block text-[10px] leading-[1.7] text-[#111] break-words">T: {item.phone}</span>
                                    </div>
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="w-[calc(100%+20px)] -ml-2.5 -mr-2.5 -mb-2.5 h-[34px] bg-[#0068b3] text-white no-underline uppercase text-[10px] font-bold flex items-center justify-center transition-colors duration-300 hover:bg-[#00518d]"
                                    >
                                        Email Me
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="py-2.5 pb-[60px]">
                <div className="w-full max-w-[1180px] mx-auto px-4 max-sm:px-3">
                    <div className="bg-transparent p-0 block">
                        <div className="hidden">
                            <span>GET IN TOUCH</span>
                            <h2>We'd Love to Hear From You</h2>
                            <p>
                                Fill out the form and our team will get back to you within 24 hours.
                                Whether you're looking to exhibit, attend, or partner with us, we're here to help.
                            </p>
                        </div>

                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="w-full">
                                    <label className="hidden">Full Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        value={formData.fullName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, fullName: e.target.value })
                                        }
                                        className="w-full border border-[#e8e8e8] bg-[#f4f4f4] rounded-none px-3 text-xs text-[#111] outline-none focus:border-[#0068b3] focus:bg-white h-[38px] max-sm:h-[36px]"
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="hidden">Company *</label>
                                    <input
                                        type="text"
                                        placeholder="Company *"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                        className="w-full border border-[#e8e8e8] bg-[#f4f4f4] rounded-none px-3 text-xs text-[#111] outline-none focus:border-[#0068b3] focus:bg-white h-[38px] max-sm:h-[36px]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <div className="w-full">
                                    <label className="hidden">Phone *</label>
                                    <input
                                        type="tel"
                                        placeholder="Phone *"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        className="w-full border border-[#e8e8e8] bg-[#f4f4f4] rounded-none px-3 text-xs text-[#111] outline-none focus:border-[#0068b3] focus:bg-white h-[38px] max-sm:h-[36px]"
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="hidden">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full border border-[#e8e8e8] bg-[#f4f4f4] rounded-none px-3 text-xs text-[#111] outline-none focus:border-[#0068b3] focus:bg-white h-[38px] max-sm:h-[36px]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <label className="hidden">Which expos are you interested in?</label>
                                <div className="flex flex-col gap-1.5 mt-1">
                                    {events.map((event) => (
                                        <label key={event} className="flex items-center gap-2 text-[11px] text-[#111]">
                                            <input
                                                type="checkbox"
                                                checked={formData.interests.includes(event)}
                                                onChange={() => handleCheckboxChange(event)}
                                                className="w-3.5 h-3.5"
                                            />
                                            <span>{event}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full">
                                <label className="hidden">Do you have any comments?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Do you have any comments?"
                                    value={formData.comments}
                                    onChange={(e) =>
                                        setFormData({ ...formData, comments: e.target.value })
                                    }
                                    className="w-full border border-[#e8e8e8] bg-[#f4f4f4] rounded-none px-3 text-xs text-[#111] outline-none focus:border-[#0068b3] focus:bg-white h-[90px] max-sm:h-[80px] resize-y pt-2.5"
                                />
                            </div>

                            <button type="submit" className="w-20 h-7 border-none rounded-2xl bg-[#0068b3] text-white text-[10px] font-bold uppercase cursor-pointer mt-3 transition-colors duration-300 hover:bg-[#00518d]">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}