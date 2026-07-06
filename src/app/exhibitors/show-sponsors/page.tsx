import PageBanner from "@/components/PageBanner";

const platinumSponsors = [
    {
        name: "Entrepreneur",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_287_254.webp?d379ab892179a7e4eed7ceb2ffa43760",
        link: "#",
    },
];

const goldSponsors = [
    {
        name: "BeTheBoss",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_275.webp?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "BizBuySell",
        image: "https://www.franchiseexpo.com/images/sponsors/IFE/BizBuySell.svg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "Emma Inc.",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_430.jpg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "F.C. Dadson",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_274.webp?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "MetAiBlock",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_434.png?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "Stark and Stark Attorneys at Law",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_269.jpg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
];

const silverSponsors = [
    {
        name: "Guidant",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_280.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "Sesimi",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_356.png?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "Signation Sign Group",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_291.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "The Entrepreneur's Source",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_406.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "The Franchise Firm",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_288.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
];

export default function ShowSponsors() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="Show Sponsors"/>

            {/* SPONSORS */}
            <section className="py-20">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    {/* PLATINUM */}
                    <div className="mb-20">
                        <h2 className="font-display text-[42px] max-lg:text-4xl max-sm:text-3xl leading-tight uppercase text-[#011b2e] mb-[35px]">
                            Platinum Sponsors
                        </h2>

                        <div className="grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                            {platinumSponsors.map((sponsor, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-[#e6e6e6] flex flex-col min-h-[320px] max-sm:min-h-[280px] overflow-hidden transition-all duration-300 hover:-translate-y-1.2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="w-full h-[180px] max-sm:h-[140px] object-contain object-center p-6 bg-white"
                                    />

                                    <h3 className="flex-1 flex items-center p-[20px_30px] max-sm:p-[18px_22px] bg-[#f1f3f5] font-display text-[20px] max-sm:text-[18px] font-bold leading-[1.2] uppercase text-[#011b2e] m-0">{sponsor.name}</h3>

                                    <a href={sponsor.link} className="w-full h-[50px] flex items-center justify-center bg-[#0067b2] text-white font-display text-[15px] font-medium tracking-wider uppercase no-underline transition-colors duration-300 hover:bg-[#004f8a]">
                                        View Profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GOLD */}
                    <div className="mb-20">
                        <h2 className="font-display text-[42px] max-lg:text-4xl max-sm:text-3xl leading-tight uppercase text-[#011b2e] mb-[35px]">
                            Gold Sponsors
                        </h2>

                        <div className="grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                            {goldSponsors.map((sponsor, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-[#e6e6e6] flex flex-col min-h-[320px] max-sm:min-h-[280px] overflow-hidden transition-all duration-300 hover:-translate-y-1.2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="w-full h-[180px] max-sm:h-[140px] object-contain object-center p-6 bg-white"
                                    />

                                    <h3 className="flex-1 flex items-center p-[20px_30px] max-sm:p-[18px_22px] bg-[#f1f3f5] font-display text-[20px] max-sm:text-[18px] font-bold leading-[1.2] uppercase text-[#011b2e] m-0">{sponsor.name}</h3>

                                    <a href={sponsor.link} className="w-full h-[50px] flex items-center justify-center bg-[#0067b2] text-white font-display text-[15px] font-medium tracking-wider uppercase no-underline transition-colors duration-300 hover:bg-[#004f8a]">
                                        View Profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SILVER */}
                    <div className="mb-20">
                        <h2 className="font-display text-[42px] max-lg:text-4xl max-sm:text-3xl leading-tight uppercase text-[#011b2e] mb-[35px]">
                            Silver Sponsors
                        </h2>

                        <div className="grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                            {silverSponsors.map((sponsor, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-[#e6e6e6] flex flex-col min-h-[320px] max-sm:min-h-[280px] overflow-hidden transition-all duration-300 hover:-translate-y-1.2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                                >
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="w-full h-[180px] max-sm:h-[140px] object-contain object-center p-6 bg-white"
                                    />

                                    <h3 className="flex-1 flex items-center p-[20px_30px] max-sm:p-[18px_22px] bg-[#f1f3f5] font-display text-[20px] max-sm:text-[18px] font-bold leading-[1.2] uppercase text-[#011b2e] m-0">{sponsor.name}</h3>

                                    <a href={sponsor.link} className="w-full h-[50px] flex items-center justify-center bg-[#0067b2] text-white font-display text-[15px] font-medium tracking-wider uppercase no-underline transition-colors duration-300 hover:bg-[#004f8a]">
                                        View Profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}