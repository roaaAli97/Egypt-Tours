import '../../index.css'
import BookingForm from "./Booking_Form"
function BookingSection(){
   return(
       <section className="booking-section">
        <div className="book">
          <div className="u-margin-bottom-small">
            <h2 className="secondary-heading">Start Booking Now</h2>
          </div>
          <BookingForm/>
        
        </div>
       </section>
      
   )
}

export default BookingSection