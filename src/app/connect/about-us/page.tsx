// app/about-us/page.tsx
import Image from 'next/image';
import styles from './page.module.css';
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
     <PageBanner title='ABOUt US'/>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className="container mx-auto px-4 max-w-7xl">
          <article className={styles.article}>

            {/* Logos */}
            <div className={styles.logosContainer}>
              <Image
                src={IMAGES.logo}
                alt="MFV Expo"
                width={250}
                height={99}
                className={styles.logoMain}
                priority
              />
              <div className={styles.logoSecondary}>
                <Image
                  src={IMAGES.comexpo}
                  alt="Comexposium"
                  width={250}
                  height={42}
                />
              </div>
            </div>

            <h2 className={styles.mainHeading}>
              Bringing The Franchise World Together Since 1991
            </h2>

            {/* Section 1: About MFV — content left, image right */}
            <div className={styles.twoColumnSection}>
              <div className={styles.contentColumn}>
                <p className={styles.boldText}>
                  <strong>MFV Expositions</strong> global brands have been generating
                  qualified leads for franchisors, face-to-face at our premier franchise
                  events, virtually with our online component and through our comprehensive
                  franchise directories.
                </p>
                <p>
                  The Franchise Expo Series is the premier connection point for aspiring
                  entrepreneurs and established brands looking to expand their footprint.
                  With locations spanning major metropolitan markets across North America,
                  we bring together a diverse ecosystem of franchisors, industry experts,
                  and motivated investors under one roof.
                </p>
                <p>
                  Our mission is to foster economic growth by providing a centralized
                  platform for discovering innovative business concepts, learning from
                  experienced industry leaders, and navigating the complexities of
                  franchise ownership. Whether you are looking for low-cost opportunities
                  or high-growth investments, the Franchise Expo Series delivers the
                  education, resources, and networking necessary to build a successful
                  business future.
                </p>
                <p>
                  Join us at any of our expo locations to explore the latest trends,
                  meet brand representatives face-to-face, and take the next step in
                  your entrepreneurial journey.
                </p>
              </div>
              <div
                className={styles.imageColumn}
                style={{ backgroundImage: `url(${IMAGES.crowd})` }}
              />
            </div>

            {/* Section 2: BeTheBoss — image left, content right */}
            <div className={styles.twoColumnSection}>
              <div
                className={styles.imageColumn}
                style={{ backgroundImage: `url(${IMAGES.betheboss})` }}
              />
              <div className={styles.contentColumn}>
                <p className={styles.boldText}>
                  <strong>MFV's global online franchise directory&nbsp;</strong>
                  <a
                    href="http://www.betheboss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <strong>BeTheBoss.com</strong>
                  </a>
                  <strong>&nbsp;uses the latest technology and search metrics to provide a
                    cost-effective way to market your franchise.</strong>
                </p>
                <p>
                  BeTheBoss.com acts as a lead generating vehicle for your franchise,
                  gaining tremendous online exposure for your brand. Betheboss.com
                  covers major franchise markets including the United States, Canada,
                  Mexico and the United Kingdom.
                </p>
                <p>
                  We know franchise development can be hard. That's why we constantly
                  are looking for new ways to help you find qualified franchise prospects.
                  We use data, technology, and automation to improve our lead products
                  both in the US &amp; Internationally.
                </p>
                <a
                  href="http://www.betheboss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <span className={styles.ctaButtonText}>LEARN MORE AT BETHEBOSS.COM</span>
                  <span className={styles.ctaButtonIcon} aria-hidden="true">&#8250;</span>
                </a>
              </div>
            </div>

            {/* Proud Member */}
            <h2 className={styles.sectionHeading}>PROUD MEMBER</h2>
            <div className={styles.memberLogos}>
              <div className={styles.memberLogo}>
                <Image src={IMAGES.ifa} alt="IFA member" width={200} height={201} />
              </div>
              <div className={styles.memberLogo}>
                <Image src={IMAGES.supplier} alt="IFA Supplier Forum" width={200} height={200} />
              </div>
              <div className={styles.memberLogo}>
                <Image src={IMAGES.canadian} alt="Canadian Franchise Association" width={200} height={120} />
              </div>
            </div>

            {/* Expo Cards */}
            <div className={styles.cardsGrid}>
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

            <div className={styles.cardsGrid}>
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

            <div className={styles.cardsGrid}>
              <ExpoCard
                title="Franchise Expo Cincinnati"
                image={IMAGES.cincinnati}
                description="Franchise Expo Cincinnati brings together entrepreneurs and prospective business owners with over 125 exhibitors. Learn all you need to know about how you can be a successful franchise owner and find out about the many types of franchises available. Meet face-to-face with franchise brands and industry experts and attend our franchise seminars providing you all the resources you need for franchise ownership – all under one roof."
                link="/cincinnati"
                linkText="www.franchiseexpo.com/cincinnati"
              />
              <div className={styles.emptyCard}></div>
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
    <div className={styles.expoCard}>
      <div className={styles.expoImage}>
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.expoContent}>
        <h6 className={styles.expoTitle}>{title}</h6>
        <p className={styles.expoDescription}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.expoLink}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}