import CompanyDetails from '../companyDetails/CompanyDetails'
import OpeningHours from '../openingHours/OpeningHours'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer__container">
      <CompanyDetails />
      <OpeningHours />
    </div>
    
  )
}

export default Footer 