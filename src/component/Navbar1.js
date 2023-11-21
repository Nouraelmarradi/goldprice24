import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';
import logo2 from "../images/ingot.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
          Goldprices77
            <img className='logo'  src={logo2} alt="something anholy" />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
              سعر الذهب
              <i class="fa fa" aria-hidden="true">  </i>

              </a>
            </li>
            <li className='nav-item'>
           
              <a  className='nav-links' href='/FormGoldCalculat' > 
                حاسبة أسعار الذهب <i class="fa " aria-hidden="true"></i>

              </a>
            </li>
            <li className='nav-item'>
           
              <a  className='nav-links' href='/Converter' >  <i class="fas fa-caret-circle-up    "></i>    
              محول العملات
              </a>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
