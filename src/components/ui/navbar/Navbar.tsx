import { FaSearch, FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { FlexRow } from "@/components/layout";
import { Button } from "../button";
import { Text } from "../text";
import type { JSX } from "react";
import type { LinkProps } from "@tanstack/react-router";

interface SocialLinks {
  icon: JSX.Element;
  href: string;
  label: string;
}

const SOCIAL_LINKS: SocialLinks[] = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/vkastanenka/",
    label: "LinkedIn",
  },
  { icon: <FaBriefcase />, href: "/portfolio", label: "Portfolio" },
  {
    icon: <FaGithub />,
    href: "https://github.com/vkastanenka/",
    label: "GitHub",
  },
];

interface NavLinks {
  label: string;
  href: LinkProps["to"];
}

const NAV_LINKS: NavLinks[] = [
  { label: "Weather", href: "/weather" },
  { label: "Maps", href: "/maps" },
];

export const Navbar = () => {
  return (
    <nav className="bg-neutral py-3 px-3 sticky top-0">
      <FlexRow gap={2} align="center" justify="between">
        <Button to="/" unstyled aria-label="Rain or Shine Home">
          <Text type={{ base: "headline5", sm: "headline4" }}>
            Rain or Shine
          </Text>
        </Button>
        <FlexRow gap={2} align="center">
          <FlexRow gap={2} align="center" className="hidden sm:flex">
            {NAV_LINKS.map((link) => (
              <Button key={link.label} variant="ghost" to={link.href}>
                {link.label}
              </Button>
            ))}
          </FlexRow>
          <Button
            variant="ghost"
            shape="circle"
            size={{ base: "sm", sm: "md" }}
            aria-label="Search"
          >
            <FaSearch />
          </Button>
          {SOCIAL_LINKS.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              variant="ghost"
              shape="circle"
              size={{ base: "sm", sm: "md" }}
              aria-label={link.label}
            >
              {link.icon}
            </Button>
          ))}
        </FlexRow>
      </FlexRow>
    </nav>
  );
};
