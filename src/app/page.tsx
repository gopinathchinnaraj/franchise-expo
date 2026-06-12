// "use client"
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

// ✅ CORRECT import path — update this to wherever you place Hero.tsx
import Hero from '@/components/Hero';
import IntroSlider from '@/components/IntroSlider';
import { useState, useEffect } from 'react';
import { Users, Mic, Clock3 } from "lucide-react";
import { SP } from 'next/dist/shared/lib/utils';
import SponsorsSection from '@/components/sponsor';

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
    href: '/speaker-application',
    image: 'https://www.franchiseexpo.com/images/west/Home/SPEAKING-OPPORTUNITIES.webp',
  },
];

const testimonials = [
  {
    quote: '"Thank you, I totally enjoyed myself while meeting just the right companies and franchisees."',
    author: 'C. Dyer',
    role: 'Expo Attendee',
  },
  {
    quote: '"It was a great experience. I already had a general idea of what franchising businesses are, but it was great to be able to speak with owners one on one."',
    author: 'J. Parker',
    role: 'Expo Attendee',
  },
  {
    quote: '"Loved the show! Liked seeing the many different opportunities available! Thanks for bringing this show to my area!"',
    author: 'J. Rodriguez',
    role: 'Expo Attendee',
  },
  {
    quote: '"Every year I\'m delighted to attend this expo to meet new brands. This year was most impressive. Thank you so much!"',
    author: 'D. Miller',
    role: 'Expo Attendee',
  },
];

const newsItems = [
  {
    date: '03 March 2026',
    title: 'The Top Advantages of Franchising Your Business',
    href: '/blog/top-advantages-franchising',
    image: 'https://www.franchiseexpo.com/images/A_businessperson_holds_a_magnifying_glass_over_a_city_finding_the_advantages_of_franchising_a_business.webp',
  },
  {
    date: '03 March 2026',
    title: 'Top Franchise Opportunities: A Complete Guide',
    href: '/blog/top-franchise-opportunities',
    image: 'https://www.franchiseexpo.com/images/A_laptop_with_growth_charts_on_a_desk_for_researching_top_franchise_opportunities.webp',
  },
  {
    date: '20 February 2026',
    title: "Can I Get a Loan to Buy a Franchise? Yes, Here's How",
    href: '/blog/franchise-loan-guide',
    image: 'https://www.franchiseexpo.com/images/can-i-get-a-loan-to-buy-a-franchise-yes-heres-how-927431.png',
  },
];

const platinumSponsors = ['Entrepreneur'];
const goldSponsors = ['BeTheBoss', 'BizBuySell', 'Emma Inc.', 'F.C. Dadson', 'MetAiBlock', 'Stark & Stark'];
const silverSponsors = ['Guidant', 'Sesimi', 'Signation Sign Group', "The Entrepreneur's Source", 'The Franchise Firm'];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />
      {/* ── Stats Bar ── */}
      <section className={styles.statsBar}>
        <div className={styles.statsGrid}>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <Users size={28} />
            </div>

            <div className={styles.statContent}>
              <h3>150+</h3>
              <span>EXHIBITORS</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <Mic size={28} />
            </div>

            <div className={styles.statContent}>
              <h3>40+</h3>
              <span>
                WORKSHOPS AND
                <br />
                SESSIONS
              </span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <Clock3 size={28} />
            </div>

            <div className={styles.statContent}>
              <h3>2</h3>
              <span>DAYS</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Intro + Image Grid ── */}
      <section className={styles.introSection}>
        <div className={styles.introWrapper}>

          {/* LEFT */}
          <div className={styles.introLeft}>
            <h2 className={styles.introHeading}>
              FIND THE RIGHT FRANCHISE
              <br />
              FOR YOU AT THE WORLD’S
              <br />
              LEADING FRANCHISE EVENT
            </h2>

            <p>
              The IFE is the premier franchise show in the U.S with a powerful
              international impact. Entrepreneurs and prospective business owners
              from all 43 states and 64 countries travel to the IFE to meet
              face-to-face with over 200+ exhibiting franchise brands and industry
              experts.
            </p>

            <p>
              The International Franchise Expo produced in exclusive sponsorship
              with the Department of Commerce, sets global standards in
              franchising excellence.
            </p>

            <p>
              Register today, and let’s find your perfect match.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.sliderWrap}>
            <IntroSlider />
          </div>
        </div>
      </section>

      {/* ── 3-up Feature Cards ── */}
      <section
        className="section section--grey"
        style={{
          background: '#f5f5f5',
          paddingTop: '40px',
          paddingBottom: '80px',
        }}
      >
        <div className="container">
          <div className={`grid grid-3 ${styles.cardsGrid}`}>
            {cards.map((card) => (
              <div key={card.title} className={`card ${styles.featureCard}`}>
                <div className={styles.cardImg} style={{ backgroundImage: `url('${card.image}')` }} />
                <div className="card-body">
                  <h3 className={`card-title ${styles.cardTitle}`}>{card.title}</h3>
                  <p className="card-text">{card.description}</p>
                  <Link href={card.href} className="btn btn-primary">{card.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialInner}>

          {/* QUOTE ICON */}
          <div className={styles.testimonialQuote}>“</div>

          {/* HEADING */}
          <h2 className={styles.testimonialHeading}>
            HEAR WHAT OUR ATTENDEES HAVE TO SAY
          </h2>

          {/* TEXT */}
          <p className={styles.testimonialText}>
            "It was a great experience. I already had a general idea of what
            franchising business are, but it was great to be able to speak with
            owners and representatives one on one."
          </p>

          {/* DOT */}
          <div className={styles.testimonialMini}>...</div>

          {/* AUTHOR */}
          <p className={styles.testimonialAuthor}>J. Parker</p>

          {/* ROLE */}
          <p className={styles.testimonialRole}>
            Franchise Expo South Attendee
          </p>

          {/* DOTS */}
          <div className={styles.testimonialDots}>
            <span className={`${styles.testimonialDot} ${styles.activeDot}`} />
            <span className={styles.testimonialDot} />
            <span className={styles.testimonialDot} />
            <span className={styles.testimonialDot} />
          </div>

        </div>
      </section>

      {/* ── News ── */}
      {/* ── NEWS ── */}
      <section className={styles.newsSection}>
        <div className={styles.newsContainer}>

          <div className={styles.newsTop}>
            <h2 className={styles.newsHeading}>NEWS & BLOG</h2>

            <Link href="/blog" className={styles.newsBtn}>
              ALL NEWS
              <span className={styles.newsBtnArrow}>›</span>
            </Link>
          </div>

          <div className={styles.newsGrid}>

            {newsItems.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className={styles.newsCard}
              >

                <div
                  className={styles.newsImage}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                <div className={styles.newsContent}>
                  <p className={styles.newsDate}>{item.date}</p>

                  <h3 className={styles.newsCardTitle}>
                    {item.title}
                  </h3>
                </div>

                <div className={styles.newsReadMore}>
                  READ MORE
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>
      {/* ── SPONSORS ── */}
      <SponsorsSection/>
    </>
  );
}