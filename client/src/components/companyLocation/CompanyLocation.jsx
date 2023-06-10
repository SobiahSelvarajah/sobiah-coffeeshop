import { HiLocationMarker } from "react-icons/hi"

const CompanyLocation = () => {
  return (
    <div className="companyLocation__container">
        <HiLocationMarker />
        <h4 className="companyLocation__location">
            26 Lover's Lane, London
        </h4>
    </div>
  )
}

export default CompanyLocation