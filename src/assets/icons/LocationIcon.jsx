import React from "react";

function LocationIcon({width,height,className}) {
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
        d="M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z"
      ></path>
    </svg>
  );
}

export default LocationIcon;