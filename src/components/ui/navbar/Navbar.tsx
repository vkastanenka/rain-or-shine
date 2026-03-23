import { FaSearch } from "react-icons/fa";
import {
  RainOrShineLogomark,
  RainOrShineLogotype,
} from "@/assets/icons/rain-or-shine";
import { Container, FlexRow } from "@/components/layout";
import { useGetLocalityByCoords } from "@/services";
import { ButtonLink } from "../button";
import { NavButton } from "./NavButton";
import {
  ARIA_LABELS,
  NAV_BUTTON_VARIANT_MAP,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "./constants";

export const Navbar = () => {
  const { data: locality } = useGetLocalityByCoords();

  const openLocationSearch = () => {
    console.log("Open search drawer");
  };

  return (
    <nav className="bg-base-300 py-3 sticky top-0">
      <Container>
        <FlexRow gap={2} align="center" justify="between">
          <ButtonLink aria-label={ARIA_LABELS.home} to="/" unstyled>
            <RainOrShineLogotype className="hidden md:block w-60 lg:w-70" />
            <RainOrShineLogomark className="block md:hidden w-10 sm:w-1" />
          </ButtonLink>
          <FlexRow gap={2} align="center">
            <FlexRow gap={2} align="center" className="hidden sm:flex">
              {NAV_LINKS.map((link, i) => (
                <NavButton
                  key={`${link.label}-${i}`}
                  to={
                    typeof link.to === "function" ? link.to(locality) : link.to
                  }
                >
                  {link.label}
                </NavButton>
              ))}
            </FlexRow>
            <NavButton
              aria-label={ARIA_LABELS.search}
              variant={NAV_BUTTON_VARIANT_MAP.icon}
              onClick={openLocationSearch}
            >
              <FaSearch />
            </NavButton>
            {SOCIAL_LINKS.map(({ ariaLabel, href, Icon }, i) => (
              <NavButton
                key={`navbar-social-link-${i}`}
                aria-label={ariaLabel}
                href={href}
                variant={NAV_BUTTON_VARIANT_MAP.icon}
              >
                <Icon />
              </NavButton>
            ))}
          </FlexRow>
        </FlexRow>
      </Container>
    </nav>
  );
};
