import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full text-white font-sans bg-[linear-gradient(90deg,#144380_0%,#193973_35%,#1d326a_70%,#212a5f_100%)] text-white/85 pt-[200px] pb-0">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-[90px] max-lg:px-10 max-sm:px-6 grid grid-cols-[1.3fr_1fr_1fr_1.2fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-center text-center">
            <p className="font-display text-[20px] font-bold uppercase tracking-[0.5px] text-white mb-[18px]">Organized by</p>
            <div className="flex flex-col items-center gap-[15px] mb-[18px] w-full">
              <img
                src="/images/maxx_logo.png"
                alt="Maxx Business Media Pvt Ltd"
                className="w-[150px] h-auto"
              />
              <img
                src="/images/comoexposium.webp"
                alt="Comexposium"
                className="w-[180px] h-auto"
              />
            </div>
            <p className="text-[14px] font-bold text-white max-w-[260px] leading-[1.4] mb-[22px] text-center">Leading you on the path to successful franchising</p>
            <div className="flex gap-2.5">
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] rounded-full bg-white text-[#17264a] flex items-center justify-center transition-opacity duration-200 hover:opacity-80">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4v-16c0-2.2-1.8-4-4-4zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] rounded-full bg-white text-[#17264a] flex items-center justify-center transition-opacity duration-200 hover:opacity-80">
                <svg viewBox="0 0 430 430" width="20" height="20" fill="currentColor">
                  <path d="M158 83s0 59 0 59h-43v72h43v215h89V214h60s6-35 8-73h-68s0-42 0-50c0-7 10-17 19-17h49V0H250C156 0 158 72 158 83z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] rounded-full bg-white text-[#17264a] flex items-center justify-center transition-opacity duration-200 hover:opacity-80">
                <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                  <path d="M224 141c-64 0-115 51-115 115s51 115 115 115 115-51 115-115-51-115-115-115zm0 190c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75zm146-194c0 15-12 27-27 27s-27-12-27-27 12-27 27-27 27 12 27 27zm76 27c-2-36-10-68-36-94s-58-34-94-36c-37-2-148-2-185 0-36 2-68 10-94 36S1 128 0 163c-2 37-2 148 0 185 2 36 10 68 36 94s58 34 94 36c37 2 148 2 185 0 36-2 68-10 94-36s34-58 36-94c2-37 2-148 0-185zM399 388c-8 20-23 35-43 43-30 12-100 9-132 9s-103 3-132-9c-20-8-35-23-43-43-12-30-9-100-9-132s-3-103 9-132c8-20 23-35 43-43 30-12 100-9 132-9s103-3 132 9c20 8 35 23 43 43 12 30 9 100 9 132s3 103-9 132z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Venue */}
          <div className="flex flex-col">
            <p className="font-display text-[20px] font-bold uppercase tracking-[0.5px] text-white mb-[18px]">Venue / Location</p>
            <ul className="list-none m-0 p-0 text-[15px] font-normal leading-[1.85] text-white">
              <li className="font-bold">New York City, New York</li>
              <li>Javits Center, Hall 1C</li>
              <li>429 11th Ave</li>
              <li>New York</li>
              <li>NY 10001</li>
            </ul>
          </div>

          {/* Column 3: Opening Times */}
          <div className="flex flex-col">
            <p className="font-display text-[20px] font-bold uppercase tracking-[0.5px] text-white mb-[18px]">Opening Times</p>
            <div className="flex flex-col mb-[18px] text-[15px]">
              <strong className="font-bold mb-0.5 text-white">Friday June 4th 2027</strong>
              <span className="font-normal text-white/85">10AM – 5PM</span>
            </div>
            <div className="flex flex-col mb-[18px] text-[15px]">
              <strong className="font-bold mb-0.5 text-white">Saturday June 5th 2027</strong>
              <span className="font-normal text-white/85">10AM – 4PM</span>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <p className="text-[15px] font-bold mb-5 text-white">Tel: + 1 201 226 1130</p>

            <div className="mb-[18px]">
              <p className="font-display text-[20px] font-bold uppercase mb-2 text-white">Request Exhibitor Info</p>
              <p className="text-[14px] font-normal mb-0.5 text-white/85">Justin Wood (240) 398-1385</p>
              <a href="mailto:Justin.Wood@comexposium.com" className="text-[14px] font-normal text-white no-underline opacity-90 hover:underline">
                Justin.Wood@comexposium.com
              </a>
            </div>

            <div className="mb-[18px]">
              <p className="font-display text-[20px] font-bold uppercase mb-2 text-white">Attendee and Conference Info</p>
              <p className="text-[14px] font-normal mb-0.5 text-white/85">Linda Thompson (201) 881-1646</p>
              <a href="mailto:Linda.Thompson@comexposium.com" className="text-[14px] font-normal text-white no-underline opacity-90 hover:underline">
                Linda.Thompson@comexposium.com
              </a>
            </div>

            <div className="mb-[18px]">
              <p className="font-display text-[20px] font-bold uppercase mb-2 text-white">Exhibitor Services</p>
              <p className="text-[14px] font-normal mb-0.5 text-white/85">Murphy Connolly (631) 335-5696</p>
              <a href="mailto:Murphy.Connolly@comexposium.com" className="text-[14px] font-normal text-white no-underline opacity-90 hover:underline">
                Murphy.Connolly@comexposium.com
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-[#0a1226] py-[18px] w-full mt-auto">
        <div className="max-w-[1440px] mx-auto px-[90px] max-lg:px-10 max-sm:px-6 flex justify-between items-center max-sm:flex-col max-sm:gap-2.5 max-sm:text-center text-white">
          {/* FIXED: Changed color-white to text-white */}
          <Link href="/privacy-policy" className="text-white text-[13px] no-underline opacity-80 hover:opacity-100">
            Privacy Policy
          </Link>
          <p className="text-[13px] opacity-70 m-0">
            © {new Date().getFullYear()} FranchiseExpo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
