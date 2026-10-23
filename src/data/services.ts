import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Code2,
  Globe,
  RefreshCw,
  Rocket,
  UserRound,
} from "lucide-react";

export type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    name: "Business Websites",
    description: "A credible presence that turns visitors into enquiries.",
    icon: Globe,
  },
  {
    name: "Portfolio Websites",
    description: "Show your work with clarity and personality.",
    icon: UserRound,
  },
  {
    name: "Landing Pages",
    description: "A focused page built around one clear action.",
    icon: Rocket,
  },
  {
    name: "Startup Websites",
    description: "Launch fast with a site that can grow with you.",
    icon: Building2,
  },
  {
    name: "Website Redesign",
    description: "A sharper, faster version of what you already have.",
    icon: RefreshCw,
  },
  {
    name: "Custom Web Applications",
    description: "Dashboards, portals, and tools built around your workflow.",
    icon: Code2,
  },
];





