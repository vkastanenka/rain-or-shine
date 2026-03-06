import React from "react";
import { IconWrapper } from "@/components";

interface SunPathIconProps {
  progress?: number;
}

// This is the internal component that IconWrapper will use
const SunPathIconSVG = React.forwardRef<SVGSVGElement, SunPathIconProps>(
  ({ progress = 50, ...props }, ref) => {
    const sunColor = "#FFE411";
    const horizonColor = "#A7D2D7";
    const glowColor = "#D7B574";

    // 1. Define the geometry of the arch
    const centerX = 67; // Middle of the 134px original grid
    const centerY = 79; // Horizon line Y level
    const radius = 35; // Distance from center to the dotted arch

    // 2. Map 0-100% to 180 degrees down to 0 degrees (left to right)
    // We use Math.PI for radians. 0% = PI, 100% = 0.
    const angleInRadians = Math.PI - (progress / 100) * Math.PI;

    const sunX = centerX + radius * Math.cos(angleInRadians);
    const sunY = centerY - radius * Math.sin(angleInRadians);

    // Calculations for the Wedge (Slice)
    const startX = centerX - radius; // Far left point
    const startY = centerY;

    // SVG Arc flag: 1 if progress > 100 (not possible here), else 0.
    // Since it's a semicircle, large-arc-flag is always 0.
    const largeArcFlag = 0;

    // Construct the path:
    // Move to Center -> Line to Left -> Arc to Sun -> Close path back to Center
    const wedgePath = `
      M ${centerX} ${centerY}
      L ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${sunX} ${sunY}
      Z
    `;

    return (
      <svg
        viewBox="10 27 116 68"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props} // IconWrapper passes width="100%", height="100%", and classNames here
      >
        {/* Background Shadow / Glow */}
        <path
          d={wedgePath}
          fill={horizonColor}
          style={{ opacity: 0.3, isolation: "isolate" }}
        />

        {/* Large Faded Glow Circle */}
        <circle
          cx={sunX}
          cy={sunY}
          r="15.08"
          fill={glowColor}
          style={{ opacity: 0.4, isolation: "isolate" }}
        />

        {/* Semicircle Dotted Arch */}
        <g id="Arch_Pattern">
          <path
            d="M67 44h1v1h-1Zm6 .49h.08l.49.08H74l-.2 1-1-.17ZM78.81 46l.27.1.62.23-.35.94c-.3-.12-.61-.23-.92-.33Zm5.48 2.43.18.1h.12l.42.24h.15l-.5.87c-.28-.17-.57-.33-.85-.48Zm5 3.31.32.25h.11l.35.29-.64.76-.76-.61Zm4.38 4.08.46.51.08.09-.76.65-.65-.73Zm3.65 4.75.1.16.26.43-.85.52c-.17-.28-.34-.55-.52-.82Zm2.82 5.3V66c.1.22.19.45.28.67l-.93.37-.37-.9Zm1.86 5.62c.07.33.15.65.22 1l-1 .21-.22-1Zm.91 5.93V78h-1a5.6 5.6 0 0 0-.06-1ZM98.56 79h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-6 0h1v1h-1Zm-1.29-3.43 1 .12c0 .32-.07.64-.1 1l-1-.1v-.1a7.31 7.31 0 0 1 .1-.95Zm1.23-5.87 1 .29c-.09.31-.18.62-.26.93l-1-.26.06-.2a7 7 0 0 1 .2-.79Zm2.18-5.58.9.44-.42.88-.91-.44c.11-.23.22-.47.34-.7ZM37.77 59l.81.59-.56.79-.82-.56V59.53h.1Zm3.89-4.55.71.71c-.23.22-.46.46-.68.69l-.69-.74.55-.56h.05Zm4.59-3.85.58.81-.78.57-.6-.8h.12l.57-.41Zm5.17-3 .43.9-.87.43-.45-.93ZM57 45.37l.28 1-.93.29-.31-1 .25-.07h.13Zm5.9-1.17.11 1a4.21 4.21 0 0 0-1 .12l-.14-1 .45-.06h.31Z"
            fill={horizonColor}
          />
        </g>

        {/* Horizon Line */}
        <path
          d="M25.5 79.47h84"
          stroke={horizonColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Decorative Up/Down Arrows */}
        <path
          d="M122.37 71.05v2.18c0 .38.13.49.48.47a5.91 5.91 0 0 1 1 0c.44 0 .57.32.32.66-.86 1.14-1.75 2.27-2.63 3.39a.41.41 0 0 1-.71 0c-.87-1.11-1.74-2.22-2.59-3.35-.28-.38-.13-.65.33-.7h.13c1.34-.06 1.34-.06 1.34-1.38v-3.4c0-.8.26-1 1.2-1s1.1.22 1.11 1Z"
          fill="#FEAA47"
        />
        <path
          d="M13.63 75.12v-2.24c0-.34-.11-.46-.45-.44s-.68 0-1 0-.63-.29-.37-.63c.86-1.17 1.76-2.31 2.66-3.44.22-.28.5-.21.7 0a160.6 160.6 0 0 1 2.55 3.29c.32.43.17.69-.38.74s-1-.2-1.29.1-.09.9-.09 1.36v3.33c0 .76-.28 1-1.16 1s-1.14-.22-1.15-1-.02-1.37-.02-2.07Z"
          fill="#FEE953"
        />

        {/* Main Sun Circle */}
        <circle cx={sunX} cy={sunY} r="6.9" fill={sunColor} />
      </svg>
    );
  },
);

export const SunPathIcon = IconWrapper(SunPathIconSVG);
