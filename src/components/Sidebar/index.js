import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt= "logo" />
        <img className='sub-logo' src={LogoSubtitle} alt= "slobodan" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/haythem-hemaissi-363121218/'  >
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Haythem-hms'  >
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://dribbble.com/Hemaissi'  >
                <FontAwesomeIcon icon={faDribbble} color='#4d4d4e'/>
            </a>
        </li>
    </ul>

</div>
)
export default Sidebar
