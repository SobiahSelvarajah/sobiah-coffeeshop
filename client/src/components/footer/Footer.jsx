import CompanyDetails from '../companyDetails/CompanyDetails'
import OpeningHours from '../openingHours/OpeningHours'
import Socials from '../socials/Socials'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer__container">
      <CompanyDetails />
      <OpeningHours />
      <Socials />
    </div>
    
  )
}

export default Footer 