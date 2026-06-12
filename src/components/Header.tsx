'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Attendees',
    href: '/attendees/attendee-info',
    children: [
      { label: 'Attendee Info', href: '/attendees/attendee-info' },
      { label: 'Exhibitor List', href: '/exhibitors/exhibitor-list' },
      { label: 'Emerging Brand Pavilion', href: '/attendees/emerging-brand-pavilion' },
      { label: 'Business Resource Center', href: '/attendees/business-resource-center' },
      { label: 'Attendee Testimonials', href: '/attendees/testimonials' },
      { label: 'Travel Information', href: '/attendees/travel-information' },
    ],
  },
  {
    label: 'Exhibitors',
    href: '/exhibitors/exhibitor-list',
    children: [
      { label: 'Exhibitor List', href: '/exhibitors/exhibitor-list' },
      { label: 'Floorplan', href: '/exhibitors/floorplan' },
      { label: 'Why Exhibit', href: '/exhibitors/why-exhibit' },
      { label: 'Show Sponsors', href: '/exhibitors/show-sponsors' },
      { label: 'Exhibitor Testimonials', href: '/exhibitors/testimonials' },
      { label: 'IFE Unplugged', href: '/exhibitors/ife-unplugged' },
      { label: 'Promotional Opportunities', href: '/exhibitors/promotional-opportunities' },
      { label: 'Travel Information', href: '/exhibitors/travel-information' },
      { label: 'NY Registration and Domestic Trade Show Exemption', href: '/exhibitors/ny-registration-and-domestic-trade-show-exemption' },
    ],
  },
  {
    label: 'Conference Agenda',
    href: '/conference',
    children: [
      { label: 'Conference Agenda', href: '/conference' },
      { label: 'Workshops', href: '/conference-agenda/workshops' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources/blog',
    children: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Podcasts', href: '/resources/podcasts' },
      { label: 'Show Gallery', href: '/resources/show-gallery' },
    ],
  },
  {
    label: 'Connect',
    href: '/connect/about-us',
    children: [
      { label: 'About Us', href: '/connect/about-us' },
      { label: 'Our Team', href: '/connect/our-team' },
      { label: 'Contact Us', href: '/connect/contact-us' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Handle mouse enter on nav item
  const handleMouseEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  // Handle mouse leave on nav item
  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeoutRef.current = null;
    }, 150); // 150ms delay gives user time to move mouse to dropdown
  }, []);

  // Handle mouse enter on dropdown to keep it open
  const handleDropdownMouseEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  }, []);

  // Handle mouse leave on dropdown
  const handleDropdownMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeoutRef.current = null;
    }, 150);
  }, []);

  // Close mobile menu when screen resizes above breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>

        {/* ── Logo ── */}
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoMark}>
              <span className={styles.logoMarkTop}>International</span>
              <span className={styles.logoMarkMid}>Franchise</span>
              <div className={styles.logoMarkBot}>
                <span className={styles.logoExpo}>Expo</span>
                <span className={styles.logoSlash}>/</span>
                <span className={styles.logoCity}>New York</span>
              </div>
            </div>
            <div className={styles.logoDivider} />
            <div className={styles.logoDetails}>
              <span className={styles.logoLocation}>New York City, New York</span>
              <span className={styles.logoDates}>May 29th – 30th 2026</span>
            </div>
          </Link>
        </div>

        {/* ── Desktop Nav ── */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && (
                    <span className={styles.chevron}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16.379 9.336"
                        width="12"
                        height="12"
                      >
                        <path
                          fill="currentColor"
                          d="M8.19,5.241L15.56,0l.819.819-8.189,8.517L0,.819l.819-.819,7.371,5.241Z"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <ul
                    className={styles.dropdown}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CTA Buttons ── */}
        <div className={styles.headerCtas}>
          <Link
            href="/register"
            className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}
          >
            Register to Attend
            <span className={styles.ctaBtnArrow}>›</span>
          </Link>
          <Link
            href="/exhibitors/why-exhibit"
            className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}
          >
            Exhibit / Sponsor
            <span className={styles.ctaBtnArrow}>›</span>
          </Link>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={mobileOpen ? styles.hamburgerOpen : ''} />
          <span className={mobileOpen ? styles.hamburgerOpen : ''} />
          <span className={mobileOpen ? styles.hamburgerOpen : ''} />
        </button>
      </div>

      {/* ── Mobile Nav ── */}
      {mobileOpen && (
        <div className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.label} className={styles.mobileNavItem}>
                <button
                  className={styles.mobileNavToggle}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <span className={styles.mobileNavToggleIcon}>
                    {openDropdown === item.label ? '−' : '+'}
                  </span>
                </button>
                {openDropdown === item.label && item.children && (
                  <ul className={styles.mobileDropdown}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={styles.mobileDropdownLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={styles.mobileCtas}>
              <Link
                href="/register"
                className={`${styles.mobileCtaBtn} ${styles.mobileCtaBtnPrimary}`}
                onClick={() => setMobileOpen(false)}
              >
                Register to Attend
              </Link>
              <Link
                href="/exhibitors/why-exhibit"
                className={`${styles.mobileCtaBtn} ${styles.mobileCtaBtnSecondary}`}
                onClick={() => setMobileOpen(false)}
                style={{ marginTop: 8 }}
              >
                Exhibit / Sponsor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}