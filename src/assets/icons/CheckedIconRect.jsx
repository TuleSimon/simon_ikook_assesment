import React from "react";

function CheckedIconRect({ width, height, className }) {
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
        d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
        stroke="#FFD233"
        strokeWidth="2"
        strokeLineCap="round"
        strokeLineJoin="round"
      />
      <path
        d="M9 12L11.25 14L15 10"
        stroke="#FFD233"
        strokeWidth="2"
        strokeLineCap="round"
        strokeLineJoin="round"
      />
    </svg>
  );
}

export default CheckedIconRect;
