import React from "react";
import '../../index.css';
import './Services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {

    
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Ensure that the end user experiences the desired outcome.</p>
                        </li>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Proper user interaction.</p>
                        </li>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Interactive experience throughout the site.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Server Managment</p>
                        </li>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Software Maintenance</p>
                        </li>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Technical Support</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Creative Ideas</p>
                        </li>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>An  understanding of SEO services</p>
                        </li>
                        <li className="service_list">
                            <BiCheck className="service_list-icon"/>
                            <p>Front/Back end synchronicity</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services