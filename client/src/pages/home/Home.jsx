import Hero from '../../components/hero/Hero';
import OurProducts from '../../components/ourProducts/OurProducts';
import './Home.scss';

const Home = () => {
  return (
    <div className="home__container">
      <Hero />
      <OurProducts />
    </div>
  )
}

export default Home