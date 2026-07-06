import PageBanner from "@/components/PageBanner";

const hotels = [
    {
        name: "HYATT PLACE New York City / Times Square",
        address: "350 W. 39th Street, New York City, NY 10018",
        image: "https://www.franchiseexpo.com/images/ife/Hyatt-Place-New-York-City-Times-Square-P013-Exterior.4x3.webp",
        link: "#",
    },
    {
        name: "EVEN Hotel New York - Times Square South",
        address: "321 West 35th Street, New York City, NY 10001",
        image: "https://www.franchiseexpo.com/images/ife/even-hotel-times-square.jpg",
        link: "#",
    },
    {
        name: "Crowne Plaza HY36 Midtown Manhattan",
        address: "320 West 36th Street, New York City, NY 10018",
        image: "https://www.franchiseexpo.com/images/ife/crowne-plaza-new-york-5519815692-2x1.jpg",
        link: "#",
    },
    {
        name: "Four Points by Sheraton Manhattan Midtown West",
        address: "444 10th Ave, New York City, NY 10001",
        image: "https://www.franchiseexpo.com/images/7565f357.jpg",
        link: "#",
    },
];

export default function TravelInformation() {
    return (
        <main className="w-full overflow-hidden bg-white">
            <PageBanner title="Travel Information" />

            {/* INTRO */}
            <section className="py-20 max-sm:py-[60px] pb-10 max-sm:pb-[30px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="max-w-full">
                        <h2 className="font-display text-[28px] max-lg:text-[40px] max-sm:text-[32px] leading-tight uppercase text-[#011b2e] mb-6">
                            THE INTERNATIONAL FRANCHISE EXPO HAS
                            PARTNERED WITH THE HOTELS BELOW:
                        </h2>

                        <p className="font-body text-sm max-sm:text-base leading-[1.8] text-[#4d4d4d]">
                            <em>
                                *Take note that we do NOT work with third
                                party agency room brokers. Should you be
                                contacted by them, please refrain from using
                                their services to book your room.
                            </em>
                        </p>
                    </div>

                </div>
            </section>

            {/* HOTELS */}
            <section className="py-[30px] pb-[100px] max-sm:pb-[70px]">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="flex flex-col gap-[60px]">

                        {hotels.map((hotel, index) => (
                            <div
                                className="grid grid-cols-2 max-lg:grid-cols-1 gap-[50px] max-lg:gap-[30px] items-center"
                                key={index}
                            >

                                <div className="hotelContent">
                                    <h3 className="font-display text-[34px] max-lg:text-[32px] max-sm:text-[26px] leading-[1.2] uppercase text-[#011b2e] mb-[18px]">{hotel.name}</h3>

                                    <p className="font-body text-[18px] max-sm:text-base leading-[1.7] text-[#555555] mb-7">{hotel.address}</p>

                                    <a href="#" className="inline-flex items-center justify-between gap-6 min-w-[320px] max-sm:min-w-0 max-sm:w-full h-[58px] pl-[30px] pr-2 bg-[#0067b2] border-[3px] border-[#0067b2] rounded-full text-white no-underline font-display text-[18px] max-sm:text-base font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5">
                                        <span>Make Your Reservation</span>

                                        <span className="w-12 h-12 bg-[#f2f2f2] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                className="w-[18px] h-[18px] text-[#2f2f5f]"
                                            >
                                                <path d="M9 18L15 12L9 6" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>

                                <div className="w-full h-full">
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-full h-[420px] max-sm:h-[280px] object-cover block"
                                    />
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}