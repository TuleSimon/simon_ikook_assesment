import React from "react";
import './textfield.css'


function Textfield({
  customClass,
  textfieldcustomClass,
  image,
  endimage,
  title,
  placeholder,
  type,
}) {
  return (
    <div className={`flex flex-col gap-small ${customClass}`}>
        {title && <p className="textSmall gap-small">{title}</p>}
    <div className={`flex gap-[12px] border`}>
      {image && (
        <img
          src={image}
          className="w-6 h-6"
          alt="Search"
          width={24}
          height={24}
        />
      )}
      <input
        placeholder={placeholder}
        type={type}
        className={`textfield ${textfieldcustomClass}`}
      />
      {endimage && (
        <img
          src={endimage}
          className="w-6 h-6"
          alt="Search"
          width={24}
          height={24}
        />
      )}
    </div>
    </div>
  );
}

export default Textfield;
