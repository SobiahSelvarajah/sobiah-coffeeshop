import { Link } from 'react-router-dom'
import './HeroText.scss'

const HeroText = () => {
  return (
    <section className="heroText__container">
        <h1 className="heroText__heading">
            My Little Valentine
        </h1>
        <h3 className="heroText__motto">
            A taste of love with every sip.
        </h3>
        <Link to='/about' className='heroText__link'>
            <button className="heroText__aboutBtn">
                Discover Us
            </button>
        </Link>
    </section>
  )
}

export default HeroText