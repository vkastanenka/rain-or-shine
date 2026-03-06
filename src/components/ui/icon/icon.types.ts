export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  sizeX?: number | string;
  sizeY?: number | string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;
