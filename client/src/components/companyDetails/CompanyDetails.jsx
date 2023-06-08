import FooterLogo from '../footerLogo/FooterLogo'
import CompanyNumber from '../companyNumber/CompanyNumber'
import './CompanyDetails.scss'
import CompanyLocation from '../compamyLocation/CompanyLocation'
import CompanyEmail from '../companyEmail/CompanyEmail'

const CompanyDetails = () => {
  return (
    <div className="companyDetails__container">
        <FooterLogo />
        <CompanyNumber />
        <CompanyLocation />
        <CompanyEmail />
    </div>
  )
}

export default CompanyDetails