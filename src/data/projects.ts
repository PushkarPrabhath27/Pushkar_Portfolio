export interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  role: string;
  agency?: string;
  image: string;
  link?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "ted-conferences",
    title: "TED Conferences",
    description:
      "Built for total client control with a large component library, making full use of Webflow's Page Building experience. More control, speed to market, and lower costs.",
    client: "TED",
    role: "Lead Developer",
    agency: "Whiteboard",
    image: "/images/projects/ted-conferences.jpg",
    link: "https://ted.com",
    tags: ["Webflow", "CMS", "Components"],
  },
  {
    id: "global-leadership-network",
    title: "Global Leadership Network",
    description:
      "Annual Summit attended by 350,000 leaders spanning 100+ countries. Modular page building controls, custom accents, SVG masks, and a system to customize the brand for each year.",
    client: "Global Leadership Network",
    role: "Lead Developer",
    agency: "Whiteboard",
    image: "/images/projects/global-leadership-network.jpg",
    link: "https://globalleadershipnetwork.com",
    tags: ["Webflow", "CMS", "SVG"],
  },
  {
    id: "oasis-dreamforce",
    title: "The Oasis at Dreamforce",
    description:
      "A fun, colorful landing page full of custom illustrations with movement to bring them all to life. Sometimes the brief is just 'make something awesome'.",
    client: "CaptivateIQ",
    role: "Developer",
    image: "/images/projects/oasis-dreamforce.jpg",
    link: "https://captivateiq.com",
    tags: ["Landing Page", "Illustrations", "Animation"],
  },
  {
    id: "state-of-icm",
    title: "State of ICM Report",
    description:
      "Report microsite with fluid typography, offset grid system, and smooth scroll animations. Beautiful custom illustrations and unveiling effects without letting animation get in the way.",
    client: "CaptivateIQ",
    role: "Developer",
    image: "/images/projects/state-of-icm.jpg",
    link: "https://captivateiq.com",
    tags: ["Microsite", "Typography", "Animation"],
  },
  {
    id: "christmas-eve-2024",
    title: "Christmas Eve 2024",
    description:
      "Tasteful, well-branded microsite with lighting tricks for a shimmering backdrop and SVG path draw-in animation.",
    client: "Passion City Church",
    role: "Senior Developer",
    agency: "Whiteboard",
    image: "/images/projects/christmas-eve-2024.jpg",
    link: "https://passioncitychurch.com",
    tags: ["Microsite", "SVG", "Animation"],
  },
  {
    id: "the-multiplier",
    title: "The Multiplier",
    description:
      "Content hub for thought leadership. Free membership content site with access, profiles, and favoriting system using Memberstack, integrated with client's CRM.",
    client: "CaptivateIQ",
    role: "Developer",
    image: "/images/projects/the-multiplier.jpg",
    link: "https://captivateiq.com",
    tags: ["Membership", "Memberstack", "CRM"],
  },
  {
    id: "harness",
    title: "Harness",
    description:
      "Fundraising technology for nonprofits and financial institutions. Collaboration with top minds like Keegan Leary and Timothy Ricks on some fancy tricks.",
    client: "Harness",
    role: "Developer",
    image: "/images/projects/harness.jpg",
    link: "https://harnessgiving.com",
    tags: ["Fundraising", "Nonprofit", "Fintech"],
  },
  {
    id: "kalderos-report",
    title: "Kalderos Annual Report",
    description:
      "8-bit inspired annual report. Single-scroll, multi-chapter experience with custom illustrations and a whole lot of custom JavaScript. Plus a fun easter egg.",
    client: "Kalderos",
    role: "Developer",
    image: "/images/projects/kalderos-report.jpg",
    link: "https://kalderos.com",
    tags: ["Annual Report", "8-bit", "JavaScript"],
  },
  {
    id: "beefree-sdk",
    title: "Beefree SDK",
    description:
      "Website for SaaS developers whose audience is other developers. Full company rebrand with mega menu, multiple products, and robust style system.",
    client: "Beefree",
    role: "Developer",
    image: "/images/projects/beefree-sdk.jpg",
    link: "https://beefree.io",
    tags: ["Rebrand", "SaaS", "Design System"],
  },
  {
    id: "martha-mary",
    title: "Martha & Mary",
    description:
      "Historic organization modernized. Component-based and flexible enough for team control with guardrails for brand consistency.",
    client: "Martha & Mary",
    role: "Developer",
    image: "/images/projects/martha-mary.jpg",
    link: "https://marthamary.com",
    tags: ["Component-based", "CMS", "Brand"],
  },
];
