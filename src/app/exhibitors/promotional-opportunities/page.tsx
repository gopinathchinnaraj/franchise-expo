import PageBanner from "@/components/PageBanner";

const opportunities = [
    {
        title: "Aisle Sign Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Aisle_Sign_Sponsor.webp",
        description:
            "Own your aisle with a premium aisle sign. Attendees will have no trouble finding you when they see your logo overhead.",
    },
    {
        title: "Attendee E-Badge Email Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Attendee_E-Badge_Email_Sponsor.webp",
        description:
            "Capture the attention of pre-registered attendees and be top of mind before they even enter the expo hall.",
        note: "* Exclusive",
    },
    {
        title: "Badge Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Attendee_E-Newsletter_Sponsor.webp",
        description:
            "Generate connections and brand recall as every attendee and exhibitor promotes your brand while walking the show floor.",
        note: "* Exclusive",
    },
    {
        title: "Branded Wifi Sponsor",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Badge_Sponsor.webp",
        description:
            "Amplify your presence as the official supplier of wifi services to the event.",
        note: "* Exclusive",
    },
    {
        title: "Entrance Banner",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Badge_Lanyard_Sponsor.webp",
        description:
            "Welcome attendees with a bold, unforgettable entrance banner and put your brand in the spotlight.",
        note: "SOLD OUT",
    },
    {
        title: "Expo Floor Graphics",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Branded_Wifi_Sponsor.webp",
        description:
            "Stand out in the crowd with customized floor graphics promoting your brand and booth location.",
    },
    {
        title: "Official Show Bag",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Entrance_Column_Wrap.webp",
        description:
            "Grab the attention of attendees with one of the most visible sponsorships – the Official Show Bag.",
        note: "* Exclusive",
    },
    {
        title: "Show Bag Insert",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Entrance_Door_Graphics.webp",
        description:
            "Put your brand directly into attendees' hands with a show bag insert opportunity.",
    },
    {
        title: "Vehicles In Lobby",
        image: "https://www.franchiseexpo.com/images/ife/promotional-opportunities/Event_Guide_Advertising.webp",
        description:
            "Steer attention to your brand with premium placement of your branded vehicle.",
        note: "SOLD OUT",
    },
];

export default function PromotionalOpportunities() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="Promotional Opportunities"/>

            {/* INTRO */}
            <section className="pt-[90px] pb-10">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="max-w-full">
                        <p className="font-body text-[18px] max-sm:text-base font-medium leading-[1.9] text-[#444444] mb-5">
                            MFV Expositions’ franchise events provide the greatest
                            variety of opportunities to grow your business.
                            Make face-to-face connections with highly qualified
                            candidates, accelerating your sales process and lowering
                            your cost per lead. Through key onsite promotion and advertising options,
                            take your brand to the next level and make the impact
                            you want.
                        </p>
                    </div>

                </div>
            </section>

            {/* CARDS */}
            <section className="pb-20">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[70px] max-sm:gap-6">
                        {opportunities.map((item, index) => (
                            <div className="group relative h-[360px] overflow-hidden cursor-pointer bg-[#eee]" key={index}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover block"
                                />

                                <div className="absolute left-0 bottom-0 w-full h-[110px] bg-[#00529b] p-7 transition-all duration-[450ms] ease-out group-hover:h-[70%]">
                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-[10px] border-b-[#00529b]"></div>

                                    <h3 className="font-display text-[34px] max-sm:text-2xl leading-[1.1] uppercase text-white m-0">{item.title}</h3>

                                    <div className="opacity-0 mt-5 translate-y-[30px] transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                                        <p className="text-white text-[18px] leading-[1.7] mb-4">{item.description}</p>

                                        {item.note && (
                                            <span className="text-white italic font-bold text-[18px]">{item.note}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
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