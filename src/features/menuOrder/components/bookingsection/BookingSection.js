import React from "react";
import "./bookingsection.css";
import ChefImage from "../../../../components/chefimage/ChefImage";
import StarIcon from "../../../../assets/icons/Starcon";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import CheckedIcon from "../../../../assets/icons/CheckedIcon";
import CheckedIconRect from "../../../../assets/icons/CheckedIconRect";
import FilledButton3 from "../../../../components/filledbutton/FilledButton3";

function BookingSection() {
  const characterisitcs = [
    "Chef at Home",
    "Large Event",
    "Meal Prep",
    "+3 more",
  ];

  return (
    <div className="parent">
      <div className="flex flex-col child">
        <div className="chefHeader w-full">
          <ChefImage image="/chef.jpg" />
          <div className="flex flex-col w-full" style={{gap:"5px"}}>
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
        </div>

        <p className="mb-0">
          {" "}
          Consequat officia aliquip nulla ea commodo ad officia officia. Eu
          dolore dolor eu velit magna sit ullamco. Enim dolore tempor minim
          dolore laborum.{" "}
        </p>
        <a href="" className="colorPrimary underline ">
          {" "}
          read more{" "}
        </a>

        <div className="flex gap-1">
          {characterisitcs.map((character) => (
            <div key={character} className="character">
              <CheckedIconRect width={15} height={15} />
              <p>{character}</p>
            </div>
          ))}
        </div>

        <FilledButton3>View Profile</FilledButton3>
      </div>

      <div className="flex flex-col child">
        <div className="chefHeader w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6 2L2 8L12 22L22 8L18 2H6Z" fill="#CD3227" />
          </svg>
          <div  >
            <p className="title m-0 p-0"> Congratulations, She's available</p>
         
              <p className=" m-0">
                Chef Titilayo is usually fully booked{" "}
              </p>
           
          </div>
        </div>

        <p className="title small"> Want to request a personalized menu based on your requirements?</p>

        <p className="">
                just message chef Titilayo and discuss the details of your event and the requirements you have
        </p>
    

        <FilledButton3>Message Chef</FilledButton3>
      </div>
    </div>
  );
}

export default BookingSection;
