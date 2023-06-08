import FooterLogo from '../footerLogo/FooterLogo'
import CompanyNumber from '../companyNumber/CompanyNumber'
import './CompanyDetails.scss'
import CompanyLocation from '../compamyLocation/CompanyLocation'

const CompanyDetails = () => {
  return (
    <div className="companyDetails__container">
        <FooterLogo />
        <CompanyNumber />
        <CompanyLocation />
    </div>
  )
}

export default CompanyDetails