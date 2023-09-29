import React from 'react'
import './reviewSection.css'
import Rating from '../../../../components/rating/rating';
import ProgressbarDesc from '../../../../components/pressbardesc/ProgressbarDesc';
import ReviewItem from './ReviewItem';
import FilledButton3 from '../../../../components/filledbutton/FilledButton3';

function ReviewSection({reviews}) {

  function calculateAverageRatings() {
    if (reviews.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero.
    }
  
    const totalRatings = reviews.reduce((sum, ratingObj) => sum + ratingObj.ratingSum, 0);
    const averageRating = (totalRatings / reviews.length).toFixed(2);;
  
    return parseFloat(averageRating);
  }

  const average = calculateAverageRatings();
  return (
    <div className='flex flex-col child'>

    <h1>Reviews</h1>

    <div className='paren'>
      <div className='flex averagesection'>
      <h1>{average}</h1>
        <div className='start'>
            <Rating rating={[1,1,1,1,1]}/>
            <p className='title'> {reviews.length} Reviews </p>
        </div>
      </div>  
      
       <div className='statssection'>
        <ProgressbarDesc title="Performance"value="253" width={100}/>
        <ProgressbarDesc title="Services"value="123" width={65}/>
        <ProgressbarDesc title="Punctuality"value="36" width={30}/>
      </div>
    </div>

    <div className='review_grid'>

      {reviews.slice(0,4).map((review,index) => <ReviewItem key={index} review={review}/>)}

    </div>

      
    <FilledButton3> View all reviews ({reviews.length})</FilledButton3>
      
    </div>
  )
}

export default ReviewSection
