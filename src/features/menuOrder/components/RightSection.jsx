import React from "react";
import LocationIcon from "../../../assets/icons/LocationIcon";
import StarIcon from "../../../assets/icons/Starcon";
import ChefImage from "../../../components/chefimage/ChefImage";
import Tab from "./tab/Tab";
import SelectableMenu from "./selectable_menu/SelectableMenu";

function RightSection({ dummyData, onSelected,selected }) {
  return (
    <div className="rightSection">
      <div className="between">
        <div className="flex flex-col">
          <h1> Chef Titilayo John</h1>
          <div className="flex gap-8">
            <p className="textSmall">
              {" "}
              <LocationIcon width={15} height={15} /> London{" "}
            </p>
            <p className="textSmall">
              <StarIcon width={15} height={15} /> 4.6{" "}
              <span style={{ marginLeft: "4px" }} className="textSmall bold">
                {" "}
                (23 reviews){" "}
              </span>
            </p>
          </div>
        </div>
        <ChefImage image="/chef.jpg" />
      </div>

      <hr />

      <Tab />

      <hr className="mt-2" />

      <div style={{ gap: "30px" }} className="flex flex-col">
        {dummyData.map((dummy, index) => (
          <SelectableMenu
            key={index}
            selected={selected[index]}
            title={dummy.title}
            description={dummy.description}
            price={dummy.price}
            options={dummy.options}
            onSelected={(e) => onSelected(index, e)}
          />
        ))}
      </div>
    </div>
  );
}

export default RightSection;
