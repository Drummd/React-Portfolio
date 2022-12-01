import React from "react";
import '../index.css';
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'

// import { useState } from "react";

// const Nav = () => {
//     const [activeNav, setActiveNav] = useState('#')
    
//     return (
//         <nav>
//             <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
//             <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
//             <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook/> </a>
//             <a href="#services" onClick={() => setActiveNav('services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine/> </a>
//             <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail/> </a>
//         </nav>
//     )
// }
// href="Header"
            // onClick={() => handlePageChange('Header')}
            // // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            // className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'}
function Nav({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
          href="Header" onClick={() => handlePageChange('Header')} className={currentPage === 'Header' ? 'active' : ''}> <AiOutlineHome/>
            
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Experience"
            onClick={() => handlePageChange('Experience')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}
          >
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Services"
            onClick={() => handlePageChange('Services')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  
  
  

export default Nav