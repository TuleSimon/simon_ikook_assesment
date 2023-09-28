import React from "react";

function HarmBurgerIcon({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 8H18M6 12H18M6 16H18"
        stroke="#131313"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default HarmBurgerIcon;
