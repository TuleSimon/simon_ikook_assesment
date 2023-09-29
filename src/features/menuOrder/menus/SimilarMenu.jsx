import React from "react";
import "./menu.css";
import LeftArrow from "../../../assets/icons/LeftArrow";
import RightArrow from "../../../assets/icons/RightArrow";
import SimilarMenuItem from "./SimilarMenuItem";

function SimiliarMenu() {
  return (
    <div className="flex flex-col similarmenu">
      <div className="headingDIv" style={{ marginBottom: "10px" }}>
        <h1 className="m-0">Similiar Menu by other Chefs</h1>
        <div className="flex">
          <LeftArrow width={55} height={55} />
          <RightArrow width={55} height={55} />
        </div>
      </div>

      <div className="menugrid">
        <SimilarMenuItem image="/food5.jpg" />
        <SimilarMenuItem image="/food6.jpg" />
        <SimilarMenuItem image="/food7.jpg" />
      </div>
    </div>
  );
}

export default SimiliarMenu;
