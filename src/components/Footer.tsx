import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGrid}>

          {/* Column 1: Brand */}
          <div className={styles.footerCol}>
            <p className={styles.colLabel}>Organized by</p>
            <div className={styles.brandName}>FranchiseExpo</div>
            <p className={styles.brandTagline}>Leading you on the path to successful franchising</p>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 478 478" width="20" height="20" fill="currentColor">
                  <path d="M478 291v177H376V303c0-41-15-70-52-70-28 0-45 19-52 37-3 7-4 16-4 25v172H165s1-279 0-308h102v44c14-21 38-51 92-51C427 152 478 196 478 291zM58 11C23 11 0 34 0 64c0 30 22 53 57 53H57c36 0 58-24 58-53C115 34 93 11 58 11zM6 468h102V159H6v309z" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 430 430" width="20" height="20" fill="currentColor">
                  <path d="M158 83s0 59 0 59h-43v72h43v215h89V214h60s6-35 8-73h-68s0-42 0-50c0-7 10-17 19-17h49V0H250C156 0 158 72 158 83z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                  <path d="M224 141c-64 0-115 51-115 115s51 115 115 115 115-51 115-115-51-115-115-115zm0 190c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75zm146-194c0 15-12 27-27 27s-27-12-27-27 12-27 27-27 27 12 27 27zm76 27c-2-36-10-68-36-94s-58-34-94-36c-37-2-148-2-185 0-36 2-68 10-94 36S1 128 0 163c-2 37-2 148 0 185 2 36 10 68 36 94s58 34 94 36c37 2 148 2 185 0 36-2 68-10 94-36s34-58 36-94c2-37 2-148 0-185zM399 388c-8 20-23 35-43 43-30 12-100 9-132 9s-103 3-132-9c-20-8-35-23-43-43-12-30-9-100-9-132s-3-103 9-132c8-20 23-35 43-43 30-12 100-9 132-9s103-3 132 9c20 8 35 23 43 43 12 30 9 100 9 132s3 103-9 132z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Venue */}
          <div className={styles.footerCol}>
            <p className={styles.colLabel}>Venue / Location</p>
            <ul className={styles.venueList}>
              <li><strong>New York City, New York</strong></li>
              <li>Javits Center, Hall 1C</li>
              <li>429 11th Ave</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>

          {/* Column 3: Opening Times */}
          <div className={styles.footerCol}>
            <p className={styles.colLabel}>Opening Times</p>
            <div className={styles.openingTime}>
              <strong>Friday May 29th 2026</strong>
              <span>10AM – 5PM</span>
            </div>
            <div className={styles.openingTime}>
              <strong>Saturday May 30th 2026</strong>
              <span>10AM – 4PM</span>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.footerCol}>
            <p className={styles.colLabel}>Contact</p>
            <p className={styles.phone}><strong>Tel: +1 201 226 1130</strong></p>

            <div className={styles.contactGroup}>
              <p className={styles.contactGroupLabel}>Request Exhibitor Info</p>
              <p>Justin Wood (240) 398-1385</p>
              <a href="mailto:info@yourexpo.com" className={styles.contactEmail}>
                info@yourexpo.com
              </a>
            </div>

            <div className={styles.contactGroup}>
              <p className={styles.contactGroupLabel}>Attendee & Conference Info</p>
              <p>Linda Thompson (201) 881-1646</p>
              <a href="mailto:attendees@yourexpo.com" className={styles.contactEmail}>
                attendees@yourexpo.com
              </a>
            </div>

            <div className={styles.contactGroup}>
              <p className={styles.contactGroupLabel}>Exhibitor Services</p>
              <p>Murphy Connolly (631) 335-5696</p>
              <a href="mailto:exhibitors@yourexpo.com" className={styles.contactEmail}>
                exhibitors@yourexpo.com
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <Link href="/privacy-policy" className={styles.privacyLink}>
            Privacy Policy
          </Link>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} FranchiseExpo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
