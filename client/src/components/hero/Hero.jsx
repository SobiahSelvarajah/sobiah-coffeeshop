import HeroText from '../heroText/HeroText'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero__container">
        <div className="hero__imgContainer"></div>
        <HeroText />
    </div>
  )
}

export default Hero