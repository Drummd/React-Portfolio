import React from "react";
import '../../index.css';
import ME from '../../assets/IMG_5338.jpg'
import './About.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {


    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small> 1+ Years Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small> In progress</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small> 20+ completed </small>
                        </article>
                    </div>
                    <p>
                        My interest within the tech world has grown within the past few years
                        and I have been making steps towards this goal since then. Becoming
                        a developer takes time, energy and determination. I hold these traits
                        with a positive mindset and the will to always learn more.
                    </p>
                    <a href="#contact" className="btn btn-primary"> Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About





