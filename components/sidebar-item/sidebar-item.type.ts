import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type SidebarItemProps = {
  item: {
    label: string;
    icon: LucideIcon | IconType;
    href: string;
    count?: number;
  };
};