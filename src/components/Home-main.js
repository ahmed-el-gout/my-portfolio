import React,{ useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

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
    const [homepage, { entry }] = useIntersectionObserver();
    
    const isVisible = entry && entry.isIntersecting;
    useEffect(() => {
        // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
        if(isVisible){ document.title = 'reactfolio-homepage'}
        
    },[isVisible])
    return (
        <div className="home-main" ref={homepage}>
                <div className="main-left">
                    <img src={ellipse} alt="alt" />
                    <p>Hello I am</p>
                    <h3>Ahmed <br></br> El-Gout</h3>
                    <p>A young web developer  (with crazy mobile & web disigne)</p>
                    <p>Find Me On</p>
                    <ul>
                        <li> <img src={insta} alt="alt" /></li>
                        <li> <img src={linkedIn} alt="alt" /></li>
                        <li> <img src={dribbble} alt="alt" /></li>
                        <li> <img src={pinterest} alt="alt" /></li>
                        <li> <img src={behance} alt="alt"/></li>
                    </ul>
                    <button className="first-button" type="text" >Hire Me</button>
                    <button className="second-button" type="text" >Portfolio</button>
                </div>
                <div className="main-center">
                    <img src={profil} alt="alt" />
                </div>
                <div className="main-right">
                    <ul>
                        <li><img src={un} alt="alt" /></li>
                        <li><img src={deux} alt="alt" /></li>
                        <li><img src={trois} alt="alt" /></li>
                        <li><img src={quatre} alt="alt" /></li>
                    </ul>
                    <img src={points} alt="alt" />
                </div>
            </div>
    )
}

export default HomeMain
