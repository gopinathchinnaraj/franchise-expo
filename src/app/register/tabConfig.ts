// src/app/register/tabConfig.ts

export type TabKey = "visitor" | "delegate" | "exhibitor" | "speaker" | "enquiry";

export const TAB_QUERY_PARAM = "tab";

export interface TabHeroData {
  title: string;
  subtitle: string;
}

export const TAB_HERO_METADATA: Record<TabKey, TabHeroData> = {
  visitor: {
    title: "Register as a Visitor",
    subtitle: "Join us at the Expo to explore franchise opportunities, attend seminars, and network.",
  },
  delegate: {
    title: "Register as a Delegate",
    subtitle: "Access exclusive summit sessions, workshops, and VIP networking events.",
  },
  exhibitor: {
    title: "Exhibit or Sponsor",
    subtitle: "Showcase your brand to thousands of prospective franchisees and partners.",
  },
  speaker: {
    title: "Apply to Speak",
    subtitle: "Share your expertise, insights, and industry success stories with our audience.",
  },
  enquiry: {
    title: "General Enquiry",
    subtitle: "Have questions about the Expo? Send us a message and our team will assist you.",
  },
};

// Helper validator to guard active states
export function isValidTab(tab: string | null): tab is TabKey {
  return tab !== null && ["visitor", "delegate", "exhibitor", "speaker", "enquiry"].includes(tab);
}

// Clean and extract the base tab name (handles trailing slashes, secondary query indicators, etc.)
export function getCleanTab(tab: string | null): TabKey {
  if (!tab) return "visitor";
  const cleaned = tab.split('/')[0].split('?')[0].split('&')[0].trim().toLowerCase();
  if (["visitor", "delegate", "exhibitor", "speaker", "enquiry"].includes(cleaned)) {
    return cleaned as TabKey;
  }
  return "visitor";
}
