import React from "react";
import "./selectable_menu.css";
import OptionItem from "./OptionItem";

function SelectableMenu({ title, description, price, options, onSelected,selected }) {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1>{title} (Select 1)</h1>
        <p className="textSmall">
          {description} <span className="colorPrimary">{price}</span>
        </p>
      </div>
      <hr className="mt-1" />

      <div className="flex flex-col w-full" style={{ gap: "20px" }}>
        {options.map((option, index) => (
          <OptionItem
            title={option.title}
            key={index}
            body={option.body}
            select={(e) => onSelected(index)}
            isChecked={selected===index}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectableMenu;
