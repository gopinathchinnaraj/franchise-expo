import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Emerging Brand Pavilion",
  description:
    "The Emerging Brands Pavilion is one of the busiest aisles of the show floor and dedicated to up-and-coming franchises.",
};

const features = [
  {
    heading: "Discover The Next Big Thing",
    body: "Be among the first to discover fresh concepts before they become household names. Gain access to early-stage investment opportunities and lock in favorable territories while they're still available.",
  },
  {
    heading: "Direct Access To Founders",
    body: "In the Emerging Brands Pavilion, you'll often meet with founders or top executives of these new brands. This gives you the chance to hear firsthand the passion, vision, and growth potential behind the businesses.",
  },
  {
    heading: "Be A Trendsetter",
    body: "You have the opportunity to join these brands early, positioning yourself as a trendsetter in your market. Stay ahead of industry trends and set yourself apart with a fresh, exciting concept.",
  },
  {
    heading: "Growth Potential",
    body: "These are the brands poised for rapid expansion. By visiting the Emerging Brands Pavilion, you'll be exploring high-growth opportunities that can lead to significant returns as these franchises scale.",
  },
];

export default function EmergingBrandPavilionPage() {
  return (
    <>
      <PageBanner
        title="Emerging Brand Pavilion"
        subtitle="One of the busiest aisles of the show floor — dedicated to up-and-coming franchises."
      />

      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.introBlock}>

            {/* LEFT CONTENT */}
            <div className={styles.introText}>
              <h2 className={styles.introHeading}>
                THE EMERGING BRANDS PAVILION IS ONE OF THE BUSIEST AISLES OF THE SHOW FLOOR AND DEDICATED TO UP-AND-COMING FRANCHISES.
              </h2>

              <p className={styles.introBody}>
                Discover the future of franchising by visiting the Emerging
                Brands Pavilion — where tomorrow's leading brands are waiting
                for you today.
              </p>

              <ul className={styles.featureList}>
                {features.map((item) => (
                  <li key={item.heading}>
                    <strong>{item.heading}:</strong> {item.body}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={styles.introImage}
              style={{
                backgroundImage:
                  "url('https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Emerging_Pavilion.webp')",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactCard}>
            <h2>GET IN TOUCH</h2>

            <p>
              If you are an up and coming franchise brand with 10 units or less and
              are interested in learning more on how you can showcase your brand in
              the Emerging Pavilion contact:
            </p>

            <div className={styles.contactPerson}>
              <span className={styles.contactName}>Justin Wood</span>
              <span className={styles.contactPhone}>(240) 398-1385</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}