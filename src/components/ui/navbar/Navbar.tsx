import { FaSearch } from "react-icons/fa";
import {
  RainOrShineLogomark,
  RainOrShineLogotype,
} from "@/assets/icons/rain-or-shine";
import { APP_ROUTES, ACCESSIBILITY_LABELS } from "@/constants";
import { Container, FlexRow } from "@/components/layout";
import { useGetLocalityByCoords } from "@/services";
import { Button, ButtonLink, ButtonAnchor } from "../button";
import {
  NAV_LINKS,
  NAV_SOCIAL_LINKS,
  ICON_BUTTON_STYLES,
  TEXT_BUTTON_STYLES,
} from "./constants";
import { resolveTo } from "./utils";

export const Navbar = () => {
  const { data: locality } = useGetLocalityByCoords();

  const openLocationSearch = () => {
    console.log("Open search drawer");
  };

  return (
    <nav className="bg-base-300 py-3 sticky top-0">
      <Container>
        <FlexRow gap={2} align="center" justify="between">
          <ButtonLink
            to={APP_ROUTES.home.path}
            aria-label={ACCESSIBILITY_LABELS.navigation.home}
            unstyled
          >
            <RainOrShineLogotype className="hidden md:block w-60 lg:w-70" />
            <RainOrShineLogomark className="block md:hidden w-10 sm:w-1" />
          </ButtonLink>
          <FlexRow gap={2} align="center">
            <FlexRow gap={2} align="center" className="hidden sm:flex">
              {NAV_LINKS.map((link, i) => (
                <ButtonLink
                  key={`${link.label}-${i}`}
                  to={resolveTo(link, locality)}
                  showActive={true}
                  {...TEXT_BUTTON_STYLES}
                >
                  {link.label}
                </ButtonLink>
              ))}
            </FlexRow>
            <Button
              aria-label={ACCESSIBILITY_LABELS.actions.searchDrawer}
              onClick={openLocationSearch}
              {...ICON_BUTTON_STYLES}
            >
              <FaSearch />
            </Button>
            {NAV_SOCIAL_LINKS.map(({ ariaLabel, href, Icon }, i) => (
              <ButtonAnchor
                key={`navbar-social-link-${i}`}
                aria-label={ariaLabel}
                href={href}
                {...ICON_BUTTON_STYLES}
              >
                <Icon />
              </ButtonAnchor>
            ))}
          </FlexRow>
        </FlexRow>
      </Container>
    </nav>
  );
};
