import { useState } from 'react';
import Navlogo from '../navlogo/Navlogo';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/links';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { HiXMark } from 'react-icons/hi2';
import './Navbar.scss';

const Navbar = () => {
    const  [ isNavOpen, setIsNavOpen ] = useState(false);

    return (
        <nav className="navbar__nav">
            <div className="container navbar__container">
                <Navlogo />
            </div>
            <ul className={`navbar__links ${isNavOpen ? "navbar__open" : "navbar__closed"}`}>
                {
                    links.map(({ name, path }, index) => {
                        return (
                            <li className="navbar__link" key={index}>
                                <NavLink className="navbar__navlink" to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="navbar__toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
                { isNavOpen ? <HiXMark/> : <HiBars3BottomRight/> }
            </button>
        </nav>
    );
};

export default Navbar