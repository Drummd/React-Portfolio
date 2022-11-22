import React from "react";
import CV from '../assets/cv.pdf'
//import ME from '../assets/sasuke2.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import '../index.css'
import './Header.css'

const styles = { 

    header: {
        height: '100vh',
        paddingTop: '7rem',
        overflow: 'hidden'
    },
    header_container: {
        textAlign: 'center',
        height: '100%',
        postion: 'relative'
    },
    cta: {
        marginTop: '2.5rem',
        display: 'flex',
        gap: '1.2rem',
        justifyContent: 'center',
    },
    header_socials: {
        display: 'flex',
        flexDirection: 'column',
        alightItems: 'center',
        gap: '0.8rem',
        position: 'absolute',
        left: 0,
        bottom: '3rem'
    },
    

};

//add css into this function
//style={styles.name}
const Header = () => {


    return (
        <header style={styles.header.header_container} className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Dalton Drumm</h1>
            <h5 className="text-light"> Fullstack Developer</h5>

            <div style={styles.cta} className="cta">
                <a href={CV} download className="btn">Download CV</a>
                <a href="#Contact" className="btn btn-primary">Let's Talk</a>

            </div>
            <div style={styles.header_socials} className="header_socials">
                <a href="https://www.linkedin.com/in/dalton-drumm-57aba91ba/" target="_blank"> <BsLinkedin /> </a>
                <a href="https://github.com" target="_blank"> <BsGithub /> </a>
            </div>
            <a href="#Contact" className="scroll__down">Scroll Down</a>
           
            {/* <div className="me">
             <img src={ME} alt="profile" />
            </div> */}
        </header>
    )
}

export default Header