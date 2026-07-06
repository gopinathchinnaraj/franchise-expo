'use client';

import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

const attendeeCards = [
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Emerging_Pavilion.webp',
    title: 'Emerging Brand Pavilion',
    description:
      "Looking for the next big franchise opportunity? The Emerging Brand Pavilion is where you'll find the newest franchise concepts. Meet visionary founders, explore fresh business models, and get in on the ground floor of exciting new brands.",
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Conference_Agenda.webp',
    title: 'Conference Agenda',
    description:
      'We offer a highly diverse conference agenda that covers a variety of fundamental topics around franchising.',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Exhibitors.webp',
    title: 'Exhibitors',
    description:
      'At the International Franchise Expo, you have the power to meet and engage with a variety of franchise brands from every industry.',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/The_Business_Resource_Center.webp',
    title: 'Business Resource Center',
    description:
      'Explore a variety of suppliers that are critical in developing your franchise, and form valuable business connections.',
  },
];

export default function AttendeeInfoPage() {
  const [flipped, setFlipped] = useState<boolean[]>(Array(attendeeCards.length).fill(false));

  const toggleFlip = (index: number) => {
    setFlipped((current) =>
      current.map((value, idx) => (idx === index ? !value : value))
    );
  };

  return (
    <>
      <PageBanner
        title="Attendee Info"
        ctaText="Register to Attend"
      />

      <section className="py-20 px-5">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Intro paragraph */}
          <div className="max-w-full mx-auto mb-[70px] text-start">
            <p className="text-base font-semibold leading-[1.9] text-[#444]">
              Whether you&apos;re an aspiring entrepreneur ready to take control of your future or a current
              business owner exploring expansion through franchising, the Franchise Expo is your gateway
              to success. This premier event provides the tools, resources, and connections needed to
              navigate the world of franchising confidently. Discover a wide range of franchise
              opportunities, attend expert-led seminars, and learn from industry leaders.
            </p>
          </div>

          {/* 4-up flip cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {attendeeCards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden h-[360px] max-lg:h-[320px] max-md:h-[300px] max-sm:h-[260px] block no-underline bg-black w-full cursor-pointer"
                onClick={() => toggleFlip(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleFlip(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={flipped[index]}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-600 ease-out group-hover:scale-105 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/45 after:via-black/12 after:via-[45%] after:to-black/3"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                <div className={`absolute left-0 bottom-0 w-full h-full bg-[#18B7D0] px-6 pb-6 max-lg:px-5 max-lg:pb-5 max-md:px-4 max-md:pb-4 z-10 flex flex-col items-center justify-start transition-transform duration-[550ms] ease-out before:content-[''] before:absolute before:-top-2.5 before:left-1/2 before:-translate-x-1/2 before:border-x-8 before:border-x-transparent before:border-b-[10px] before:border-b-[#144380] ${flipped[index] ? 'translate-y-0' : 'translate-y-[calc(100%-80px)] max-lg:translate-y-[calc(100%-72px)] max-md:translate-y-[calc(100%-66px)] max-sm:translate-y-[calc(100%-58px)] group-hover:translate-y-0'}`}>
                  <div className="h-20 max-lg:h-[72px] max-md:h-[66px] max-sm:h-[58px] w-full flex items-center justify-center shrink-0">
                    <h5 className="font-display text-[1.35rem] !leading-[1.15] font-bold uppercase text-center text-white m-0 !p-0 px-2 max-lg:text-[1.2rem] max-md:text-[1.05rem] max-sm:text-[0.9rem]">{card.title}</h5>
                  </div>
                  <p className={`mt-4 text-white text-[0.92rem] max-lg:text-[0.88rem] max-md:text-[0.85rem] max-sm:text-[0.82rem] leading-[1.75] max-md:leading-[1.65] max-sm:leading-[1.6] transition-all duration-[450ms] ease-out text-center w-full ${flipped[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0'}`}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}