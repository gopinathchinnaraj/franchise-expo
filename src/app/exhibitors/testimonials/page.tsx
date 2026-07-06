import PageBanner from "@/components/PageBanner";

export default function ExhibitorTestimonials() {
    return (
        <main className="w-full overflow-x-hidden bg-white">
            {/* HERO */}
            <PageBanner title="Exhibitor Testimonials" />

            {/* INTRO */}
            <section className="py-[60px] max-md:py-10">
                <div className="w-full max-w-[1440px] mx-auto px-6 max-sm:px-4">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-[35px] items-center">

                        <div className="introContent">
                            <h2 className="font-display text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] leading-[1.1] uppercase text-[#011b2e] mb-5">
                                What Do Our Exhibitors Have To Say?
                            </h2>

                            <p className="text-[15px] max-md:text-sm max-sm:text-[13px] leading-[1.7] max-sm:leading-[1.6] text-[#444444] mb-3.5">
                                MFV Expositions' franchise expos are among the largest
                                franchise exhibitions within the U.S, offering the largest
                                selection of franchise brands all under one roof.
                            </p>

                            <p className="text-[15px] max-md:text-sm max-sm:text-[13px] leading-[1.7] max-sm:leading-[1.6] text-[#444444] mb-3.5">
                                Since 1991 MFV Expositions has been hosting expos and franchise
                                owners have come to our shows to seek out their perfect
                                franchise.
                            </p>

                            <p className="text-[15px] max-md:text-sm max-sm:text-[13px] leading-[1.7] max-sm:leading-[1.6] text-[#444444] mb-3.5">
                                But don’t take our word for it, take a look at what some of our
                                exhibitors have to say about us!
                            </p>
                        </div>

                        <div className="w-full rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                            <iframe
                                src="https://player.vimeo.com/video/855373079?h=140bc3b8a1"
                                title="Exhibitor Testimonials"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="w-full h-[340px] max-lg:h-[300px] max-md:h-[240px] max-sm:h-[200px] border-none"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-[#0067b2] py-10 max-md:py-[50px]">
                <div className="w-full max-w-[1440px] mx-auto px-6 max-sm:px-4">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="https://www.franchiseexpo.com/images/template/quote-icon.svg"
                            alt="Quote icon"
                            className="w-[45px] h-[45px] max-md:w-10 max-md:h-10 max-sm:w-[35px] max-sm:h-[35px] mb-3.5"
                        />
                        <h2 className="font-display text-[26px] max-lg:text-[34px] max-md:text-[28px] max-sm:text-[22px] leading-[1.1] text-white text-center max-w-[650px] mx-auto">HEAR WHAT OUR EXHIBITORS HAVE TO SAY</h2>
                    </div>

                    <div className="max-w-[900px] mx-auto text-center flex flex-col justify-center items-center">
                        <p className="font-body text-[17px] max-lg:text-[17px] max-md:text-[15px] max-sm:text-[14px] leading-[1.5] text-white mb-6.5 max-sm:mb-[18px] font-normal text-center max-w-[780px] px-0 max-md:px-4 max-sm:px-3">
                            "We know that there's a lot of great investors, people looking for franchises coming through the show. MFV Expositions and their expos are very reputable, and out of all the shows we go to this is one of them where we get the best results."
                        </p>
                        <div className="text-center">
                            <h4 className="font-display text-2xl max-md:text-lg max-sm:text-base leading-normal text-white uppercase mb-1 tracking-[0.5px]">Dan Doulen</h4>
                            <span className="font-body text-sm max-md:text-[13px] max-sm:text-[12px] text-white/85 font-medium">Wings and Rings</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}