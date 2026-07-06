import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Emerging Brand Pavilion",
  description:
    "The Emerging Brands Pavilion is one of the busiest aisles of the show floor and dedicated to up-and-coming franchises.",
};

const features = [
  {
    heading: "Discover The Next Big Thing",
    body: "Be among the first to discover fresh concepts before they become household names. Gain access to early-stage investment opportunities and lock in favorable territories while they're still available.",
  },
  {
    heading: "Direct Access To Founders",
    body: "In the Emerging Brands Pavilion, you'll often meet with founders or top executives of these new brands. This gives you the chance to hear firsthand the passion, vision, and growth potential behind the businesses.",
  },
  {
    heading: "Be A Trendsetter",
    body: "You have the opportunity to join these brands early, positioning yourself as a trendsetter in your market. Stay ahead of industry trends and set yourself apart with a fresh, exciting concept.",
  },
  {
    heading: "Growth Potential",
    body: "These are the brands poised for rapid expansion. By visiting the Emerging Brands Pavilion, you'll be exploring high-growth opportunities that can lead to significant returns as these franchises scale.",
  },
];

export default function EmergingBrandPavilionPage() {
  return (
    <>
      <PageBanner
        title="Emerging Brand Pavilion"
        subtitle="One of the busiest aisles of the show floor — dedicated to up-and-coming franchises."
      />

      <section className="py-10 pb-20 bg-[#f2f2f2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-[52%_48%] max-lg:grid-cols-1 gap-5 items-stretch">

            {/* LEFT CONTENT */}
            <div className="bg-[#00539f] p-[30px] text-white flex flex-col justify-center min-h-[670px] max-lg:min-h-0">
              <h2 className="font-display text-2xl leading-[1.05] uppercase text-white mb-[30px] max-lg:text-base">
                THE EMERGING BRANDS PAVILION IS ONE OF THE BUSIEST AISLES OF THE SHOW FLOOR AND DEDICATED TO UP-AND-COMING FRANCHISES.
              </h2>

              <p className="text-white text-base leading-relaxed mb-10 max-lg:text-base">
                Discover the future of franchising by visiting the Emerging
                Brands Pavilion — where tomorrow's leading brands are waiting
                for you today.
              </p>

              <ul className="list-none m-0 p-0">
                {features.map((item) => (
                  <li key={item.heading} className="relative pl-6 mb-6 text-white leading-normal text-base font-semibold">
                    <span className="absolute left-0 -top-[3px] text-[#3cd8e8] text-[28px] leading-none">•</span>
                    <strong>{item.heading}:</strong> {item.body}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="min-h-[670px] max-lg:min-h-[450px] max-md:min-h-[320px] w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Emerging_Pavilion.webp')",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#00539f] p-[40px_32px_50px] max-md:p-[40px_25px]">
            <h2 className="font-display text-[3rem] leading-none uppercase text-white mb-[25px]">GET IN TOUCH</h2>

            <p className="text-white text-[1.15rem] font-semibold leading-[1.7] mb-[30px] max-w-[1200px]">
              If you are an up and coming franchise brand with 10 units or less and
              are interested in learning more on how you can showcase your brand in
              the Emerging Pavilion contact:
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#ff6b00] text-[1.8rem] font-bold font-display">Justin Wood</span>
              <span className="text-white text-[1.8rem] font-bold font-display">(240) 398-1385</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}