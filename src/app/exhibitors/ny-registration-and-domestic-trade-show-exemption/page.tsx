import PageBanner from "@/components/PageBanner";

const deadlines = [
    {
        text: "For companies currently registered in NY but requiring renewal the deadline is April 30, 2026",
    },
    {
        text: "For companies not currently registered in NY but planning to register the deadline to register is March 29, 2026",
    },
    {
        text: "For companies not currently registered in NY but planning to apply for the Domestic Trade Show exemption the deadline to register is May 10, 2026",
    },
];

export default function NYRegistration() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="NY Registration and Domestic Trade Show Exemption"/>

            {/* CONTENT */}
            <section className="py-[100px] max-md:py-[70px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="bg-white p-[70px] max-lg:p-[50px_40px] max-md:p-[35px_22px]">

                        <p className="text-[15px] max-md:text-[17px] leading-[2] max-md:leading-[1.9] text-center text-[#333333] font-bold max-w-[1100px] mx-auto mb-[70px] max-md:mb-[50px]">
                            The State of New York Office of the Attorney General -
                            Department of Law requires that in order to exhibit at
                            IFE, you must have a valid Franchise Disclosure Document
                            (FDD) and be registered in NY. Companies who have a valid
                            FDD that does not include NY, must file an application
                            for a temporary exemption. The Department of Law requires
                            that we provide them with proof of registration for each
                            company.
                        </p>

                        <h2 className="font-display text-[48px] max-md:text-[34px] uppercase text-center text-[#011b2e] mb-[50px]">
                            Important Deadlines
                        </h2>

                        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[28px] mb-[70px]">
                            {deadlines.map((item, index) => (
                                <div
                                    className="bg-[#005EB8] p-[35px_28px] max-md:p-[28px_20px] min-h-[220px] max-lg:min-h-0 flex items-center justify-center text-left transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
                                    key={index}
                                >
                                    <p className="text-white text-[15px] max-md:text-base leading-[1.8] font-semibold">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-[22px] max-md:text-[18px] leading-[1.8] text-[#444444] mb-[35px]">
                                All applications must be filed on the
                                Franchise Electronic Filing Depository
                                &quot;FRED&quot;
                            </p>

                            <a
                                href="https://www.nasaaefd.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-[38px] py-[18px] max-md:w-full rounded-full bg-[#011b2e] text-white text-[15px] font-bold tracking-wider no-underline transition-all duration-300 hover:bg-[#00a8c8] hover:-translate-y-0.5"
                            >
                                ACCESS FRED HERE
                            </a>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}