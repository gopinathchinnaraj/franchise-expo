import type { Metadata } from 'next';
import Link from 'next/link';

import Hero from '@/components/Hero';
import IntroSlider from '@/components/IntroSlider';
import { Users, Mic, Clock3 } from 'lucide-react';
import SponsorsSection from '@/components/sponsor';
import TestimonialSlider from '@/components/TestimonialSlider';

export const metadata: Metadata = {
  title: 'FranchiseExpo – New York 2026',
  description:
    "Find the right franchise for you at the world's leading franchise event. May 29–30, 2026 at the Javits Center, New York City.",
};

/* ─── Static data ─── */
const cards = [
  {
    title: 'Register to Attend',
    description:
      'Register now to attend the International Franchise Expo and receive updated show information.',
    cta: 'Register to Attend',
    href: '/register',
    image: 'https://www.franchiseexpo.com/images/west/Home/REGISTER-TO-ATTEND.webp',
  },
  {
    title: 'Exhibiting & Sponsoring',
    description:
      'Looking to sponsor or exhibit at the Franchise Expo? Click below to get more information on both opportunities.',
    cta: 'Learn More',
    href: '/exhibitors/why-exhibit',
    image: 'https://www.franchiseexpo.com/images/west/Home/EXHIBITING-SPONSORING.webp',
  },
  {
    title: 'Speaking Opportunities',
    description:
      "Looking to speak at the Franchise Expo? We'd love to have you! Find out more below.",
    cta: 'Learn More',
    href: '/attendees/speaker-application-form',
    image: 'https://www.franchiseexpo.com/images/west/Home/SPEAKING-OPPORTUNITIES.webp',
  },
];

