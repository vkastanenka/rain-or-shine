import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconWrapper = (
  SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>,
) => {
  return ({ size = 24, ...props }: IconProps) => (
    <SVGComponent width={size} height={size} {...props} />
  );
};
