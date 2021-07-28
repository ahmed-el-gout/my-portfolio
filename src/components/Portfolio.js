import React,{ useEffect } from 'react'
import '../styles/portfolio.css'
import line from '../assets/Line.png';
import maj from '../assets/maj.png';
import min from '../assets/min2.png';

import abad from '../assets/abad.png';
import apri from '../assets/apri.png';
// import bane from '../assets/bane.png';
import nalie from '../assets/nalie.png';
// import v1 from '../assets/v1.png';
// import Rectangle from '../assets/Rectangle.png';
import { useIntersectionObserver } from 'react-intersection-observer-hook';





function Portfolio() {

    const [portfolio, { entry }] = useIntersectionObserver({threshold:.5});
    
    const isVisible = entry && entry.isIntersecting;
    useEffect(() => {
        // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
        if(isVisible){ document.title = 'portfolio'}
        
    },[isVisible])


    function handleClick(e) { 
        document.querySelector('.menu_active').classList.remove('menu_active');
            e.target.classList.add('menu_active');
        var x, i;
        var x = document.getElementsByClassName("filter");
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(e.target.classList[1]) > -1) AddClass(x[i], "show");
        }    
    }
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
        document.getElementById('row1').style.justifyContent="space-around";
        document.getElementById('row2').style.justifyContent="space-around";
        }
    }
      
    // Hide elements that are not selected
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
    }
    return (
        <div className="portfolio" ref={portfolio}>
            <div className="portfolio-top">
                <div className="portfolio-left">
                    <h2>Portfolio</h2>
                    <img src={line} alt="alt"/>
                </div>
                <div className="portfolio-right">
                    <button className="btn1"><img src={min} alt="alt" /></button>
                    <button className="btn2"><img src={maj} alt="alt"/></button>
                </div>
            </div>
            <ul id="myBtnContainer">
                <li className="btn all menu_active" onClick={handleClick}  >All</li>
                <li className="btn logo" onClick={handleClick}  >Logo</li>
                <li className="btn website" onClick={handleClick}  >Website</li>
                <li className="btn mobile-app" onClick={handleClick}  >Mobile-Apps</li>
            </ul>
                <div id="row1" className="row1">
                        <img className="filter logo" src={abad} alt="alt" />
                        <img className="filter logo" src={nalie} alt="alt" />
                        {/* <h6>test</h6>
                        <p>toto</p> */}
                        <img className="filter mobile-app" src={apri} alt="alt" />
                        <img className="filter logo" src={abad} alt="alt" />
                </div>
                <div id="row2" className="row2">
                        <img className="filter website" src={abad} alt="alt" />
                        <img className="filter logo active" src={nalie} alt="alt" />
                        {/* <h6>test</h6>
                        <p>toto</p> */}
                        <img className="filter logo" src={apri} alt="alt" />
                        <img className="filter mobile-app" src={abad} alt="alt" />
                </div>
        </div>
    )
}

export default Portfolio
