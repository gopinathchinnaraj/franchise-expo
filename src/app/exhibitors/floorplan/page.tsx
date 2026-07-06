import PageBanner from "@/components/PageBanner";
import { ChevronRight } from "lucide-react";

export default function FloorPlan() {
    return (
        <main className="w-full overflow-hidden bg-[#f3f3f3]">
            {/* HERO */}
            <PageBanner title="Floor Plan"/>

            {/* FORM SECTION */}
            <section className="py-20 pb-[120px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="w-full bg-transparent">

                        <h2 className="font-display text-[52px] max-lg:text-[48px] max-md:text-[36px] leading-none uppercase text-[#151515] mb-10 max-w-full">
                            Enter Your Details To View Our Floorplan
                        </h2>

                        <form className="flex flex-col gap-[18px]">

                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number *"
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full h-[74px] border-none bg-[#eceeef] px-6 text-[18px] outline-none focus:ring-1 focus:ring-[#0067b2]"
                            />

                            <div className="mt-2.5 flex flex-col gap-6">

                                <label className="flex items-start gap-4 text-[18px] leading-[1.8] text-[#444] cursor-pointer">
                                    <input type="checkbox" className="w-[22px] h-[22px] mt-1.5" />

                                    <span>
                                        I agree to receiving all show
                                        information, in addition to
                                        the information I have requested.
                                    </span>
                                </label>

                                <label className="flex items-start gap-4 text-[18px] leading-[1.8] text-[#444] cursor-pointer">
                                    <input type="checkbox" className="w-[22px] h-[22px] mt-1.5" />

                                    <span>
                                        I agree to Comexposium storing
                                        and processing my personal data
                                        for the purpose of the request.
                                    </span>
                                </label>

                            </div>

                            <p className="mt-2.5 text-base leading-[1.8] text-[#666] italic">
                                You can unsubscribe from these
                                communications at any time.
                                For more information, please
                                review our Privacy Policy.
                            </p>

                            <button
                                type="submit"
                                className="group mt-5 inline-flex items-center pl-4 pr-1 h-[42px] min-w-[115px] max-w-[115px] border-none rounded-full bg-[#0067b2] text-white text-[12px] font-bold uppercase cursor-pointer transition-colors duration-300 hover:bg-[#00589a] self-start"
                            >
                                <span>SUBMIT</span>

                                <span className="w-6.5 h-6.5 ml-2 rounded-full bg-[#e8e8e8] border border-[#143d7a] flex items-center justify-center text-[#143d7a] text-sm font-bold shrink-0">
                                    <ChevronRight size={16} />
                                </span>
                            </button>

                        </form>

                    </div>

                    {/* CTA */}
                    <div className="mt-[70px] grid grid-cols-2 max-md:grid-cols-1 gap-9 max-md:gap-5">

                        <div className="bg-white h-[120px] max-md:h-auto max-md:min-h-[100px] px-[30px] max-md:p-10 flex items-center max-md:flex-col max-md:items-start justify-between max-md:gap-[15px] border border-[#ececec] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-0.5">

                            <h3 className="font-display text-2xl max-md:text-[30px] font-medium leading-[1.1] uppercase text-[#111111] m-0">
                                INTERESTED IN ATTENDING?
                            </h3>

                            <a href="#" className="inline-flex items-center justify-center h-8 pl-4 pr-1 rounded-full bg-[#0067b2] text-white font-display text-[11px] font-bold uppercase no-underline transition-colors duration-300 hover:bg-[#00589a]">
                                LEARN MORE

                                <span className="w-6 h-6 ml-2 rounded-full bg-[#e8e8e8] border border-[#143d7a] flex items-center justify-center text-[#143d7a] text-sm font-bold shrink-0">
                                    <ChevronRight size={18} />
                                </span>
                            </a>

                        </div>

                        <div className="bg-white h-[120px] max-md:h-auto max-md:min-h-[100px] px-[30px] max-md:p-10 flex items-center max-md:flex-col max-md:items-start justify-between max-md:gap-[15px] border border-[#ececec] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-0.5">

                            <h3 className="font-display text-2xl max-md:text-[30px] font-medium leading-[1.1] uppercase text-[#111111] m-0">
                                INTERESTED IN EXHIBITING?
                            </h3>

                            <a href="#" className="inline-flex items-center justify-center h-8 pl-4 pr-1 rounded-full bg-[#0067b2] text-white font-display text-[11px] font-bold uppercase no-underline transition-colors duration-300 hover:bg-[#00589a]">
                                LEARN MORE

                                <span className="w-6 h-6 ml-2 rounded-full bg-[#e8e8e8] border border-[#143d7a] flex items-center justify-center text-[#143d7a] text-sm font-bold shrink-0">
                                    <ChevronRight size={18} />
                                </span>
                            </a>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}