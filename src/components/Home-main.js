import React from 'react';
import '../styles/home-main.css';
import ellipse from '../assets/ellipse.png';
import profil from '../assets/profil.png';
import points from '../assets/points.png';

import insta from '../assets/insta.png';
import linkedIn from '../assets/linked in.png';
import dribbble from '../assets/dribbble.png';
import behance from '../assets/behance.png';
import pinterest from '../assets/pinterest.png';

import un  from '../assets/01.png';
import deux from '../assets/02.png';
import trois from '../assets/03.png';
import quatre from '../assets/04.png';

function HomeMain() {
    return (
        <div className="home-main">
                <div className="main-left">
                    <img src={ellipse} />
                    <p>Hello I am</p>
                    <h3>Ahmed <br></br> El-Gout</h3>
                    <p>A young UI/UX disigner with crazy mobile & web disigne</p>
                    <p>Find Me On</p>
                    <ul>
                        <li> <img src={insta} /></li>
                        <li> <img src={linkedIn} /></li>
                        <li> <img src={dribbble} /></li>
                        <li> <img src={pinterest} /></li>
                        <li> <img src={behance} /></li>
                    </ul>
                    <button className="first-button" type="text" >Hire Me</button>
                    <button className="second-button" type="text" >Portfolio</button>
                </div>
                <div className="main-center">
                    <img src={profil}  />
                </div>
                <div className="main-right">
                    <ul>
                        <li><img src={un} /></li>
                        <li><img src={deux} /></li>
                        <li><img src={trois} /></li>
                        <li><img src={quatre} /></li>
                    </ul>
                    <img src={points} />
                </div>
            </div>
    )
}

export default HomeMain
