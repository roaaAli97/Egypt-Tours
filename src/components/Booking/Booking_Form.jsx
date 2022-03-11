import '../../index.css'
function BookingForm(){
    return(
    <div className="book__form">

    <form action="#" className="form">
     <div className="form__group">
        <input id="name" type="text" placeholder="Full Name" className="form__input" required/>
        <label htmlFor="name" className="form__label">Full Name</label>
        
      </div>
   
      <div className="form__group">
        <input type="email" placeholder="Email address" className="form__input" required/>
        <label htmlFor="password" className="form__label">Email Address
        </label>
        
      </div>
         
      <div className="form__group">
          <div className="form__radio-group">
           <input id="small-tour-group" className="form__radio-input" name="tour-type" type="radio"/>
            <label htmlFor="small-tour-group" className="form__radio-label">
             <span className="form__radio-button"></span>
             Small Tour group
            </label>
            
          </div>

           <div className="form__radio-group">
             <input id="large-tour-group" type="radio" name="tour-type" className="form__radio-input"/>
             <label  htmlFor="large-tour-group" className="form__radio-label">
              <span className="form__radio-button"></span>
             Large tour group
             </label>
             
           </div>
      </div>

      <div className="form__group u-margin-top-medium">
        <button className="btn btn--dark">Next Step &rarr;</button>
      </div>
    

   
     </form>
    </div>
    )
}

export default BookingForm