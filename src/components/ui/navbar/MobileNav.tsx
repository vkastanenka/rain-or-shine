import { ButtonLink, FlexCol, Text } from "@/components";
import { useGetLocalityByCoords } from "@/services";
import { NAV_LINKS, TEXT_BUTTON_STYLES } from "./constants";
import { resolveTo } from "./utils";
import { NavContainer } from "./NavContainer";

export const MobileNav = () => {
  const { data: locality } = useGetLocalityByCoords();
  return (
    <NavContainer position="bottom" className="block sm:hidden">
      {NAV_LINKS.map(({ label, path, Icon }, i) => (
        <ButtonLink
          key={`${label}-${i}`}
          to={resolveTo({ label, path, Icon }, locality)}
          showActive={true}
          {...TEXT_BUTTON_STYLES}
        >
          <FlexCol align="center">
            <Icon className="w-4 h-4" />
            <Text type="caption">{label}</Text>
          </FlexCol>
        </ButtonLink>
      ))}
    </NavContainer>
  );
};
