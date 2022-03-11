function Navbar(){
  return(
      <div className="navigation">
          <input type="checkbox" id="nav-toggle" className="navigation__checkbox"/>
         
          <label htmlFor="nav-toggle" className="navigation__button">
           <span className="navigation__icon"></span>
          </label>
           <div className="navigation__background"></div>
          <nav className="navigation__nav">
           <ul className="navigation__list"> 
            <li className="navigation__item"><a href="/" className="navigation__link">About Egypt Tours</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Your benefits</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Popular tours</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Stories</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Book Now</a></li>
           </ul>
          </nav>
      </div>)
}
export default Navbar