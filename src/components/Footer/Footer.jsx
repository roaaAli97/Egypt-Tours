import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
import '../../index.css'
function Footer(){
  return(
      <div className="footer-section">
        <div className="footer__navigation">
          <ul className="footer__list">
           <li className="footer__item"><a href='/' className="footer__link">Company</a></li>
           <li className="footer_item"><a href='/' className="footer__link">Contact us</a></li>
           <li className="footer_item"><a href='/' className="footer__link">Careers</a></li>
           <li className="footer_item"><a href='/' className="footer__link">Privacy Policy</a></li>
           <li className="footer_item"><a href='/' className="footer__link">Terms</a></li>
          </ul>
        </div>
        <div className="icons">
           <FaFacebook color={'white'} size={'40px'}/>
           <FaTwitter color={'white'} size={'40px'}/>
           <FaInstagram color={'white'} size={'40px'}/>
           <FaLinkedin color={'white'} size={'40px'} />
        </div>
        <div></div>
      </div>
  )
}
export default Footer