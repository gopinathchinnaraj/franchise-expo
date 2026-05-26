'use client';

import { useState } from 'react';
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
    href: '/conference-agenda',
    children: [
      { label: 'Conference Agenda', href: '/conference-agenda' },
      { label: 'Workshops', href: '/conference-agenda/workshops' },
    ],
  },
  {
    label: 'Resources',
    href: '/blog',
    children: [
      { label: 'Blog', href: '/blog' },
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

  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <div className={styles.logoContent}>
                <span className={styles.logoText}>FranchiseExpo</span>
                <div className={styles.logoDetails}>
                  <span className={styles.logoLocation}>New York City, New York</span>
                  <span className={styles.logoDates}>May 29th – 30th 2026</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.children && <span className={styles.chevron}>▾</span>}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <ul className={styles.dropdown}>
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

          {/* CTA Buttons */}
          <div className={styles.headerCtas}>
            <Link href="/register" className="btn btn-primary">
              Register to Attend
            </Link>
            <Link href="/exhibitors/why-exhibit" className="btn btn-secondary">
              Exhibit / Sponsor
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileOpen ? styles.hamburgerOpen : ''} />
            <span className={mobileOpen ? styles.hamburgerOpen : ''} />
            <span className={mobileOpen ? styles.hamburgerOpen : ''} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
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
                >
                  {item.label}
                  <span>{openDropdown === item.label ? '−' : '+'}</span>
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
              <Link href="/register" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Register to Attend
              </Link>
              <Link href="/exhibitors/why-exhibit" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', marginTop: 8 }}>
                Exhibit / Sponsor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
