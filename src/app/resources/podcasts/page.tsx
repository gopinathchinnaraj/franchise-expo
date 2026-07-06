import PageBanner from "@/components/PageBanner";

const podcasts = [
    {
        title: "Funbox",
        video: "https://www.youtube.com/embed/Dq5cHyyctw4",
    },
    {
        title: "World Gym",
        video: "https://www.youtube.com/embed/kGBj-Iml3rI",
    },
    {
        title: "Titus Center for Franchising",
        video: "https://www.youtube.com/embed/GGZ7T6DUcN4",
    },
    {
        title: "Ziebart",
        video: "https://www.youtube.com/embed/rhRlPZCkUtQ",
    },
    {
        title: "Captain D's",
        video: "https://www.youtube.com/embed/eAz_6HrrsWg",
    },
];

export default function Podcasts() {
    return (
        <main className="w-full overflow-hidden bg-[#f4f7fb]">

            {/* HERO */}
            <PageBanner title="PodCasts"/>

            {/* PODCAST SECTION */}
            <section className="py-[100px] max-md:py-[70px] px-0">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10">
                        {podcasts.map((podcast, index) => (
                            <div
                                key={index}
                                className="bg-white overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.07)] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]"
                            >

                                <div className="p-[28px_30px_10px] max-md:p-[22px_22px_10px]">
                                    <h2 className="font-display text-[32px] max-md:text-[24px] leading-tight text-[#011b2e]">{podcast.title}</h2>
                                </div>

                                <div className="relative w-full pt-[56.25%]">
                                    <iframe
                                        src={podcast.video}
                                        title={podcast.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full border-none"
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