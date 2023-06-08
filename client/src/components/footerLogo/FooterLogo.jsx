import Logo from '../../assets/images/mlv-logo-files/original-on-transparent.png'
import './FooterLogo.scss'

const FooterLogo = () => {
  return (
    <img 
        src={Logo} 
        alt='Logo' 
        className="footerLogo__image" 
    />
  ) 
}

export default FooterLogo