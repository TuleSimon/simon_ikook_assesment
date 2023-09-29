import React from "react";
import "./menu.css";
import FilledButton3 from "../../../components/filledbutton/FilledButton3";
import SaveIcon from "../../../assets/icons/SaveIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import StarIcon from "../../../assets/icons/Starcon";

function SimilarMenuItem({ image }) {
  return (
    <div className="similarmenuitem">
      <div className="menuitem">
        <img src={image} className="image" alt="image" />

        <div className="content">
          <div className="flex between w-full">
            <FilledButton3 custom="customFilledButton">Italian</FilledButton3>
            <SaveIcon width={35} height={35} color="white" />
          </div>

          <div className="flex between w-full">
            <p className="textMedium" style={{ color: "white" }}>
              Grilled Barbecue Dishes
            </p>
            <p className="colorPrimary textMedium m-0 "> €20pp </p>
          </div>
        </div>
      </div>

      <div className=" text">
        <div className="flex flex2">
          <img src="/chef.jpg" width={40} height={40} className="rounded2"/>
          <div className="flex flex2 flex-col flex-col2">
            <p className="p2">Jim Howard</p>
            <p className="small"> <LocationIcon width={15} height={15}/>London</p>
          </div>
        </div>
        <div className="flex flex-col end">
            <p className="textMedium center m-0"> <StarIcon width={16} height={16}/> 4.6</p>
            <p className="small"> (23 Reviews) </p>
          </div>
      </div>
    </div>
  );
}

export default SimilarMenuItem;
