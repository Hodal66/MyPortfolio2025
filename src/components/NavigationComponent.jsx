
import LogoYanjye from "../assets/images/HodalLogo.png"
import { FaFacebookF, FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
function NavigationComponent() {
  return (
    <div>
        <nav className="navigationSection">
            <div >
                <img src={LogoYanjye} alt="Muheto Hodal Logo" />
            </div>
            <div className="navigationList">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">AboutUs</a></li>
                    <li><a href="/contact">ContactUs</a></li> 
                </ul>
            </div>
            <div>
                <ul>
                    <li><FaFacebookF/></li>
                    <li><FaLinkedinIn /></li>
                   <li><FaInstagram /> </li>
                   <li><FiTwitter/></li>
                   
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default NavigationComponent
