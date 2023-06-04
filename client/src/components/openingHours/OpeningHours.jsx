import './OpeningHours.scss'

const OpeningHours = () => {
  return (
    <div className="openingHours__container">
        <h2 className="openingHours__heading">
            Opening Hours
        </h2>
        <ul className="openingHours__list">
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Monday:
                </h5>
                <h5 className="openingHours__time">
                    9AM - 6PM
                </h5>
            </li>
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Tuesday:
                </h5>
                <h5 className="openingHours__time">
                    9AM - 6PM
                </h5>
            </li>
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Wednesday:
                </h5>
                <h5 className="openingHours__time">
                    9AM - 6PM
                </h5>
            </li>
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Thursday:
                </h5>
                <h5 className="openingHours__time">
                    9AM - 6PM
                </h5>
            </li>
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Friday:
                </h5>
                <h5 className="openingHours__time">
                    9AM - 6PM
                </h5>
            </li>
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Saturday:
                </h5>
                <h5 className="openingHours__time">
                    10AM - 5PM
                </h5>
            </li>
            <li className="openingHours__listItem">
                <h5 className="openingHours__day">
                    Sunday:
                </h5>
                <h5 className="openingHours__time">
                    CLOSED
                </h5>
            </li>
        </ul>
    </div>
  )
}

export default OpeningHours