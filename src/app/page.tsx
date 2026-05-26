import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'FranchiseExpo – New York 2026',
  description:
    'Find the right franchise for you at the world\'s leading franchise event. May 29–30, 2026 at the Javits Center, New York City.',
};

/* ─── Static data ─── */
const stats = [
  { number: '150+', label: 'Exhibitors' },
  { number: '40+', label: 'Workshops and Sessions' },
  { number: '2', label: 'Days' },
];

const cards = [
  {
    title: 'Register to Attend',
    description:
      'Register now to attend the International Franchise Expo and receive updated show information.',
    cta: 'Register to Attend',
    href: '/register',
    image: '/images/register.webp',
  },
  {
    title: 'Exhibiting & Sponsoring',
    description:
      'Looking to sponsor or exhibit at the Franchise Expo? Click below to get more information on both opportunities.',
    cta: 'Learn More',
    href: '/exhibitors/why-exhibit',
    image: '/images/exhibiting.webp',
  },
  {
    title: 'Speaking Opportunities',
    description:
      'Looking to speak at the Franchise Expo? We\'d love to have you! Find out more below.',
    cta: 'Learn More',
    href: '/speaker-application',
    image: '/images/speaking.webp',
  },
];

const testimonials = [
  {
    quote:
      '"Thank you, I totally enjoyed myself while meeting just the right companies and franchisees."',
    author: 'C. Dyer',
    role: 'Expo Attendee',
  },
  {
    quote:
      '"It was a great experience. I already had a general idea of what franchising businesses are, but it was great to be able to speak with owners one on one."',
    author: 'J. Parker',
    role: 'Expo Attendee',
  },
  {
    quote:
      '"Loved the show! Liked seeing the many different opportunities available! Thanks for bringing this show to my area!"',
    author: 'J. Rodriguez',
    role: 'Expo Attendee',
  },
  {
    quote:
      '"Every year I\'m delighted to attend this expo to meet new brands. This year was most impressive. Thank you so much!"',
    author: 'D. Miller',
    role: 'Expo Attendee',
  },
];

const newsItems = [
  {
    date: '03 March 2026',
    title: 'The Top Advantages of Franchising Your Business',
    href: '/blog/top-advantages-franchising',
  },
  {
    date: '03 March 2026',
    title: 'Top Franchise Opportunities: A Complete Guide',
    href: '/blog/top-franchise-opportunities',
  },
  {
    date: '20 February 2026',
    title: 'Can I Get a Loan to Buy a Franchise? Yes, Here\'s How',
    href: '/blog/franchise-loan-guide',
  },
];

const platinumSponsors = ['Entrepreneur'];
const goldSponsors = [
  'BeTheBoss',
  'BizBuySell',
  'Emma Inc.',
  'F.C. Dadson',
  'MetAiBlock',
  'Stark & Stark',
];
const silverSponsors = [
  'Guidant',
  'Sesimi',
  'Signation Sign Group',
  "The Entrepreneur's Source",
  'The Franchise Firm',
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Banner with Video Background ── */}
      <section className={styles.hero}>
        {/* Video/Image */}
        <div className={styles.heroMedia}>
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/highlights-poster.webp"
          >
            <source src="/images/highlights.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Blue Overlay Content */}
        <div className={styles.heroOverlayPanel}>
          <div className={styles.heroContent}>
            <p className={styles.heroDate}>
              MAY 29TH - 30TH 2026 | NEW YORK CITY, NEW YORK
            </p>

            <h1 className={styles.heroTitle}>
              YOUR FRANCHISE
              <br />
              FUTURE STARTS HERE
            </h1>

            <p className={styles.heroSub}>
              Step into a world of franchise possibilities waiting to be explored.
            </p>

            <p className={styles.heroSub}>
              Hear from experts who’ll equip you with the tools to make your
              business ownership dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsBar}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>👤</div>
            <div>
              <h3>150+</h3>
              <p>EXHIBITORS</p>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>🎤</div>
            <div>
              <h3>40+</h3>
              <p>WORKSHOPS AND SESSIONS</p>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIcon}>🕒</div>
            <div>
              <h3>2</h3>
              <p>DAYS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + Cards ── */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2 className={styles.introHeading}>
                Find The Right Franchise For You at the World's Leading Franchise
                Event
              </h2>
              <p>
                The Franchise Expo is the premier show in the U.S with a powerful
                international impact. Entrepreneurs and prospective business
                owners from all 50 states and 64 countries travel to the Expo to
                meet face-to-face with over 200+ exhibiting franchise brands and
                industry experts. You'll find all the resources you need to
                succeed in franchise ownership under one roof.
              </p>
              <p>
                Sets global standards in franchising excellence. We've connected
                thousands of aspiring entrepreneurs to their perfect franchise.
              </p>
              <p>Register today, and let's find your perfect match.</p>
              <Link
                href="/register"
                className={`btn btn-primary ${styles.introCta}`}
              >
                Register Now
              </Link>
            </div>
            <div className={styles.introImageGrid}>
              <div
                className={styles.introImg}
                style={{ backgroundImage: "url('/images/exhibiting.webp')" }}
              />
              <div
                className={styles.introImg}
                style={{ backgroundImage: "url('/images/register.webp')" }}
              />
              <div
                className={styles.introImg}
                style={{ backgroundImage: "url('/images/speaking.webp')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-up Cards ── */}
      <section className={`section section--grey`}>
        <div className="container">
          <div className={`grid grid-3 ${styles.cardsGrid}`}>
            {cards.map((card) => (
              <div key={card.title} className={`card ${styles.featureCard}`}>
                <div
                  className={styles.cardImg}
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="card-body">
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    {card.title}
                  </h3>
                  <p className="card-text">{card.description}</p>
                  <Link href={card.href} className="btn btn-primary">
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonial-section">
        <div className="container">
          <div className={styles.testimonialsWrap}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <svg className={styles.quoteIcon} viewBox="0 0 40 30" fill="none">
                  <path
                    d="M0 30V18C0 8 6 2 18 0l2 4C12 6 9 10 9 18h9v12H0zm22 0V18C22 8 28 2 40 0l2 4C34 6 31 10 31 18h9v12H22z"
                    fill="#1cb7cf"
                    opacity="0.4"
                  />
                </svg>
                <p className="testimonial-text">{t.quote}</p>
                <p className="testimonial-author">{t.author}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="section">
        <div className="container">
          <div className={styles.newsHeader}>
            <h2 className="section-title">News &amp; Blog</h2>
            <Link href="/blog" className="btn btn-secondary">
              All News
            </Link>
          </div>
          <div className={`grid grid-3 ${styles.newsGrid}`}>
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`card ${styles.newsCard}`}
              >
                <div className={styles.newsImgPlaceholder} />
                <div className="card-body">
                  <p className="news-date">{item.date}</p>
                  <h4 className={styles.newsTitle}>{item.title}</h4>
                  <span className={styles.readMore}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section className="section section--grey section--narrow">
        <div className="container">
          <h2 className={`section-title ${styles.sponsorTitle}`}>
            Expo Sponsors
          </h2>

          <div className={styles.sponsorTier}>
            <p className={styles.sponsorTierLabel}>Platinum Sponsors</p>
            <div className="sponsor-strip">
              {platinumSponsors.map((name) => (
                <div key={name} className={styles.sponsorName}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sponsorTier}>
            <p className={styles.sponsorTierLabel}>Gold Sponsors</p>
            <div className="sponsor-strip">
              {goldSponsors.map((name) => (
                <div key={name} className={styles.sponsorName}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sponsorTier}>
            <p className={styles.sponsorTierLabel}>Silver Sponsors</p>
            <div className="sponsor-strip">
              {silverSponsors.map((name) => (
                <div key={name} className={styles.sponsorName}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}