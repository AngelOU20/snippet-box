import {
  PanelsTopLeft,
  Heart,
  Trash,
  Settings,
  ShieldCheck,
} from "lucide-react";

import { SiJavascript, SiPython, SiCsharp } from "react-icons/si";
import { AiOutlineJavaScript, AiOutlinePython } from "react-icons/ai";

export const dataQuickLinksSidebar = [
  {
    icon: PanelsTopLeft,
    label: "All Snippets",
    href: "/my-notes",
  },
  {
    icon: Heart,
    label: "Favorites",
    href: "/favorites",
  },
  {
    icon: Trash,
    label: "Trash",
    href: "/Trash",
  },
];

export const dataLanguagesSidebar = [
  {
    icon: AiOutlineJavaScript,
    label: "JavaScript",
    href: "/javaScript",
    count: 3,
  },
  {
    icon: AiOutlinePython,
    label: "Python",
    href: "/python",
    count: 10,
  },
  {
    icon: SiCsharp,
    label: "Csharp",
    href: "/csharp",
    count: 4,
  },
];

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
];