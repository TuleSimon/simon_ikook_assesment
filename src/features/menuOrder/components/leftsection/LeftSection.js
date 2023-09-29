import React, { useEffect, useState } from "react";
import "./leftsection.css";
import Progressbar from "./Progressbar";
import Textfield from "../../../../components/textfield/Textfield";
import FilledButton2 from "../../../../components/filledbutton/FilledButton2";

function LeftSection({ dishes }) {
  const [progress, setProgress] = useState(0);

  function getProgress() {
    const nonNullCount = dishes.filter((item) => item !== null).length;
    const arrayLength = dishes.length;

    if (arrayLength === 0) {
      return 0; // Return 0% for an empty array
    }
    const percentage = (nonNullCount / 3) * 100;
    return percentage;
  }

  useEffect(() => {
    if (dishes !== undefined || dishes !== null) {
      setProgress(getProgress);
    }
  }, [dishes]);

  return (
    <div className="leftSection layout2">
      <p className="header"> €20pp </p>

      <div className="flex flex-col progressLayout">
        <p className="choose">Choose from 3 courses (1 per course) </p>
        <Progressbar height="10px" width={progress} />
        {progress >= 100 && (
          <p className="warning"> Extra dish will cost you €10 per person </p>
        )}
      </div>

      <Textfield title="Location" placeholder="Lagos, Nigeria"/>
      <Textfield title="Event Date" type="date" placeholder="28/08/2023"/>
      <Textfield title="Guests" placeholder="10 Guests" endimage="https://static.thenounproject.com/png/1123247-200.png"/>

      <div className="between">
        <p className="textSmall removeGap">10 Guests x €20</p>
        <p className="textSmall removeGap"> €56</p>
      </div>
      <div className="between">
        <p className="textSmall removeGap">Platform Fee</p>
        <p className="textSmall removeGap"> €20</p>
      </div>

      <hr className="removeGap"/>
      <div className="between">
        <p className="">TOTAL</p>
        <p className="">  €345</p>
      </div>

      <FilledButton2> Proceed to Cart ({dishes.filter((item) => item !== null).length}) </FilledButton2>

      <div className="summary">

      <p className="title">The Menu Includes</p>
      <ul>
        <li> All Ingredients</li>
        <li> Chef's Travel and Insurance Cost</li>
        <li> Serving and Cleanup</li>
        <li> Money Protection</li>
      </ul>

      </div>
    </div>
  );
}

export default LeftSection;
