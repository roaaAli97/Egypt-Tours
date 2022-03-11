import React from "react"
import luxorImage from '../images/luxor.jpg'
import safariImage from '../images/safari.jpg'
import sharmElSheikhImage from '../images/Sharm-el-Sheikh.jpg'
function About(){
    return(
  <div className="section-about">
   <h2 className=" u-margin-top-large secondary-heading">Exicting Tours for adventours people</h2>
   <div className="row">
      <div className="col-1-of-2">
          <h3 className="tertiary-heading">You are going to fall in love with nature</h3>
          <p class="paragraph">Egypt is home to a wide variety of animals and plants, including jackals, gazelles, crocodiles, and cobras. The best places to see Egypt's wildlife are in its more than 20 protected regions, which include oases, deserts, mountains, coastal areas, river islands, and wetlands</p>
          <h3 className="tertiary-heading">Live adventures like you have never before</h3>
          <p className="paragraph">Discover the ultimate Active adventure through Egypt! From hiking excursions to mountain playgrounds, there are private, group and tailor-made adventures to choose from. With some of our much-loved tour operators offering all-inclusive activity packages, you’re sure to find your perfect Egypt adventure</p>
      </div>

      <div className="col-2-of-2 ">
   
         <div class=" u-margin-top-medium composition">

         <img className="composition__photo composition__photo--1" src={luxorImage} alt="luxor in egypt"/>
         <img src={safariImage} className="composition__photo composition__photo--2" alt="safari in egypt"/>
         <img className="composition__photo composition__photo--3" src={sharmElSheikhImage} alt="sharm el sheikh"/>
         
         </div>
     
       
      </div>
   </div>
  </div>
    )
}
export default About