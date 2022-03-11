import '../../index.css'
function FrontCard(props){
  return(
    <div className="card__side card__side--front">

     <div className={`card__picture card__picture--${props.tourNumber}`}></div>
     <h4 className="card__heading"><span className={`card__heading-span card__heading-span--${props.tourNumber}`}>{props.title}</span></h4>
     <div className="card__details">
        <ul>
         <li>{props.cardDetails[0]}</li>
         <li>{props.cardDetails[1]}</li>
         <li>{props.cardDetails[2]}</li>
         <li>{props.cardDetails[3]}</li>
         <li>{props.cardDetails[4]}</li>
        </ul>
     </div>

    </div>
  )
}

export default FrontCard;