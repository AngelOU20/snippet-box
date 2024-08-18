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
    id: 1,
    icon: PanelsTopLeft,
    name: "All Snippets",
    href: "/my-notes",
    isSelected: true,
  },
  {
    id: 2,
    icon: Heart,
    name: "Favorites",
    href: "/favorites",
    isSelected: false,
  },
  {
    id: 3,
    icon: Trash,
    name: "Trash",
    href: "/Trash",
    isSelected: false,
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