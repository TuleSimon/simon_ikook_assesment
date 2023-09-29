import React from "react";

function CheckedIcon({width,height,className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} 
      className={className}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_32_8"
        style={{ maskType: "luminance" }}
        width="22"
        height="22"
        fill="#fff"
        x="1"
        y="1"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 22a9.97 9.97 0 007.071-2.929A9.967 9.967 0 0022 12a9.968 9.968 0 00-2.929-7.071A9.968 9.968 0 0012 2a9.969 9.969 0 00-7.071 2.929A9.97 9.97 0 002 12a9.968 9.968 0 002.929 7.071A9.968 9.968 0 0012 22z"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12l3 3 6-6"
        ></path>
      </mask>
      <g mask="url(#mask0_32_8)">
        <path fill="#FCC11D" d="M0 0h24v24H0V0z"></path>
      </g>
    </svg>
  );
}

export default CheckedIcon;