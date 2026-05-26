import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Attendee Info',
  description:
    "Whether you're an aspiring entrepreneur or a current business owner exploring expansion through franchising, the Franchise Expo is your gateway to success.",
};

const attendeeCards = [
  {
    image: '/images/emerging-pavilion.webp',
    title: 'Emerging Brand Pavilion',
    description:
      "Looking for the next big franchise opportunity? The Emerging Brand Pavilion is where you'll find the newest franchise concepts. Meet visionary founders, explore fresh business models, and get in on the ground floor of exciting new brands.",
    href: '/attendees/emerging-brand-pavilion',
  },
  {
    image: '/images/conference-agenda.webp',
    title: 'Conference Agenda',
    description:
      'We offer a highly diverse conference agenda covering fundamental topics in franchising. Whether new to franchising or experienced, there is always something new to learn from our workshops and sessions.',
    href: '/conference-agenda',
  },
  {
    image: '/images/exhibitors.webp',
    title: 'Exhibitors',
    description:
      'At the Franchise Expo, you have the power to meet and engage with a variety of franchise brands from every industry. Talk directly with franchisors, ask questions, and explore opportunities that match your goals.',
    href: '/exhibitors/exhibitor-list',
  },
  {
    image: '/images/business-resource-center.webp',
    title: 'The Business Resource Center',
    description:
      'Explore a variety of suppliers that are critical in developing your franchise, and form valuable business connections.',
    href: '/attendees/business-resource-center',
  },
];

export default function AttendeeInfoPage() {
  return (
    <>
      <PageBanner
        title="Attendee Info"
        subtitle="Everything you need to make the most of your Franchise Expo experience."
      />

      <section className="section">
        <div className="container">
          {/* Intro paragraph */}
          <div className={styles.introPara}>
            <p>
              Whether you're an aspiring entrepreneur ready to take control of your future or a current
              business owner exploring expansion through franchising, the Franchise Expo is your gateway
              to success. This premier event provides the tools, resources, and connections needed to
              navigate the world of franchising confidently. Discover a wide range of franchise
              opportunities, attend expert-led seminars, and learn from industry leaders.
            </p>
          </div>

          {/* 4-up cards */}
          <div className={`grid grid-4 ${styles.cardsGrid}`}>
            {attendeeCards.map((card) => (
              <Link key={card.title} href={card.href} className={`card ${styles.infoCard}`}>
                <div
                  className={styles.cardImg}
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="card-body">
                  <h5 className={styles.cardTitle}>{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <span className={styles.cardCta}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to attend?</h2>
              <p className={styles.ctaText}>
                May 29–30, 2026 · Javits Center, New York City
              </p>
            </div>
            <Link href="/register" className="btn btn-primary">
              Register to Attend
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
