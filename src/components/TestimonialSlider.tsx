"use client";

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    text: 'It was a great experience. I already had a general idea of what franchising business are, but it was great to be able to speak with owners and representatives one on one.',
    author: 'J. Parker',
    role: 'Franchise Expo South Attendee',
  },
  {
    text: 'Loved the show! Liked seeing the many different opportunities available! Thanks for bringing this show to my area!',
    author: 'J. Rodriguez',
    role: 'Franchise Expo West Attendee',
  },
  {
    text: 'Thank you, I totally enjoyed myself while meeting just the right companies and franchisees.',
    author: 'C. Dyer',
    role: 'International Franchise Expo Attendee',
  },
  {
    text: 'Every year I\'m delighted to attend this expo to meet new brands. This year was most impressive. Thank you so much!',
    author: 'D. Miller',
    role: 'Franchise Expo South Attendee',
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === active || isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setIsAnimating(false);
      }, 400);
    },
    [active, isAnimating]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  const current = testimonials[active];

  return (
    <section className="bg-[#222b60] py-[30px] px-5 pb-[36px] text-center overflow-hidden max-lg:py-9 max-lg:px-6 max-lg:pb-7 max-sm:py-7 max-sm:px-[18px] max-sm:pb-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-[Georgia] text-[110px] max-lg:text-[80px] max-sm:text-[60px] leading-[0.7] text-white/90 mb-4 max-sm:mb-2.5">&ldquo;</div>

        <h2 className="font-display text-[clamp(24px,3vw,40px)] max-sm:text-[20px] max-sm:mb-[14px] leading-tight font-bold uppercase text-white mb-5 -tracking-[0.5px]">
          HEAR WHAT OUR ATTENDEES HAVE TO SAY
        </h2>

        <div className="min-h-[220px] max-lg:min-h-[200px] max-sm:min-h-[180px] flex flex-col items-center justify-center">
          <p
            className={`max-w-[960px] mx-auto mb-4 font-body text-[clamp(18px,2vw,28px)] max-lg:text-[19px] max-sm:text-sm leading-[1.45] font-semibold text-white italic max-sm:mb-2.5 transition-all duration-400 ease-in-out ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
            key={active}
          >
            &ldquo;{current.text}&rdquo;
          </p>

          <div
            className={`text-white text-[22px] max-sm:text-base leading-none mb-2 transition-all duration-400 ease-in-out ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
            key={`mini-${active}`}
          >
            ...
          </div>

          <p
            className={`font-body text-[17px] max-sm:text-sm font-bold text-white mb-1 transition-all duration-400 ease-in-out ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
            key={`author-${active}`}
          >
            {current.author}
          </p>

          <p
            className={`font-body text-sm max-sm:text-xs font-semibold text-white/85 mb-6.5 max-sm:mb-4.5 transition-all duration-400 ease-in-out ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
            key={`role-${active}`}
          >
            {current.role}
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-[13px] h-[13px] max-sm:w-2.5 max-sm:h-2.5 rounded-full border-none bg-white/55 cursor-pointer p-0 transition-all duration-200 hover:bg-white/85 ${
                i === active ? "!bg-[#00a6ff] border-2 border-white scale-[1.15]" : ""
              }`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
