import React from 'react'
import './reviewSection.css'
import Rating from '../../../../components/rating/rating'

function ReviewItem({review}) {
  return (
    <div className='reviewitem'>

    <p className='title m-0'>{review.name}</p>
    <Rating width="18px" rating={review.rating}/>
    <p>{review.comment}</p>
    <p className='m-0' style={{color:"#bfbfbf", marginTop:"10px"}}>{review.date}</p>

      
    </div>
  )
}

export default ReviewItem
