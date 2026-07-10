'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from '@/components/UTMLink';
import Image from 'next/image';

const navItems = [
  {
    label: 'Attendees',
    href: '/attendees/attendee-info',
    children: [
      { label: 'Attendee Info', href: '/attendees/attendee-info' },
      { label: 'Exhibitor List', href: '/exhibitors/exhibitor-list' },
      { label: 'Emerging Brand Pavilion', href: '/attendees/emerging-brand-pavilion' },
      { label: 'Business Resource Center', href: '/attendees/business-resource-center' },
      { label: 'Attendees Testimonials', href: '/attendees/testimonials' },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Handle mouse enter on desktop nav item
  const handleMouseEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  // Handle mouse leave on desktop nav item (150ms grace period)
  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeoutRef.current = null;
    }, 150);
  }, []);

  // Keep dropdown open when hovering over it
  const handleDropdownMouseEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  }, []);

  // Close dropdown when leaving it
  const handleDropdownMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeoutRef.current = null;
    }, 150);
  }, []);

  // Close mobile menu when viewport grows to ≥ 1440px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled
          ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
          : 'shadow-[0_1px_0_rgba(0,0,0,0.08),0_2px_12px_rgba(0,0,0,0.06)]'
        }`}
    >
    
      <div
        className={`max-w-[1880px] mx-auto px-[22px] max-[375px]:px-[14px] flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled
            ? 'h-[110px] max-[375px]:h-[80px] gap-2.5'
            : 'h-[135px] max-[375px]:h-[90px] gap-3.5'
          }`}
      >
      
        <div className="flex items-center gap-4 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
          <Link
            href="/"
            className={`flex items-center shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'gap-3' : 'gap-4'}`}
          >
            <Image
              src="/images/franchise-expo-international-new-york.svg"
              alt="Logo"
              width={280}
              height={90}
              priority
              className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-auto ${isScrolled
                  ? 'w-[170px] max-[1525px]:w-[145px] max-[1439px]:w-[140px] max-[600px]:w-[120px] max-[375px]:w-[105px]'
                  : 'w-[205px] max-[1525px]:w-[165px] max-[1439px]:w-[180px] max-[600px]:w-[160px] max-[375px]:w-[135px]'
                }`}
            />
          </Link>

          {/* Divider — desktop only (≥ 1526px) */}
          <div className="w-[1px] bg-[#e0e0e0] shrink-0 h-20 max-[1525px]:hidden" />

          {/* Supported By + date — desktop only (≥ 1526px) */}
          <div className="flex flex-col justify-center shrink-0 max-[1440px]:hidden">
            <div className="flex items-center gap-2.5 mb-1.5 font-bold">
              <span className="font-display font-bold uppercase tracking-wider text-[#020202] text-[13px]">Supported By</span>
              <img
                src="https://www.franchiseexpo.com/images/us-commercial-service.svg"
                alt="U.S. Commercial Service"
                className="w-auto object-contain h-[34px]"
              />
            </div>
            <div className="flex flex-col shrink-0 gap-0.5 min-w-[200px]">
              <span className="font-display font-normal text-[#000000] uppercase leading-[1.1] text-[1.12rem]">New York City, New York</span>
              <span className="font-display font-semibold text-[#000000] uppercase leading-[1.1] text-[1.20rem]">June 4th – 5th 2027</span>
            </div>
          </div>
        </div>

        {/* ── Desktop Nav + CTA Buttons — ≥ 1440px — grouped RIGHT ── */}
        <div className="ml-auto flex items-center max-[1439px]:hidden">
          <nav>
            <ul className="flex items-center gap-0 list-none m-0 p-0">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-[16px] font-display font-medium uppercase tracking-wider text-[#111111] no-underline whitespace-nowrap leading-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#063970] ${
                      isScrolled
                        ? 'py-1.5 px-1.5 text-[13px]'
                        : 'py-2 px-2 text-[13px] max-[1525px]:px-1.5 max-[1525px]:text-[12.5px]'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <span className="inline-flex items-center text-base text-[#1d2357] mt-[-1px] transition-transform duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.379 9.336" width="12" height="12">
                          <path fill="currentColor" d="M8.19,5.241L15.56,0l.819.819-8.189,8.517L0,.819l.819-.819,7.371,5.241Z" />
                        </svg>
                      </span>
                    )}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <ul
                      className="absolute top-[calc(100%+4px)] text-[16px] left-0 bg-white rounded-md shadow-[0_8px_28px_rgba(0,0,0,0.13)] min-w-[230px] list-none p-1.5 m-0 border border-black/7 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block py-[9px] px-[18px] font-display text-[15px] font-medium uppercase tracking-wider text-[#000] no-underline transition-all duration-200 hover:text-[#063970] hover:pl-[24px]"
                          >
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
          <div className="flex gap-4 shrink-0 ml-6 max-[1525px]:ml-3">
            <Link
              href="/register?tab=visitor"
              className={`group inline-flex items-center justify-between rounded-full bg-[#005eb8] text-[#ffffff] no-underline font-display uppercase tracking-wide shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[1px] gap-4 max-[1525px]:gap-2 ${
                isScrolled
                  ? 'h-[47px] min-w-[200px] min-[1825px]:min-w-[280px] max-[1525px]:min-w-[170px] text-[15px] max-[1525px]:text-[13px] leading-[1.3] pl-6 max-[1525px]:pl-4 pr-2'
                  : 'h-[57px] min-w-[220px] min-[1825px]:min-w-[300px] max-[1525px]:min-w-[175px] text-[15px] max-[1525px]:text-[13px] leading-[1.4] pl-6 max-[1525px]:pl-4 pr-2'
              }`} 
            >
              {/* Two-line: ≤ 1824px */}
              <span className="block text-left whitespace-pre-line min-[1825px]:hidden">{`REQUEST ATTENDEE\n INFORMATION`}</span>
              {/* Single-line: ≥ 1825px */}
              <span className="hidden min-[1825px]:block text-left whitespace-nowrap">REQUEST ATTENDEE INFORMATION</span>
              <span
                className={`rounded-full bg-[#ebebeb] flex items-center justify-center text-[#121c4e] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white shrink-0 ${isScrolled ? 'w-[34px] h-[34px]' : 'w-[44px] h-[44px]'
                  }`}
              >
                <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href="/register?tab=exhibitor"
              className={`group relative inline-flex items-center justify-start rounded-full bg-[#034694] text-white no-underline font-display uppercase tracking-wide shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[1px] ${
                isScrolled
                  ? 'h-[47px] min-w-[130px] min-[1825px]:min-w-[190px] max-[1525px]:min-w-[110px] text-[15px] max-[1525px]:text-[13px] leading-[1.2] pl-6 max-[1525px]:pl-4 pr-[54px] max-[1525px]:pr-[46px]'
                  : 'h-[57px] min-w-[150px] min-[1825px]:min-w-[210px] max-[1525px]:min-w-[120px] text-[15px] max-[1525px]:text-[13px] leading-[1.2] pl-7 max-[1525px]:pl-4 pr-[54px] max-[1525px]:pr-[46px]'
              }`}
            >
              {/* Two-line: ≤ 1824px */}
              <span className="block text-left whitespace-pre-line min-[1825px]:hidden">{`EXHIBIT /\nSPONSOR`}</span>
              {/* Single-line: ≥ 1825px */}
              <span className="hidden min-[1825px]:block text-left whitespace-nowrap">EXHIBIT / SPONSOR</span>
              <span
                className={`absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#ebebeb] flex items-center justify-center text-[#121c4e] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white ${isScrolled ? 'w-[34px] h-[34px] text-[18px]' : 'w-[44px] h-[44px] text-[22px]'
                  }`}
              >
                <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* ── Hamburger + MAIN MENU label — ≤ 1439px only ── */}
        <button
          className="hidden max-[1439px]:flex items-center gap-3 bg-transparent border-none cursor-pointer ml-auto z-[101] p-1 shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="font-display font-medium uppercase tracking-[0.14em] text-[#011b2e] text-[13px] max-[480px]:hidden select-none">
            MAIN MENU
          </span>
          <div className={`flex flex-col transition-[gap] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'gap-[4px]' : 'gap-[5px]'}`}>
            <span className={`block h-[2px] rounded-[2px] transition-all duration-250 ${mobileOpen ? 'bg-[#1cb7cf]' : 'bg-[#011b2e]'} ${isScrolled ? 'w-[22px]' : 'w-6'}`} />
            <span className={`block h-[2px] rounded-[2px] transition-all duration-250 ${mobileOpen ? 'bg-[#1cb7cf]' : 'bg-[#011b2e]'} ${isScrolled ? 'w-[22px]' : 'w-6'}`} />
            <span className={`block h-[2px] rounded-[2px] transition-all duration-250 ${mobileOpen ? 'bg-[#1cb7cf]' : 'bg-[#011b2e]'} ${isScrolled ? 'w-[22px]' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* =============================================================
          MOBILE FULL-SCREEN OVERLAY — ≤ 1439px
          Dark full-screen menu covering the entire viewport.
      ============================================================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-[#1a1a1a] z-[200] flex flex-col overflow-y-auto animate-[slideIn_0.3s_ease]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >

          {/* ── CLOSE button ── */}
          <div className="flex justify-end items-center px-6 py-5 shrink-0">
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 text-white bg-transparent border-none cursor-pointer font-display uppercase tracking-[0.15em] text-[13px] transition-opacity duration-200 hover:opacity-70"
              aria-label="Close navigation menu"
            >
              <span>CLOSE</span>
              {/* ✕ icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="18" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="18" y1="2" x2="2" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* ── Nav items ── */}
          <nav className="flex flex-col flex-1 pt-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <button
                  className="w-full flex justify-center items-center gap-4 py-[18px] px-6 bg-transparent border-none font-display text-[1.3rem] max-[480px]:text-[1.1rem] font-medium uppercase tracking-widest text-white cursor-pointer transition-colors duration-200 hover:text-[#1cb7cf]"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16.379 9.336"
                      width="13"
                      height="13"
                      aria-hidden="true"
                      className={`opacity-60 transition-transform duration-300 shrink-0 ${openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                    >
                      <path fill="currentColor" d="M8.19,5.241L15.56,0l.819.819-8.189,8.517L0,.819l.819-.819,7.371,5.241Z" />
                    </svg>
                  )}
                </button>

                {openDropdown === item.label && item.children && (
                  <ul className="list-none p-0 m-0 pb-3 bg-white/5 animate-[fadeIn_0.2s_ease]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block py-3 px-8 text-center font-display text-[0.88rem] uppercase tracking-wider text-white/60 no-underline transition-all duration-150 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col items-center gap-4 py-8 px-6 shrink-0">
            {/* Request Attendee Information */}
            <Link
              href="/register?tab=visitor"
              className="group w-full max-w-[420px] inline-flex items-center justify-between h-[56px] pl-7 pr-[6px] rounded-full bg-[#005eb8] text-white no-underline font-display text-[13px] uppercase tracking-wider transition-all duration-300 hover:bg-[#004f99] hover:-translate-y-[1px]"
              onClick={() => setMobileOpen(false)}
            >
              <span className="whitespace-nowrap">REQUEST ATTENDEE INFORMATION</span>
              <span className="w-[44px] h-[44px] rounded-full bg-[#ebebeb] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white">
                <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[2.5] fill-none" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Exhibit / Sponsor */}
            <Link
              href="/register?tab=exhibitor"
              className="group w-full max-w-[420px] inline-flex items-center justify-between h-[56px] pl-7 pr-[6px] rounded-full bg-[#034694] text-white no-underline font-display text-[13px] uppercase tracking-wider transition-all duration-300 hover:bg-[#02366e] hover:-translate-y-[1px]"
              onClick={() => setMobileOpen(false)}
            >
              <span className="whitespace-nowrap">EXHIBIT / SPONSOR</span>
              <span className="w-[44px] h-[44px] rounded-full bg-[#ebebeb] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white">
                <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[2.5] fill-none" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* ── Social Icons ── */}
          <div className="flex justify-center items-center gap-9 pb-10 shrink-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/mfv-expositions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/FranchiseExpoNY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/franchiseexpony"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}