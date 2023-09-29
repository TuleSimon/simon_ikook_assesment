import React from "react";

function UnCheckedIconRect({ width, height, className }) {
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
        stroke="#E3E6EC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4z"
      ></path>
    </svg>
  );
}

export default UnCheckedIconRect;
