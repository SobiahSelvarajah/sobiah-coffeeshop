import { Link } from 'react-router-dom';
import Logo from '../../assets/images/mlv-logo-files/original.png';
import './Navlogo.scss';

const Navlogo = () => {
  return (
    <Link to='/' className='navlogo__link'>
        <img src={Logo} alt="logo" className="navlogo__logo"/>
    </Link>
  )
}

export default Navlogo