import { useState } from 'react'

function UseMenuOrderState() {

    const [shouldShowFullImage, setShowFullImage] = useState(null);

    const showImage = (image) => {
        console.log(image);
        setShowFullImage(image);
    }


  return {
    shouldShowFullImage,
    showImage
  }
}

export default UseMenuOrderState
