'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : 'shadow-[0_1px_0_rgba(0,0,0,0.08),0_2px_12px_rgba(0,0,0,0.06)]'}`}>
      <div className={`max-w-[1880px] mx-auto px-[22px] max-[375px]:px-[14px] flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'h-[110px] max-[375px]:h-[80px] gap-2.5' : 'h-[135px] max-[375px]:h-[90px] gap-3.5'}`}>

        {/* ── Logo ── */}
        <div className="flex items-center gap-4 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
          <Link href="/" className={`flex items-center shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'gap-3' : 'gap-4'}`}>
            <Image
              src="/images/franchise-expo-international-new-york.svg"
              alt="Logo"
              width={280}
              height={90}
              priority
              className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-auto ${isScrolled ? 'w-[170px] max-[900px]:w-[140px] max-[600px]:w-[120px] max-[375px]:w-[105px]' : 'w-[205px] max-[900px]:w-[180px] max-[600px]:w-[160px] max-[375px]:w-[135px]'}`}
            />
          </Link>
          <div className="w-[1px] bg-[#e0e0e0] shrink-0 h-20 max-[900px]:hidden" />
          <div className="flex flex-col justify-center shrink-0">
            <div className="flex items-center gap-2.5 max-[900px]:hidden mb-1.5">
              <span className="font-display font-bold uppercase tracking-wider text-[#020202] text-[13px]">Supported By</span>
              <img
                src="https://www.franchiseexpo.com/images/us-commercial-service.svg"
                alt="U.S. Commercial Service"
                className="w-auto object-contain h-[34px]"
              />
            </div>
            <div className="flex flex-col shrink-0 gap-0.5 min-w-[200px] max-[900px]:min-w-[auto] max-[600px]:hidden">
              <span className="font-display font-normal text-[#000000] uppercase leading-[1.1] text-[1.12rem] max-[900px]:text-[0.85rem]">New York City, New York</span>
              <span className="font-display font-semibold text-[#000000] uppercase leading-[1.1] text-[1.20rem] max-[900px]:text-[0.9rem]">June 4th – 5th 2027</span>
            </div>
          </div>
        </div>

        {/* ── Desktop Nav ── */}
        <nav className="flex-1 flex justify-center max-[900px]:hidden">
          <ul className="flex items-center gap-0 bold list-none m-0 p-0">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className={`flex bold items-center gap-1 font-display text-[15px] font-medium uppercase tracking-wider text-[#111111] no-underline whitespace-nowrap leading-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#063970] ${isScrolled ? 'py-1.5 px-2' : 'py-2 px-2.5'}`}>
                  {item.label}
                  {item.children && (
                    <span className="inline-flex items-center text-base text-[#1d2357] mt-[-1px] transition-transform duration-200">
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
                    className="absolute top-[calc(100%+4px)] left-0 bg-white rounded-md shadow-[0_8px_28px_rgba(0,0,0,0.13)] min-w-[230px] list-none p-1.5 m-0 border border-black/7 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className="block py-[9px] px-[18px] font-display text-[15px] font-medium uppercase tracking-wider text-[#000] no-underline transition-all duration-200 hover:text-[#063970] hover:pl-[24px]">
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
        <div className="flex gap-4 shrink-0 max-[1200px]:hidden">
          <Link 
            href="/register" 
            className={`group inline-flex items-center justify-between rounded-full bg-[#005eb8] text-white no-underline font-display uppercase tracking-wide shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[1px] gap-6 pl-8 pr-2 ${ 
              isScrolled 
                ? 'h-[47px] min-w-[220px] text-[15px] leading-[1.3]' 
                : 'h-[57px] min-w-[240px] text-[15px] leading-[1.4]' 
            }`} 
          > 
            <span className="block text-left whitespace-pre-line"> 
              {`REQUEST ATTENDEE\nINFORMATION`} 
            </span> 
          
            <span className={`rounded-full bg-[#ebebeb] flex items-center justify-center text-[#121c4e] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white shrink-0 ${ 
              isScrolled 
                ? 'w-[34px] h-[34px]' 
                : 'w-[44px] h-[44px]' 
            }`} > 
              <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[2.5] fill-none" viewBox="0 0 24 24"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /> 
              </svg> 
            </span> 
          </Link>

            
          <Link
            href="/exhibitors/why-exhibit"
            className={`group relative inline-flex items-center justify-start rounded-full bg-[#034694] text-white no-underline font-display uppercase tracking-wide shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[1px] ${
              isScrolled 
                ? 'h-[47px] min-w-[145px] text-[15px] leading-[1.2] pl-7 pr-[60px]' 
                : 'h-[57px] min-w-[170px] text-[15px] leading-[1.2] pl-8 pr-[60px]'
            }`}
          >
            <span className="block text-left whitespace-pre-line">
              {`EXHIBIT /\nSPONSOR`}
            </span>
            <span 
              className={`absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#ebebeb] flex items-center justify-center text-[#121c4e] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white ${
                isScrolled 
                  ? 'w-[34px] h-[34px] text-[18px]' 
                  : 'w-[44px] h-[44px] text-[22px]'
              }`}
            >
              <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>


        {/* ── Hamburger ── */}
        <button
          className={`hidden max-[900px]:flex flex-col bg-none border-none cursor-pointer p-1 ml-auto z-[101] transition-[gap] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'gap-[4px]' : 'gap-[5px]'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block h-[2px] rounded-[2px] transition-all duration-250 ${mobileOpen ? 'bg-[#1cb7cf]' : 'bg-[#011b2e]'} ${isScrolled ? 'w-[22px]' : 'w-6'}`} />
          <span className={`block h-[2px] rounded-[2px] transition-all duration-250 ${mobileOpen ? 'bg-[#1cb7cf]' : 'bg-[#011b2e]'} ${isScrolled ? 'w-[22px]' : 'w-6'}`} />
          <span className={`block h-[2px] rounded-[2px] transition-all duration-250 ${mobileOpen ? 'bg-[#1cb7cf]' : 'bg-[#011b2e]'} ${isScrolled ? 'w-[22px]' : 'w-6'}`} />
        </button>
      </div>

      {/* ── Mobile Nav ── */}
      {mobileOpen && (
        <div className={`fixed left-0 right-0 bottom-0 bg-white border-t border-black/7 overflow-y-auto z-50 animate-[slideIn_0.3s_ease] transition-[top] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'top-[110px] max-[375px]:top-[80px]' : 'top-[135px] max-[375px]:top-[90px]'}`}>
          <ul className="list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-black/6">
                <button
                  className="w-full flex justify-between items-center py-[15px] px-6 bg-transparent border-none font-body text-[0.82rem] font-bold uppercase tracking-wider text-[#011b2e] cursor-pointer transition-colors duration-200 hover:bg-[#1cb7cf]/5"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <span className="text-[1.2rem] font-semibold text-[#1cb7cf]">
                    {openDropdown === item.label ? '−' : '+'}
                  </span>
                </button>
                {openDropdown === item.label && item.children && (
                  <ul className="bg-[#f6f8fa] list-none p-0 m-0 animate-[fadeIn_0.2s_ease]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block py-[11px] px-8 font-body text-[0.8rem] text-[#444] no-underline font-medium uppercase transition-all duration-150 hover:text-[#1cb7cf] hover:bg-[#1cb7cf]/4"
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
            <li className="p-[18px] px-6 flex flex-col gap-2">
              <Link
                href="/register"
                className="flex items-center justify-center w-full py-3.5 px-5 rounded-[50px] font-display text-[0.8rem] font-semibold uppercase tracking-widest no-underline text-center transition-all duration-200 bg-[#1cb7cf] text-white hover:bg-[#159eb3]"
                onClick={() => setMobileOpen(false)}
              >
                Register to Attend
              </Link>
              <Link
                href="/exhibitors/why-exhibit"
                className="flex items-center justify-center w-full py-3.5 px-5 rounded-[50px] font-display text-[0.8rem] font-semibold uppercase tracking-widest no-underline text-center transition-all duration-200 bg-[#011b2e] text-white hover:bg-[#022a44]"
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