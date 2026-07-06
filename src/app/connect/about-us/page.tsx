// app/about-us/page.tsx
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';

export const metadata = {
  title: 'About Us | Franchise Expo',
  description: 'Bringing The Franchise World Together Since 1991',
};

const IMAGES = {
  logo: 'https://www.franchiseexpo.com/images/franchise-expo.svg',
  comexpo: 'https://www.franchiseexpo.com/images/comoexposium.webp',
  crowd: 'https://www.franchiseexpo.com/images/austin/E-zone-page/crowd-2.webp',
  betheboss: 'https://www.franchiseexpo.com/images/be-the-boss.webp',
  ifa: 'https://www.franchiseexpo.com/images/IFA_member.webp',
  supplier: 'https://www.franchiseexpo.com/images/IFA_Supplier_Forum.webp',
  canadian: 'https://www.franchiseexpo.com/images/canadian-francise-association-member.webp',
  ife: 'https://www.franchiseexpo.com/images/ife/ife-thumbnail.jpg',
  dallas: 'https://www.franchiseexpo.com/images/dallas/dallas-thumbnail.jpg',
  south: 'https://www.franchiseexpo.com/images/south/south-thumbnail.jpg',
  west: 'https://www.franchiseexpo.com/images/west/west-thumbnail.jpg',
  cincinnati: 'https://www.franchiseexpo.com/images/cincinnati/cincinnati-thumbnail.jpg',
};

