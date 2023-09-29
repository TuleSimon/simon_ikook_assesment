import React from "react";

function RightArrow({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      className={className}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#676664"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 15L14 12L11 9"
        stroke="#676664"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default RightArrow;
