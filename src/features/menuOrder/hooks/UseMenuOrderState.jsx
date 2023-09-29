import { useEffect, useState } from "react";
import dummyData from "../../../data/dummy_meals.json";

function UseMenuOrderState() {
  
  const [shouldShowFullImage, setShowFullImage] = useState(null);
  const [selectedMeals, selectAMeal] = useState([]);

  const showImage = (image) => {
    setShowFullImage(image);
  };

  useEffect(() => {
    console.log(selectedMeals)
  
  }, [selectedMeals])
  

  const appendSelectedMeal = (index, selectedMealIndex) => {
    console.log(`${index} ${selectedMealIndex}`)
    selectAMeal((pre) => {
     const array = [...pre];
     array[index] = selectedMealIndex;
     return array;
    });

  }

  return {
    shouldShowFullImage,
    showImage,
    dummyData,
    selectedMeals,
    appendSelectedMeal
  };
}

export default UseMenuOrderState;
