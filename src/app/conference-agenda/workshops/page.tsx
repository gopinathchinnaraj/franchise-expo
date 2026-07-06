import PageBanner from "@/components/PageBanner";
import { FaCheckCircle, FaFileAlt, FaMoneyBillWave, FaQuestionCircle, FaChartLine, FaBullhorn, FaHandshake, FaLightbulb } from "react-icons/fa";

const buyingTopics = [
    {
        title: "Focus On You",
        points: [
            "Do you plan to work alone or with others?",
            "How do you want to spend the next 10, 20 or more years of your life?",
        ],
        icon: <FaCheckCircle />,
    },
    {
        title: "The Disclosure Document",
        points: ["Includes 21 Items"],
        icon: <FaFileAlt />,
    },
    {
        title: "How much money can I make?",
        points: ["Fees, bargains, is it justifiable?"],
        icon: <FaMoneyBillWave />,
    },
    {
        title: "Where and how to ask for help?",
        points: ["Consult your advisors with caution"],
        icon: <FaQuestionCircle />,
    },
];

const businessTopics = [
    {
        title: "The Decision to Franchise",
        points: [
            "How Franchising Works",
            "Alternatives",
            "Quality Control",
            "Legal Aspects of Franchising",
        ],
        icon: <FaChartLine />,
    },
    {
        title: "Marketing Your Franchise",
        points: [
            "Start locally, then regionally",
            "Don't expand faster than your support capability",
        ],
        icon: <FaBullhorn />,
    },
    {
        title: "Selling Your Franchise",
        points: [
            "Unique process unlike any other sales",
            "Predictability",
        ],
        icon: <FaHandshake />,
    },
    {
        title: "Creating a Successful Franchise Strategy",
        points: [
            "Structural Decisions",
            "Financial",
            "Organizational Development",
        ],
        icon: <FaLightbulb />,
    },
];

export default function Workshops() {
    return (
        <main className="w-full overflow-hidden bg-[#f7f9fc]">

            {/* HERO */}
            <PageBanner title="Workshops" />

            {/* INTRO */}
            <section className="py-[100px] max-md:py-[70px] px-0">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[60px] items-center">

                        <div>
                            <h2 className="font-display text-[44px] max-md:text-[34px] leading-[1.1] text-[#011b2e] mb-10 uppercase">
                                Join Us For Our Workshops!
                            </h2>

                            <div className="mb-10">
                                <h3 className="text-[22px] max-md:text-[24px] text-[#011b2e] mb-4 font-bold">A To Z's Of Buying A Franchise</h3>

                                <p className="text-[15px] max-md:text-[16px] leading-[1.9] font-bold text-[#555555]">
                                    If you're looking for no-nonsense,
                                    cut-to-the-quick, how to evaluate
                                    franchises so that you can buy one
                                    that's right for you, this is the
                                    perfect workshop.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-[22px] max-md:text-[24px] text-[#011b2e] mb-4 font-bold">Franchise Your Business</h3>

                                <p className="text-[15px] max-md:text-[16px] leading-[1.9] font-bold text-[#555555]">
                                    This workshop is ideal for business
                                    owners interested in franchising or
                                    those trying to determine if
                                    franchising is a legitimate growth option.
                                </p>

                                <span className="inline-block mt-4.5 text-[#00a8c8] font-bold">
                                    * additional workshop fee required
                                </span>
                            </div>
                        </div>

                        <div className="w-full h-[400px] max-md:h-[320px] rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                            <img
                                src="https://media.istockphoto.com/id/1956818527/photo/crowd-of-business-people-having-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=bazpLXOSPCPSy_3Gtvq4Sq-SygVi11KqhHmLgCdSAAg="
                                alt="Workshop"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* BUYING TOPICS */}
            <section className="pb-[100px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <h2 className="font-display text-[42px] max-md:text-[34px] leading-[1.2] text-[#011b2e] mb-[50px] uppercase">
                        The Topics For <br />
                        A To Z's Of Buying A Franchise
                    </h2>

                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-7">
                        {buyingTopics.map((item, index) => (
                            <div
                                key={index}
                                className="p-[35px_30px] max-md:p-[28px_22px] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.09)]"
                            >
                                <div className="w-[65px] h-[65px] flex items-center justify-center text-[#0067B2] text-[38px] font-bold mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-[18px] max-md:text-[22px] leading-[1.3] text-[#0067B2] mb-4.5 font-bold">{item.title}</h3>

                                {item.points.map((point, i) => (
                                    <p key={i} className="text-[16px] leading-[1.8] font-semibold text-[#666666] mb-2.5">{point}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BUSINESS TOPICS */}
            <section className="pb-[100px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <h2 className="font-display text-[42px] max-md:text-[34px] leading-[1.2] text-[#011b2e] mb-[50px] uppercase">
                        The Topics For <br />
                        Franchise Your Business
                    </h2>

                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-7">
                        {businessTopics.map((item, index) => (
                            <div
                                key={index}
                                className="p-[35px_30px] max-md:p-[28px_22px] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.09)]"
                            >
                                <div className="w-[65px] h-[65px] flex items-center justify-center text-[#0067B2] text-[38px] font-bold mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-[18px] max-md:text-[22px] leading-[1.3] text-[#0067B2] mb-4.5 font-bold">{item.title}</h3>

                                {item.points.map((point, i) => (
                                    <p key={i} className="text-[16px] leading-[1.8] font-semibold text-[#666666] mb-2.5">{point}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}