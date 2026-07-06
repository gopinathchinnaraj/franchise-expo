import PageBanner from "@/components/PageBanner";

export default function BusinessResourceCenter() {
    return (
        <main className="w-full">

            <PageBanner
                title="Business Resource"
            />

            <section className="py-[90px] max-md:py-[60px] max-sm:py-[40px]">
                <div className="max-w-[1280px] mx-auto px-6">

                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[50px] max-lg:gap-[30px] items-start mb-[70px]">

                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[0.88rem] max-md:text-[0.85rem] max-sm:text-[0.8rem] leading-[1.6] max-md:leading-[1.5] text-[#111] font-normal">
                                International Franchise Expo welcomes you to check out the
                                Business Resource Center! This area is dedicated to present
                                innovative services that will bring your business to the next level!
                            </p>

                            <p className="text-[0.88rem] max-md:text-[0.85rem] max-sm:text-[0.8rem] leading-[1.6] max-md:leading-[1.5] text-[#111] font-normal">
                                Walk the show floor and explore a range of business suppliers who
                                want to talk with YOU! Have strong conversations that will further
                                develop and fine tune your business. Whether you're looking to learn
                                more about strategy, network and form connections, or how to expand
                                your business, the business resource center will provide you with the
                                skills and knowledge needed to advance in the industry.
                            </p>
                        </div>

                        <div
                            className="h-[180px] max-lg:h-[160px] max-md:h-[140px] max-sm:h-[100px] bg-cover bg-center rounded-[2px]"
                            style={{
                                backgroundImage:
                                    "url('https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/The_Business_Resource_Center.webp')",
                            }}
                        />
                    </div>

                    <h2 className="font-display text-[2rem] max-lg:text-[2.2rem] max-md:text-[1.8rem] max-sm:text-[1.3rem] leading-none uppercase text-[#111] mb-[40px] max-md:mb-[30px] max-sm:mb-[25px]">
                        WHY VISIT THE BUSINESS RESOURCE CENTER?
                    </h2>

                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-2 gap-[20px] max-lg:gap-4 max-md:gap-3 max-sm:gap-2.5">

                        <div className="bg-[#27b8cf] h-[160px] max-lg:h-[140px] max-md:h-[120px] max-sm:h-[100px] p-[24px_20px] max-lg:p-[20px_16px] max-md:p-[16px_14px] max-sm:p-[12px_10px] flex flex-col justify-center rounded-sm transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(39,184,207,0.3)]">
                            <span className="font-display text-[2.2rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.3rem] font-bold text-white mb-2.5 max-md:mb-1.5 max-sm:mb-1">1</span>
                            <p className="text-[0.82rem] max-lg:text-[0.8rem] max-md:text-[0.72rem] max-sm:text-[0.65rem] leading-[1.4] max-md:leading-[1.3] max-sm:leading-[1.2] text-white font-medium m-0">
                                Form connections with suppliers and gather contacts
                            </p>
                        </div>

                        <div className="bg-[#27b8cf] h-[160px] max-lg:h-[140px] max-md:h-[120px] max-sm:h-[100px] p-[24px_20px] max-lg:p-[20px_16px] max-md:p-[16px_14px] max-sm:p-[12px_10px] flex flex-col justify-center rounded-sm transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(39,184,207,0.3)]">
                            <span className="font-display text-[2.2rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.3rem] font-bold text-white mb-2.5 max-md:mb-1.5 max-sm:mb-1">2</span>
                            <p className="text-[0.82rem] max-lg:text-[0.8rem] max-md:text-[0.72rem] max-sm:text-[0.65rem] leading-[1.4] max-md:leading-[1.3] max-sm:leading-[1.2] text-white font-medium m-0">
                                Discover how to be successful through the secrets of business strategy
                            </p>
                        </div>

                        <div className="bg-[#27b8cf] h-[160px] max-lg:h-[140px] max-md:h-[120px] max-sm:h-[100px] p-[24px_20px] max-lg:p-[20px_16px] max-md:p-[16px_14px] max-sm:p-[12px_10px] flex flex-col justify-center rounded-sm transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(39,184,207,0.3)]">
                            <span className="font-display text-[2.2rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.3rem] font-bold text-white mb-2.5 max-md:mb-1.5 max-sm:mb-1">3</span>
                            <p className="text-[0.82rem] max-lg:text-[0.8rem] max-md:text-[0.72rem] max-sm:text-[0.65rem] leading-[1.4] max-md:leading-[1.3] max-sm:leading-[1.2] text-white font-medium m-0">
                                Learn about how to successfully expand your business
                            </p>
                        </div>

                        <div className="bg-[#27b8cf] h-[160px] max-lg:h-[140px] max-md:h-[120px] max-sm:h-[100px] p-[24px_20px] max-lg:p-[20px_16px] max-md:p-[16px_14px] max-sm:p-[12px_10px] flex flex-col justify-center rounded-sm transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(39,184,207,0.3)]">
                            <span className="font-display text-[2.2rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.3rem] font-bold text-white mb-2.5 max-md:mb-1.5 max-sm:mb-1">4</span>
                            <p className="text-[0.82rem] max-lg:text-[0.8rem] max-md:text-[0.72rem] max-sm:text-[0.65rem] leading-[1.4] max-md:leading-[1.3] max-sm:leading-[1.2] text-white font-medium m-0">
                                Have one on one conversations with experts about your personal needs
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="py-[60px] pb-[80px]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="bg-white py-[42px] px-[48px] max-sm:py-[30px] max-sm:px-[22px] rounded-[2px] shadow-[0_2px_14px_rgba(0,0,0,0.04)]">

                        <h2 className="font-display text-[2.4rem] max-sm:text-[1.8rem] leading-none uppercase text-[#111827] mb-[22px]">GET IN TOUCH</h2>
                        <p className="text-base max-sm:text-[0.95rem] leading-[1.8] text-[#222] max-w-[720px] mb-3.5 font-medium">
                            To find out more about exhibiting at the Business Resource Center,
                        </p>

                        <p className="text-base max-sm:text-[0.95rem] leading-[1.8] text-[#222] max-w-[720px] mb-3.5 font-medium">
                            please contact{' '}
                            <a
                                href="mailto:Justin.Wood@Comexposium.com"
                                className="text-[#144380] font-semibold no-underline hover:text-[#27b8cf]"
                            >
                                Justin.Wood@Comexposium.com
                            </a>
                        </p>

                        <div className="mt-4">
                            <h3 className="font-display font-semibold text-lg text-[#111827] uppercase">Justin Wood</h3>

                            <a href="tel:+12403981385" className="text-[#144380] font-semibold hover:underline mt-1 inline-block">
                                (240) 398-1385
                            </a>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}