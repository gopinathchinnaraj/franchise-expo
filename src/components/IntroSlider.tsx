'use client';

import { useEffect, useState } from 'react';
import styles from './IntroSlider.module.css';

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
        <div className={styles.sliderWrap}>
            <div
                className={styles.sliderTrack}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((img, i) => (
                    <div
                        key={i}
                        className={styles.slide}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            <div className={styles.dots}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${current === i ? styles.activeDot : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}