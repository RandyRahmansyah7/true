export interface NavLink {
  label: string;
  href: string;
}

export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  isDark?: boolean;
}

export interface ServiceItem {
  titleLine1: string;
  titleLine2: string;
  description: string;
  href: string;
  theme: "grey" | "dark";
}

export interface PortfolioItem {
  description: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  badge: string;
  badgeType: "basic" | "popular" | "custom";
  description: string;
  targetAudience: string;
  price: string;
  pricePrefix?: string;
  period: string;
  paymentHighlight?: string;
  features: string[];
  note?: string;
  ctaText: string;
  ctaHref: string;
  whatsappMessage?: string;
  theme: "grey" | "lime" | "dark";
  isPopular?: boolean;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
