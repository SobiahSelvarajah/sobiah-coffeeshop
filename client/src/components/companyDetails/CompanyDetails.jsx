import FooterLogo from '../footerLogo/FooterLogo'
import CompanyNumber from '../companyNumber/CompanyNumber'
import './CompanyDetails.scss'

const CompanyDetails = () => {
  return (
    <div className="companyDetails__container">
        <FooterLogo />
        <CompanyNumber />
    </div>
  )
}

export default CompanyDetails