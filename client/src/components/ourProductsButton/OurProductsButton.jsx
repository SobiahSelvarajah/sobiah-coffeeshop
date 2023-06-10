import { Link } from "react-router-dom"
import './OurProductsButton.scss'

const OurProductsButton = () => {
  return (
    <Link to='/menu' className="ourProductsButton__link">
        <button className="ourProductsButton__button">
            Explore Our Range
        </button>
    </Link>
  )
}

export default OurProductsButton