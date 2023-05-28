import Navlogo from '../navlogo/Navlogo';
import './Navbar.scss';

const Navbar = () => {

  return (
    <nav className="navbar__nav">
        <div className="navbar__container">
            <Navlogo />
        </div>
    </nav>
  )
}

export default Navbar