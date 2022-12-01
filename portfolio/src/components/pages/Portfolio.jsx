import React from "react";
import '../../index.css';
import './Portfolio.css'
import P1 from '../../assets/FlickGenie.png'
import P2 from '../../assets/SageSeer.png'

// copy <article> => </article> for a new project install
//refer to css portfolio_container and adjust the grid template columns to add extra project 
const Portfolio = () => {

    
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={P1} alt=""/>
                    </div>    
                        <h3>Flick Genie (Movie Recommendation)</h3>
                        <div className="portfolio_item-cta">
                            <a href="https://github.com/Drummd?tab=repositories" className="btn">Github</a>
                            <a href="https://stang91.github.io/movie-recommendation-gen" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={P2} alt=""/>
                    </div>    
                        <h3>Sage The Seer (Mystical Fortune)</h3>
                        <div className="portfolio_item-cta">
                            <a href="https://github.com/Drummd?tab=repositories" className="btn">Github</a>
                            <a href="https://sage-the-seer.herokuapp.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio