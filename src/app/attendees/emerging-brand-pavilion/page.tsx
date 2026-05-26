import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Emerging Brand Pavilion',
  description:
    'The Emerging Brands Pavilion is one of the busiest aisles of the show floor and dedicated to up-and-coming franchises. Discover the future of franchising.',
};

const features = [
  {
    icon: '🔍',
    heading: 'Discover The Next Big Thing',
    body: 'Be among the first to discover fresh concepts before they become household names. Gain access to early-stage investment opportunities and lock in favorable territories while they\'re still available.',
  },
  {
    icon: '🤝',
    heading: 'Direct Access to Founders',
    body: 'In the Emerging Brands Pavilion, you\'ll often meet with founders or top executives. This gives you the chance to hear firsthand the passion, vision, and growth potential behind the businesses.',
  },
  {
    icon: '🚀',
    heading: 'Be a Trendsetter',
    body: 'Joining these brands early positions you as a trendsetter in your market. Stay ahead of industry trends and set yourself apart with a fresh, exciting concept.',
  },
  {
    icon: '📈',
    heading: 'Growth Potential',
    body: 'These are the brands poised for rapid expansion. By visiting the Emerging Brands Pavilion, you\'ll be exploring high-growth opportunities that can lead to significant returns as these franchises scale.',
  },
];

export default function EmergingBrandPavilionPage() {
  return (
    <>
      <PageBanner
        title="Emerging Brand Pavilion"
        subtitle="One of the busiest aisles of the show floor — dedicated to up-and-coming franchises."
      />

      {/* Hero intro */}
      <section className="section">
        <div className="container">
          <div className={styles.introBlock}>
            <div className={styles.introText}>
              <h2 className={styles.introHeading}>
                The Emerging Brands Pavilion is one of the busiest aisles of the show floor and
                dedicated to up-and-coming franchises.
              </h2>
              <p className={styles.introBody}>
                Discover the future of franchising by visiting the Emerging Brands Pavilion — where
                tomorrow's leading brands are waiting for you today.
              </p>
            </div>
            <div
              className={styles.introImage}
              style={{ backgroundImage: "url('/images/emerging-pavilion.webp')" }}
            />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section section--grey">
        <div className="container">
          <h2 className={`section-title ${styles.featuresHeading}`}>Why Visit the Pavilion?</h2>
          <div className={`grid grid-2 ${styles.featuresGrid}`}>
            {features.map((f) => (
              <div key={f.heading} className={styles.featureItem}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <h4 className={styles.featureHeading}>{f.heading}</h4>
                  <p className={styles.featureBody}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.contactLeft}>
              <h3 className={styles.contactTitle}>Get In Touch</h3>
              <p className={styles.contactDesc}>
                If you are an up-and-coming franchise brand with 10 units or less and are interested in
                learning more about how you can showcase your brand in the Emerging Pavilion, contact:
              </p>
            </div>
            <div className={styles.contactRight}>
              <p className={styles.contactName}>Justin Wood</p>
              <p className={styles.contactPhone}>(240) 398-1385</p>
              <a href="mailto:exhibitors@yourexpo.com" className={styles.contactEmail}>
                exhibitors@yourexpo.com
              </a>
              <Link href="/register" className={`btn btn-primary ${styles.contactCta}`}>
                Register to Attend
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
