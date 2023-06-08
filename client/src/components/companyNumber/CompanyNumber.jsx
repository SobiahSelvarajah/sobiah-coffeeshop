import { FaPhoneAlt } from 'react-icons/fa'

const CompanyNumber = () => {
  return (
    <div className="companyNumber__container">
        <FaPhoneAlt />
        <h5 className="companyNumber__number">
            +44 123 456 7890
        </h5>
    </div>
  )
}

export default CompanyNumber