import React from "react";
import ImageGrid from "../features/menuOrder/components/ImageGrid";
import UseMenuOrderState from "../features/menuOrder/hooks/UseMenuOrderState";
import ImagePopUp from "../features/menuOrder/components/ImagePopUp";
import FilledButton from "../components/filledbutton/FilledButton";
import ShareIcon from "../assets/icons/ShareIcon";
import SaveIcon from "../assets/icons/SaveIcon";
import RightSection from "../features/menuOrder/components/RightSection";

function MenuOrderPage() {
  const {
    shouldShowFullImage,
    showImage,
    dummyData,
    selectedMeals,
    appendSelectedMeal,
  } = UseMenuOrderState();

  return (
    <div className="container">
      {shouldShowFullImage && (
        <ImagePopUp
          image={shouldShowFullImage}
          onDismiss={(e) => showImage(null)}
        />
      )}

      <section className="flex flex-col mt-2 gap-2">
        <h1>Braised Chicken With Lemon and Olives</h1>
        <div className="flex gap-2 between w-full">
          <div className="flex gap-2">
            <p className="textSmall"> 3 Courses Include </p>
            <p className="textSmall">&bull;</p>
            <p className="textSmall"> 10 menus to choose </p>
            <p className="textSmall">&bull;</p>
            <p className="textSmall colorPrimary"> Italian </p>
          </div>

          <div className="flex gap-4">
            <FilledButton>
              {" "}
              <ShareIcon width={20} height={20} /> Share{" "}
            </FilledButton>
            <FilledButton>
              {" "}
              <SaveIcon width={20} height={20} /> Save{" "}
            </FilledButton>
          </div>
        </div>

        <ImageGrid onClick={(e) => showImage(e)} />
      </section>

      <section className="middleGrid ">
        <section className="rightSection">
          {React.useMemo(
            () => (
              <RightSection
                onSelected={(e, r) => appendSelectedMeal(e, r)}
                selected={selectedMeals}
                dummyData={dummyData}
              />
            ),
            [selectedMeals, dummyData, appendSelectedMeal]
          )}
        </section>

        {/* Left */}
        <section className="leftSection"></section>
      </section>
    </div>
  );
}

export default MenuOrderPage;
