"use client";

import PageBanner from "@/components/PageBanner";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function IFEUnplugged() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="IFE Unplugged"/>

            {/* ABOUT */}
            <section className="py-[100px] max-md:py-[70px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[70px] items-center">

                        {/* LEFT */}
                        <div className="content">
                            <h2 className="font-display text-[52px] max-lg:text-[42px] max-md:text-[34px] leading-[1.1] uppercase text-[#011b2e] mb-7">
                                About The Podcast
                            </h2>

                            <p className="text-[18px] max-md:text-base leading-[1.9] text-[#444444] mb-[22px]">
                                During the 2 day expo, MFV Expositions and Social Geek
                                will be recording 15-20 minute podcast interviews directly
                                from the show floor.
                            </p>

                            <p className="text-[18px] max-md:text-base leading-[1.9] text-[#444444] mb-[22px]">
                                Exhibitors and industry experts will share insights on
                                industry trends, franchise growth, expo experiences,
                                and inspiring brand stories.
                            </p>

                            <div className="my-[30px]">
                                <img
                                    src="https://www.franchiseexpo.com/images/ife/IFE-Unplugged/ife.webp"
                                    alt="IFE Unplugged"
                                    className="w-[170px] object-cover"
                                />
                            </div>

                            <div className="socialSection">
                                <p className="text-base font-semibold text-[#011b2e] mb-5">Follow us to listen to our podcast recordings</p>

                                <div className="flex items-center gap-[18px]">
                                    <a
                                        href="https://www.facebook.com/mfvexpo"
                                        target="_blank"
                                        className="w-14 h-14 rounded-full bg-[#011b2e] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#1ab7d0]"
                                    >
                                        <FaFacebookF />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/mfvexpo/"
                                        target="_blank"
                                        className="w-14 h-14 rounded-full bg-[#011b2e] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#1ab7d0]"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative overflow-hidden h-[620px] max-lg:min-h-[500px] max-md:min-h-[380px]">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb1AD77jEq0Y1GxlBb7wVOTvROV73Ke0RhA&s"
                                alt="Podcast"
                                className="w-full h-full object-cover block"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* CONTACT */}
            <section className="pb-[100px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">
                    <div className="bg-[#f3f3f3] p-[55px_70px] max-sm:p-[50px_24px]">

                        <h3 className="font-display text-[58px] max-sm:text-[34px] leading-none uppercase text-[#011b2e] mb-7">GET IN TOUCH</h3>

                        <p className="text-[22px] max-sm:text-base leading-[1.5] text-[#011b2e] font-medium m-0">
                            If you're interested in participating,
                            <br />
                            please reach out to{" "}
                            <a href="mailto:Linda.Thompson@comexposium.com" className="text-[#00539f] no-underline font-medium hover:underline">
                                Linda.Thompson@comexposium.com
                            </a>
                        </p>

                    </div>
                </div>
            </section>

        </main>
    );
}