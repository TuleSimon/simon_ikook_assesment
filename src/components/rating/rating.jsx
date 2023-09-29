import React from "react";
import "./rating.css";

function Rating({ width="28px",rating }) {
  return (
    <div className="center">
      {rating.map((rating) => (
        <>
          {rating == 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              style={{width:width}}
              fill="#fcc01c"
            >
              <path
                fill="#fcc01c"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
              />
            </svg>
          )}
          {rating == 0.5 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              style={{width:width}}
              fill="#fcc01c"
            >
              <path
                fill="#fcc01c"
                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
              />
            </svg>
          )}
          {rating === 0 && (
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              style={{width:width}}
            >
              <path
                fill="#676664"
                d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
              />
            </svg>
          )}
        </>
      ))}
    </div>
  );
}

export default Rating;
