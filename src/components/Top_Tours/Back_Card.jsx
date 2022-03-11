function BackCard(props){
    return(
        <div className={`card__side card__side--back card__side--back-${props.tourNumber}`}>
          <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">{props.price}</p>
              </div>
          </div>
        </div>
    )
}
export default BackCard