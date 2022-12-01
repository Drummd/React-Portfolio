import React from "react";
//import '../index.css';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {

    
    return (
        <footer>
            <a href="#" className="footer_logo">Dalton Drumm</a>

            {/* <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> */}
            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/dalton-drumm-57aba91ba/" target="_blank"> <BsLinkedin /> </a>
                <a href="https://github.com/Drummd" target="_blank"> <BsGithub /> </a>
                <a href="https://stackoverflow.com/users/19277759/dalton-drumm" target='_blank'> <BsStackOverflow/> </a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Dalton Drumm Portfolio</small>
            </div>
        </footer>
    )
}

export default Footer