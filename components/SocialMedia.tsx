import { Facebook, Github, Link, Linkedin, Slack, Youtube } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({className, iconClassName, tooltipClassName} : Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5")}>
        {socialLink.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a href={item?.href}  target="_blank" className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}>{item?.icon}</a>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold ")}>
                {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
