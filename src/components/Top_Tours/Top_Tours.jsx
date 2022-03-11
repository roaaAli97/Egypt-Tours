import FrontCard from './Front_Card'
import BackCard from './Back_Card'
import '../../index.css'
function TopTours(props){
    console.log(props)
   return(
       <div className="col-1-of-3">
         <div className="card">
         <FrontCard title={props.tour.title} cardDetails={props.tour.details} tourNumber={props.tour['tour_number']}/>
         <BackCard price={props.tour.price} tourNumber={props.tour['tour_number']}/>
         </div>
       </div>
      
   )
}
export default TopTours