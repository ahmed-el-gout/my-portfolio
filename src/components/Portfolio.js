import React from 'react'
import '../styles/portfolio.css'
import line from '../assets/Line.png';
import maj from '../assets/maj.png';
import min from '../assets/min2.png';

import abad from '../assets/abad.png';
import apri from '../assets/apri.png';
import bane from '../assets/bane.png';
import nalie from '../assets/nalie.png';
import v1 from '../assets/v1.png';
import Rectangle from '../assets/Rectangle.png';



function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-top">
                <div className="portfolio-left">
                    <h2>Portfolio</h2>
                    <img src={line} />
                </div>
                <div className="portfolio-right">
                    <button className="btn1"><img src={min} /></button>
                    <button className="btn2"><img src={maj} /></button>
                </div>
            </div>
            <ul>
                <li className="active">All</li>
                <li>Logo</li>
                <li>Website</li>
                <li>Mobile Apps</li>
            </ul>
            <div className="row1">
                    <img src={abad} />
                    <img className="active" src={nalie} />
                    {/* <h6>test</h6>
                    <p>toto</p> */}
                    <img src={apri} />
                    <img src={abad} />
            </div>
            <div className="row2">
                    <img src={abad} />
                    <img className="active" src={nalie} />
                    {/* <h6>test</h6>
                    <p>toto</p> */}
                    <img src={apri} />
                    <img src={abad} />
            </div>
        </div>
    )
}

export default Portfolio
