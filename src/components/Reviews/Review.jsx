function Review(props){
   
   return(
       <div className="story row">
          <figure className="story__shape">
            <img src={require(`../../images/${props.image}`)} alt="Person on a tour" className="story__img"/>
            <figurecaption className="story__caption">{props.reviewerName}</figurecaption>
          </figure>
          <div className="story__text">
            <h3 className="tertiary-heading ">{props.reviewTitle}</h3>
            <p className="paragraph">{props.reviewText}</p>
          </div>
          
       </div>
   )
}
export default Review