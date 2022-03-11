import React from "react"
import '../../index.css'

function Header(){
  return(
      <React.Fragment>
       
      <header className="header">
       <div className="header__title">
        <h1 className="primary-heading">
          <span className="primary-heading--main">Your dream vacation is here</span>
           <span className="primary-heading--sub">capture  your most memorable and adventours experiences</span>
        </h1>
        <a href="/" className="btn btn--dark header__button"> Discover all places</a>
       </div>
     
      </header>

      </React.Fragment>
  )
}
export default Header