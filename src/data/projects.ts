export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
  startingPrice: string;
  note?: string;
  urlLabel?: string;
};

/**
 * Only projects verified from github.com/YOGESH11K, their repository
 * descriptions, or live websites are listed here.
 *
 * Preview images are real screenshots of the live sites.
 */
export const projects: Project[] = [
  {
    slug: "goa-waters",
    index: "01",
    name: "GoA Waters",
    category: "Brand & Wellness",
    description:
      "A calm, editorial website for a Goa-based wellness brand — built around atmosphere, storytelling, and slow browsing.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "/projects/goawaters.webp",
    imageAlt: "GoA Waters website homepage with a sunset over still water",
    liveUrl: "https://goawaters.com/",
    repoUrl: "https://github.com/YOGESH11K/wellness-goawaters",
    startingPrice: "₹8,000",
  },
  {
    slug: "ashima-healer",
    index: "02",
    name: "Ashima Healer",
    category: "Wellness & Courses",
    description:
      "A premium rebuild for a sacred healing arts practice — courses, schedules, and registrations in one calm experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    image: "/projects/ashima-healer.webp",
    imageAlt: "Ashima Healer website homepage with the words Heal. Awaken. Transform.",
    liveUrl: "https://www.ashimahealer.com/",
    repoUrl: "https://github.com/YOGESH11K/ashima-healer",
    startingPrice: "₹12,000",
  },
  {
    slug: "robosiddhi-aiverse",
    index: "03",
    name: "RoboSiddhi AI Verse",
    category: "Robotics, AI & STEM",
    description:
      "An immersive 3D web experience for a robotics, AI and STEM innovation lab in Jaipur — interactive planets, lab sections and course journeys.",
    technologies: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/robosiddhi.webp1.png",
    imageAlt:
      "RoboSiddhi AI Verse website preview with the RoboSiddhi mark and the tagline Build the future",
    liveUrl: "https://robosiddhi-aiverse.vercel.app/",
    repoUrl: "https://github.com/YOGESH11K/Robosiddhi-AiVarse",
    startingPrice: "₹15,000",
  },
  {
    slug: "mukteshwar",
    index: "04",
    name: "Mukteshwar",
    category: "Travel & Storytelling",
    description:
      "A cinematic travel experience for Mukteshwar in the Kumaon hills — Himalayan landscapes, village stories and a planning guide, told with motion.",
    technologies: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    image: "/projects/mukteshwar.jpg",
    imageAlt: "Himalayan landscape over the Mukteshwar hills",
    liveUrl: "https://mukteshwarweb.vercel.app/",
    repoUrl: "https://github.com/YOGESH11K/kumaun",
    startingPrice: "₹12,000",
  },
];