const newsItems = [
  {
    date: '03 March 2026',
    title: 'The Top Advantages of Franchising Your Business',
    href: '/blog-article/the-top-advantages-of-franchising-your-business',
    image: 'https://www.franchiseexpo.com/images/A_businessperson_holds_a_magnifying_glass_over_a_city_finding_the_advantages_of_franchising_a_business.webp',
  },
  {
    date: '03 March 2026',
    title: 'Top Franchise Opportunities: A Complete Guide',
    href: '/blog-article/top-franchise-opportunities-a-complete-guide',
    image: 'https://www.franchiseexpo.com/images/A_laptop_with_growth_charts_on_a_desk_for_researching_top_franchise_opportunities.webp',
  },
  {
    date: '20 February 2026',
    title: "Can I Get a Loan to Buy a Franchise? Yes, Here's How",
    href: '/blog-article/can-i-get-a-loan-to-buy-a-franchise',
    image: 'https://www.franchiseexpo.com/images/can-i-get-a-loan-to-buy-a-franchise-yes-heres-how-927431.png',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Stats Bar ── */}
      <section className="w-full bg-[#efefef] py-[34px] px-[60px] max-lg:py-7 max-lg:px-9 max-sm:py-6 max-sm:px-5">
        <div className="max-w-[1450px] mx-auto grid grid-cols-3 max-lg:grid-cols-1 items-center gap-10 max-lg:gap-7">

          <div className="flex items-center justify-center max-lg:justify-start gap-[22px]">
            <div className="w-16 h-16 min-w-[64px] rounded-full bg-[#9fe7f2] flex items-center justify-center text-[#25b8d3] text-[30px] shrink-0 max-sm:w-[52px] max-sm:h-[52px] max-sm:min-w-[52px] max-sm:text-2xl">
              <Users size={28} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-display text-[60px] max-sm:text-[44px] leading-[0.9] font-bold text-[#111] m-0">150+</h3>
              <span className="font-display text-[22px] max-sm:text-base leading-[1.2] font-light uppercase text-[#222] block">EXHIBITORS</span>
            </div>
          </div>

          <div className="flex items-center justify-center max-lg:justify-start gap-[22px]">
            <div className="w-16 h-16 min-w-[64px] rounded-full bg-[#9fe7f2] flex items-center justify-center text-[#25b8d3] text-[30px] shrink-0 max-sm:w-[52px] max-sm:h-[52px] max-sm:min-w-[52px] max-sm:text-2xl">
              <Mic size={28} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-display text-[60px] max-sm:text-[44px] leading-[0.9] font-bold text-[#111] m-0">40+</h3>
              <span className="font-display text-[22px] max-sm:text-base leading-[1.2] font-light uppercase text-[#222] block">WORKSHOPS AND<br />SESSIONS</span>
            </div>
          </div>

          <div className="flex items-center justify-center max-lg:justify-start gap-[22px]">
            <div className="w-16 h-16 min-w-[64px] rounded-full bg-[#9fe7f2] flex items-center justify-center text-[#25b8d3] text-[30px] shrink-0 max-sm:w-[52px] max-sm:h-[52px] max-sm:min-w-[52px] max-sm:text-2xl">
              <Clock3 size={28} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-display text-[60px] max-sm:text-[44px] leading-[0.9] font-bold text-[#111] m-0">2</h3>
              <span className="font-display text-[22px] max-sm:text-base leading-[1.2] font-light uppercase text-[#222] block">DAYS</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Intro + Slider ── */}
      <section className="bg-[#f5f5f5] py-[70px] px-[60px] max-xl:py-[60px] max-xl:px-10 max-lg:py-[50px] max-lg:px-6 max-sm:py-10 max-sm:px-5">
        <div className="max-w-[1450px] mx-auto grid grid-cols-[52%_48%] max-lg:grid-cols-1 gap-12 max-lg:gap-9 items-center">

          {/* LEFT */}
          <div className="w-full">
            <h2 className="font-display text-[clamp(36px,4vw,60px)] max-lg:text-[44px] max-sm:text-[34px] leading-[0.95] font-bold uppercase text-[#111111] m-0 mb-7 -tracking-[1px]">
              FIND THE RIGHT FRANCHISE<br />
              FOR YOU AT THE WORLD&apos;S<br />
              LEADING FRANCHISE EVENT
            </h2>

            <p className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
              The IFE is the premier franchise show in the U.S with a powerful
              international impact. Entrepreneurs and prospective business owners
              from all 43 states and 64 countries travel to the IFE to meet
              face-to-face with over 200+ exhibiting franchise brands and industry
              experts.
            </p>

            <p className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
              The International Franchise Expo produced in exclusive sponsorship
              with the Department of Commerce, sets global standards in
              franchising excellence.
            </p>

            <p className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
              Register today, and let&apos;s find your perfect match.
            </p>
          </div>

          {/* RIGHT — slider */}
          <IntroSlider />

        </div>
      </section>

      {/* ── 3-up Feature Cards ── */}
      <section className="bg-[#f5f5f5] pt-10 pb-20">
        <div className="max-w-[1450px] mx-auto px-[60px] max-xl:px-10 max-lg:px-6 max-sm:px-5">
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-7 max-lg:gap-5">
            {cards.map((card) => (
              <div key={card.title} className="bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-transform duration-250 ease-out flex flex-col h-full hover:-translate-y-1 group">
                <div
                  className="w-full h-[200px] max-lg:h-[220px] bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="p-[24px_22px_22px] flex flex-col flex-1">
                  <h3 className="font-display text-[22px] leading-none uppercase text-[#111111] mb-3.5 -tracking-[0.4px]">{card.title}</h3>
                  <p className="font-body text-[12px] leading-snug text-[#111111] mb-5 font-medium flex-1">{card.description}</p>
                  <Link
                    href={card.href}
                    className="relative inline-flex items-center justify-start h-9 pl-[18px] pr-[42px] rounded-full bg-[#005eb8] text-white no-underline font-display text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 border-none outline-none shadow-none align-self-start after:content-['›'] after:absolute after:right-[3px] after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-6 after:rounded-full after:bg-white after:flex after:items-center after:justify-center after:text-[#005eb8] after:text-base after:font-bold after:leading-none hover:bg-[#004f99]"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialSlider />
        
      {/* ── News ── */}
      <section className="bg-white py-[60px] pb-[80px] max-lg:py-10 max-lg:pb-[50px] max-sm:py-[30px] max-sm:pb-10">
        <div className="w-full max-w-[1450px] mx-auto px-[60px] max-xl:px-10 max-lg:px-6 max-sm:px-[18px]">

          <div className="flex items-center justify-between mb-10 max-lg:flex-col max-lg:items-start max-lg:gap-[18px] max-lg:mb-[28px]">
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] max-lg:text-[2.2rem] max-sm:text-[1.8rem] leading-none font-bold uppercase text-[#111111] m-0">NEWS &amp; BLOG</h2>
            <Link href="/resources/blog" className="group relative inline-flex items-center bg-[#005eb8] text-white no-underline font-display text-[0.95rem] max-sm:text-[0.85rem] font-medium uppercase tracking-wider transition-colors duration-200 shrink-0 rounded-[999px] h-[50px] pl-[26px] pr-[62px] max-sm:h-[44px] max-sm:pl-5 max-sm:pr-[54px] hover:bg-[#004f99]">
              ALL NEWS
              <span className="absolute right-[5px] top-1/2 -translate-y-1/2 rounded-full bg-[#d9d9d9] flex items-center justify-center text-[#1d2357] font-semibold border-2 border-[#1d2357] leading-none transition-all duration-200 group-hover:bg-white group-hover:scale-[1.04] w-10 h-10 text-[1.5rem] max-sm:w-[34px] max-sm:h-[34px] max-sm:text-[1.3rem]">›</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-7 max-lg:gap-5">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white no-underline overflow-hidden flex flex-col transition-transform duration-250 ease-out shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div
                  className="w-full h-[220px] max-lg:h-[200px] max-sm:h-[180px] bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-[18px] px-[22px] pb-[22px] max-sm:py-3.5 max-sm:px-4 max-sm:pb-[18px] flex-1">
                  <p className="font-display text-[0.85rem] max-sm:text-[0.75rem] uppercase text-[#005eb8] mb-2.5">{item.date}</p>
                  <h3 className="font-display text-[1.4rem] max-sm:text-[1.15rem] leading-[1.2] font-bold uppercase text-[#111111] m-0">{item.title}</h3>
                </div>
                <div className="h-10 max-sm:h-9 bg-[#005eb8] flex items-center justify-center font-display text-[0.85rem] max-sm:text-[0.75rem] font-medium uppercase text-white tracking-widest transition-colors duration-200 shrink-0 group-hover:bg-[#004f99]">READ MORE</div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── Sponsors ── */}
      <SponsorsSection />
    </>
  );
}