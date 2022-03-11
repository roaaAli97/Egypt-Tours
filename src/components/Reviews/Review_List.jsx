import {useState,useEffect} from 'react'
import {projectFireStore} from '../../firebase/config'
import Review from './Review'
function ReviewList(){
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        const results=[]
       projectFireStore.collection('reviews').get().then((snapshot)=>{
           snapshot.docs.forEach((doc)=>{
               results.push({id:doc.id,...doc.data()})
           })
           setReviews(results)
       })
    },[])

   return(
       <div>
         {reviews.map(review=>{
             return <Review
                    image={review.image}
                    reviewerName={review['reviewer_name']}
                     reviewTitle={review['review_title']}
                     reviewText={review['review_text']}/>
         })}
       </div>
   )
}
export default ReviewList