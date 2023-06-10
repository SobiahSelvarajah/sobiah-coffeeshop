import OurProductsButton from '../ourProductsButton/OurProductsButton'
import './OurProducts.scss'

const OurProducts = () => {
  return (
    <section className="ourProducts__container">
        <h2 className="ourProducts__heading">
            Our Products
        </h2>
        <OurProductsButton />
    </section>
  )
}

export default OurProducts