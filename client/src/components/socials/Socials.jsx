import SocialsFacebook from '../socialsFacebook/SocialsFacebook'
import SocialsInstagram from '../socialsInstagram/SocialsInstagram'
import SocialsTwitter from '../socialsTwitter/SocialsTwitter'
import './Socials.scss'

const Socials = () => {
  return (
    <div className="socials__container">
        <h2 className="socials__heading">
            Follow Us
        </h2>
        <div className="socials__icons">
            <SocialsFacebook />
            <SocialsInstagram />
            <SocialsTwitter />
        </div>
    </div>
  )
}

export default Socials