export default function AboutUsPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner title='About Us'/>

      {/* Main Content */}
      <main className="py-15 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <article className="max-w-[1500px] mx-auto">

            {/* Logos */}
            <div className="flex flex-col items-center justify-center gap-5 mb-10">
              <Image
                src={IMAGES.logo}
                alt="MFV Expo"
                width={250}
                height={99}
                className="block max-w-full h-auto"
                priority
              />
              <div className="block max-w-full h-auto">
                <Image
                  src={IMAGES.comexpo}
                  alt="Comexposium"
                  width={250}
                  height={42}
                />
              </div>
            </div>

            <h2 className="font-display text-[2.5rem] max-md:text-[1.8rem] max-sm:text-[1.5rem] font-bold text-center my-10 md:my-[50px] text-[#003366] leading-tight">
              Bringing The Franchise World Together Since 1991
            </h2>

            {/* Section 1: About MFV — content left, image right */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-0 mb-10 overflow-hidden">
              <div className="p-10 md:p-12 max-md:p-6 max-sm:p-5 bg-[#ebebeb] flex flex-col justify-center">
                <p className="text-base max-sm:text-sm leading-relaxed font-bold text-[#111] mb-5">
                  <strong>MFV Expositions</strong> global brands have been generating
                  qualified leads for franchisors, face-to-face at our premier franchise
                  events, virtually with our online component and through our comprehensive
                  franchise directories.
                </p>
                <p className="mb-5 leading-relaxed text-[#333] text-[0.97rem] last:mb-0">
                  The Franchise Expo Series is the premier connection point for aspiring
                  entrepreneurs and established brands looking to expand their footprint.
                  With locations spanning major metropolitan markets across North America,
                  we bring together a diverse ecosystem of franchisors, industry experts,
                  and motivated investors under one roof.
                </p>
                <p className="mb-5 leading-relaxed text-[#333] text-[0.97rem] last:mb-0">
                  Our mission is to foster economic growth by providing a centralized
                  platform for discovering innovative business concepts, learning from
                  experienced industry leaders, and navigating the complexities of
                  franchise ownership. Whether you are looking for low-cost opportunities
                  or high-growth investments, the Franchise Expo Series delivers the
                  education, resources, and networking necessary to build a successful
                  business future.
                </p>
                <p className="mb-5 leading-relaxed text-[#333] text-[0.97rem] last:mb-0">
                  Join us at any of our expo locations to explore the latest trends,
                  meet brand representatives face-to-face, and take the next step in
                  your entrepreneurial journey.
                </p>
              </div>
              <div
                className="min-h-[400px] max-lg:min-h-[300px] max-lg:order-first bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${IMAGES.crowd})` }}
              />
            </div>

            {/* Section 2: BeTheBoss — image left, content right */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-0 mb-10 overflow-hidden">
              <div
                className="min-h-[400px] max-lg:min-h-[300px] max-lg:order-first bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${IMAGES.betheboss})` }}
              />
              <div className="p-10 md:p-12 max-md:p-6 max-sm:p-5 bg-[#ebebeb] flex flex-col justify-center">
                <p className="text-base max-sm:text-sm leading-relaxed font-bold text-[#111] mb-5">
                  <strong>MFV's global online franchise directory&nbsp;</strong>
                  <a
                    href="http://www.betheboss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a6ab1] no-underline font-bold hover:underline"
                  >
                    <strong>BeTheBoss.com</strong>
                  </a>
                  <strong>&nbsp;uses the latest technology and search metrics to provide a
                    cost-effective way to market your franchise.</strong>
                </p>
                <p className="mb-5 leading-relaxed text-[#333] text-[0.97rem] last:mb-0">
                  BeTheBoss.com acts as a lead generating vehicle for your franchise,
                  gaining tremendous online exposure for your brand. Betheboss.com
                  covers major franchise markets including the United States, Canada,
                  Mexico and the United Kingdom.
                </p>
                <p className="mb-5 leading-relaxed text-[#333] text-[0.97rem] last:mb-0">
                  We know franchise development can be hard. That's why we constantly
                  are looking for new ways to help you find qualified franchise prospects.
                  We use data, technology, and automation to improve our lead products
                  both in the US &amp; Internationally.
                </p>
                <a
                  href="http://www.betheboss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-[18px] no-underline rounded-full overflow-hidden w-fit transition-opacity duration-200 hover:opacity-90"
                >
                  <span className="inline-flex items-center h-12 pl-7 pr-6 bg-[#1a5fa8] text-white text-[0.76rem] font-bold tracking-wider uppercase whitespace-nowrap rounded-l-full">LEARN MORE AT BETHEBOSS.COM</span>
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-[#1a5fa8] text-white brightness-[0.82] rounded-r-full text-[1.6rem] leading-none border-l border-white/25" aria-hidden="true">&#8250;</span>
                </a>
              </div>
            </div>

            {/* Proud Member */}
            <h2 className="font-display text-[2rem] max-md:text-[1.5rem] font-bold text-center my-15 md:my-10 text-[#003366]">PROUD MEMBER</h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 max-lg:gap-7.5 my-10 md:my-15 items-center justify-items-center">
              <div className="flex justify-center items-center w-full">
                <Image src={IMAGES.ifa} alt="IFA member" width={200} height={201} className="max-w-full h-auto" />
              </div>
              <div className="flex justify-center items-center w-full">
                <Image src={IMAGES.supplier} alt="IFA Supplier Forum" width={200} height={200} className="max-w-full h-auto" />
              </div>
              <div className="flex justify-center items-center w-full">
                <Image src={IMAGES.canadian} alt="Canadian Franchise Association" width={200} height={120} className="max-w-full h-auto" />
              </div>
            </div>

            {/* Expo Cards */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7.5 mb-7.5">
              <ExpoCard
                title="The International Franchise Expo (IFE)"
                image={IMAGES.ife}
                description="The largest franchise exhibition in the USA. IFE runs every May in New York bringing together hundreds of the franchise industry's hottest concepts and thousands of the most qualified prospects from across the United States and countries all around the world. For domestic or international expansion, selling single units, area developments or master franchises and covering franchising basics for those less familiar with the industry – this is the industry's one stop franchise event."
                link="http://www.franchiseexpo.com/ife"
                linkText="www.franchiseexpo.com/ife"
              />
              <ExpoCard
                title="The Franchise Expo DALLAS"
                image={IMAGES.dallas}
                description="Franchise Expo Dallas brings together entrepreneurs, investors, and franchise brands for two days of learning, discovery, and connection. Explore more than 125 franchise opportunities across a variety of industries and meet the teams behind the concepts. Attend educational sessions and expert-led workshops designed to answer your questions and help you learn about franchise ownership. Gain practical insight into what it takes to start and operate a successful business, connect with advisors and experienced franchisors, and leave with the knowledge to move forward on your path to franchise ownership."
                link="/dallas"
                linkText="www.franchiseexpo.com/dallas"
              />
            </div>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7.5 mb-7.5">
              <ExpoCard
                title="Franchise Expo South"
                image={IMAGES.south}
                description="Franchise Expo South enables attendees to learn about the Franchise process and meet with brands interested in developing in the Southeast Region. Attend our conference program which is filled with 25+ educational sessions to learn everything from the latest trends to the basics on franchising. Network with the industry's leading brands, and be prepared to engage with the most qualified audience from the region and beyond!"
                link="/south"
                linkText="www.franchiseexpo.com/south"
              />
              <ExpoCard
                title="Franchise Expo West"
                image={IMAGES.west}
                description="Franchise Expo West is the premier franchise event in the growing West Coast market. It provides the perfect opportunity for hundreds of franchise concepts, representing every industry and virtually every investment level, to meet face-to-face with the region's most qualified prospects."
                link="/west"
                linkText="www.franchiseexpo.com/west"
              />
            </div>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7.5 mb-7.5">
              <ExpoCard
                title="Franchise Expo Cincinnati"
                image={IMAGES.cincinnati}
                description="Franchise Expo Cincinnati brings together entrepreneurs and prospective business owners with over 125 exhibitors. Learn all you need to know about how you can be a successful franchise owner and find out about the many types of franchises available. Meet face-to-face with franchise brands and industry experts and attend our franchise seminars providing you all the resources you need for franchise ownership – all under one roof."
                link="/cincinnati"
                linkText="www.franchiseexpo.com/cincinnati"
              />
              <div className="hidden"></div>
            </div>

          </article>
        </div>
      </main>
    </>
  );
}

function ExpoCard({
  title,
  image,
  description,
  link,
  linkText,
}: {
  title: string;
  image: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="bg-[#003366] rounded-sm overflow-hidden text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,51,102,0.3)] flex flex-col group">
      <div className="relative w-full h-[200px] max-md:h-[180px] max-sm:h-[150px] overflow-hidden bg-[#002244]">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          style={{ objectFit: 'cover' }}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-7.5 max-md:p-5 max-sm:p-3.75 flex-1 flex flex-col">
        <h6 className="text-[1.1rem] font-bold mb-3.75 text-white uppercase">{title}</h6>
        <p className="text-[0.9rem] max-sm:text-[0.88rem] leading-relaxed text-white/90 mb-3.75 flex-1">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline text-[0.9rem] transition-colors duration-300 hover:text-white/75 inline-block"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}