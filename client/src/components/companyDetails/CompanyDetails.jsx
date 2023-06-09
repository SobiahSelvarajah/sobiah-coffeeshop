import FooterLogo from '../footerLogo/FooterLogo'
import CompanyName from '../companyName/CompanyName'
import CompanyNumber from '../companyNumber/CompanyNumber'
import CompanyLocation from '../compamyLocation/CompanyLocation'
import CompanyEmail from '../companyEmail/CompanyEmail'
import './CompanyDetails.scss'

const CompanyDetails = () => {
  return (
    <div className="companyDetails__container">
        <FooterLogo />
        <CompanyName />
        <CompanyNumber />
        <CompanyLocation />
        <CompanyEmail />
    </div>
  )
}

export default CompanyDetails