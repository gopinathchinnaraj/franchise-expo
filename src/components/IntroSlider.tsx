'use client';

import { useEffect, useState } from 'react';

const slides = [
    'https://www.franchiseexpo.com/images/slider/cache/54c1e4c9b0de8a2285420d650a8a3cba/SPEAKING-OPPORTUNITIES.webp',
    'https://www.franchiseexpo.com/images/slider/cache/74974cc343d2cfd46ed11db32f10b24e/REGISTER-TO-ATTEND.webp',
    'https://www.franchiseexpo.com/images/slider/cache/61155a3ffbfcd29a790dee32d296a0b5/EXHIBITING-SPONSORING.webp',
];

export default function IntroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-[2px]">
            <div
                className="flex transition-transform duration-700 ease-in-out w-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((img, i) => (
                    <div
                        key={i}
                        className="min-w-full h-[410px] bg-cover bg-center shrink-0 max-md:h-[380px] max-sm:h-[260px]"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            <div className="flex justify-center gap-3.5 mt-5">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3.5 h-3.5 max-sm:w-[11px] max-sm:h-[11px] rounded-full border-none p-0 cursor-pointer transition-colors duration-250 ${current === i ? 'bg-[#0077cc]' : 'bg-[#d2d2d2]'}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}