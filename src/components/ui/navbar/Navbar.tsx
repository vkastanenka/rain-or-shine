import type { JSX } from "react";
import { FaSearch, FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { Container, FlexRow } from "@/components/layout";
import { useGetLocalityByCoords } from "@/services";
import { formatWeatherUrl } from "@/utils";
import { Button } from "../button";
import { Text } from "../text";

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

export const Navbar = () => {
  const { data: locality } = useGetLocalityByCoords();
  const weatherHref = locality ? formatWeatherUrl(locality) : "/";

  return (
    <nav className="bg-neutral py-3 sticky top-0">
      <Container>
        <FlexRow gap={2} align="center" justify="between">
          <Button to="/" unstyled aria-label="Rain or Shine Home">
            <Text type={{ base: "headline5", sm: "headline4" }}>
              Rain or Shine
            </Text>
          </Button>
          <FlexRow gap={2} align="center">
            <FlexRow gap={2} align="center" className="hidden sm:flex">
              {/* Weather Button */}
              <Button variant="ghost" to={weatherHref as any}>
                Weather
              </Button>

              {/* Other Links */}
              <Button variant="ghost" to="/maps">
                Maps
              </Button>
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
      </Container>
    </nav>
  );
};
