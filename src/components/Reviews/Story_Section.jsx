
import '../../index.css'
import ReviewList from './Review_List'
function StorySection(){
   return(
       <div className="section-stories">
       <div className="u-margin-bottom-medium u-text-center">
        <h2 className="secondary-heading u-color-white">We make people genuinely happy</h2>
       </div>
        
         <ReviewList/>
         <div className="u-text-center">
           <button className="btn btn--dark">Discover all tours</button>
         </div>
       
       </div>
   )
}
export default StorySection