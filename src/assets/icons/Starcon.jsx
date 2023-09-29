import React from "react";

function StarIcon({width,height,className}) {
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
        fill="#FFD233"
        d="M3.825 19l1.625-7.025L0 7.25l7.2-.625L10 0l2.8 6.625 7.2.625-5.45 4.725L16.175 19 10 15.275 3.825 19z"
      ></path>
    </svg>
  );
}

export default StarIcon;