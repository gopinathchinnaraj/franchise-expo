import Image from "next/image";

const teamSections = [
    {
        title: "SALES",
        members: [
            {
                name: "Frank Fazio",
                role: "Senior Account Executive",
                email: "Frank.Fazio@comexposium.com",
                phone: "201.881.1624",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_306.png",
            },
            {
                name: "Justin Wood",
                role: "Senior Account Executive",
                email: "Justin.Wood@Comexposium.com",
                phone: "240.398.1385",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_307.jpg",
                note: "Request Exhibitor Info",
            },
            {
                name: "Simone Knaap",
                role: "Senior Account Executive",
                email: "simone.knaap@comexposium.com",
                phone: "201.881.1654",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_309.png",
            },
            {
                name: "James Materandrea",
                role: "VP International Sales",
                email: "James.Mastandrea@comexposium.com",
                phone: "201.704.1240",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_310.png",
            },
        ],
    },
    {
        title: "MARKETING",
        members: [
            {
                name: "Linda Thompson",
                role: "Marketing Director",
                email: "Linda.Thompson@comexposium.com",
                phone: "201.881.1646",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_311.png",
                note: "Attendee and Conference Info",
            },
            {
                name: "Rafael Arango",
                role: "Marketing Assistant",
                email: "rafael.arango@comexposium.com",
                phone: "201.881.1616",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_313.png",
            },
        ],
    },
    {
        title: "CUSTOMER RELATIONS",
        members: [
            {
                name: "Murphy Connolly",
                role: "Director of Operations & Services",
                email: "Murphy.Connolly@comexposium.com",
                phone: "631.335.5696",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_283_314.png",
                note: "Exhibitor Services and Operations",
            },
        ],
    },
    {
        title: "FINANCE",
        members: [
            {
                name: "Ismael Iraola",
                role: "SVP Finance",
                email: "Ismael.Iraola@comexposium.com",
                phone: "201.515.3075",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_315.png",
            },
            {
                name: "Mohammed Abdelmajid",
                role: "Staff Accountant",
                email: "Mohammed.Abdelmajid@comexposium.com",
                phone: "201.515.3072",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_317.png",
            },
            {
                name: "Roman Onica",
                role: "Staff Accountant",
                email: "Roman.Onica@comexposium.com",
                phone: "201.881.1636",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_318.png",
            },
        ],
    },
    {
        title: "SHOW MANAGEMENT",
        members: [
            {
                name: "Martin Joksimovic",
                role: "President",
                email: "Martin.Joksimovic@comexposium.com",
                phone: "201.881.1658",
                image:
                    "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_285_319.png",
            },
        ],
    },
];

export default function OurTeam() {
    return (
        <main className="w-full overflow-hidden bg-white">
            {/* HERO */}
            <section className="bg-gradient-to-br from-[#003366] to-[#00509e] py-20 max-md:py-15 max-sm:py-12.5 relative overflow-hidden min-h-[250px] max-md:min-h-[200px] max-sm:min-h-[160px] flex items-center">
                <div className="relative z-[1] w-full">
                    <div className="w-full max-w-[1200px] mx-auto px-5 max-sm:px-4">
                        <h1 className="font-display text-[3rem] max-lg:text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem] font-bold text-center text-white drop-shadow-md leading-tight">
                            MEET THE FRANCHISE EXPO TEAM - EVENT EXPERTS
                        </h1>
                    </div>
                </div>
            </section>

            {/* TEAM SECTIONS */}
            {teamSections.map((section, index) => (
                <section
                    key={index}
                    className={`py-[50px] max-md:py-[35px] ${index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"}`}
                >
                    <div className="w-full max-w-[1200px] mx-auto px-5 max-sm:px-4">
                        <div className="mb-7.5 text-left">
                            <span className="block text-[12px] font-semibold text-[#888] uppercase tracking-[2px] mb-1">OUR PEOPLE</span>
                            <h2 className="text-[28px] max-md:text-[24px] max-sm:text-[20px] font-bold text-[#111] m-0 tracking-wider uppercase">{section.title}</h2>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] max-lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] max-sm:grid-cols-2 max-[400px]:grid-cols-1 gap-5 max-lg:gap-4 max-md:gap-3.5 max-sm:gap-3 max-[400px]:max-w-[280px] max-[400px]:mx-auto">
                            {section.members.map((member, idx) => (
                                <div key={idx} className="bg-white border border-[#e0e0e0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
                                    <div className="relative w-full pb-[85%] max-md:pb-[80%] max-sm:pb-[75%] max-[400px]:pb-[80%] overflow-hidden bg-[#e8e8e8]">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-400 group-hover:scale-105"
                                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                                        />
                                    </div>

                                    <div className="p-4 max-sm:p-3 pb-0 max-sm:pb-0 flex flex-col flex-1">
                                        <h3 className="text-[15px] max-md:text-[13px] max-sm:text-[12px] font-bold text-[#111] mb-1 leading-tight uppercase">{member.name}</h3>
                                        <p className="text-[12px] max-sm:text-[10px] font-semibold text-[#333] mb-1.5 leading-normal">{member.role}</p>
                                        {member.note && (
                                            <p className="text-[11px] max-sm:text-[10px] font-semibold text-[#005ca9] mb-2 leading-normal">{member.note}</p>
                                        )}
                                        <div className="flex flex-col gap-0.5 flex-1 mb-3">
                                            <span className="text-[11px] max-sm:text-[10px] text-[#333] leading-normal break-all">
                                                <span className="font-bold">E: </span>
                                                {member.email}
                                            </span>
                                            <span className="text-[11px] max-sm:text-[10px] text-[#333] leading-normal break-all">
                                                <span className="font-bold">T: </span>
                                                {member.phone}
                                            </span>
                                        </div>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center justify-center h-[38px] max-sm:h-[34px] -mx-4 max-sm:-mx-3 bg-[#005ca9] text-white no-underline uppercase text-[11px] max-sm:text-[10px] font-bold tracking-wider transition-colors duration-300 hover:bg-[#00488a] border-none cursor-pointer"
                                        >
                                            EMAIL ME
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
}