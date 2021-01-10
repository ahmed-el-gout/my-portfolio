import React from 'react'
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



function Portfolio() {

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
         
        // if(e.target.classList[1] != 'all'){
        //     elements.forEach(element => {
        //         if(element.classList[1] != e.target.classList[1] ){
        //             element.style.display="none";
        //             // element.remove();
        //         }
        //         if(element.classList[1] === e.target.classList[1]){
        //             element.style.display="block";
        //         }
        //     }) 
        // }
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
            <ul id="myBtnContainer">
                <li className="btn all menu_active" onClick={handleClick}  >All</li>
                <li className="btn logo" onClick={handleClick}  >Logo</li>
                <li className="btn website" onClick={handleClick}  >Website</li>
                <li className="btn mobile-app" onClick={handleClick}  >Mobile-Apps</li>
            </ul>
                <div id="row1" className="row1">
                        <img className="filter logo" src={abad} />
                        <img className="filter logo" src={nalie} />
                        {/* <h6>test</h6>
                        <p>toto</p> */}
                        <img className="filter mobile-app" src={apri} />
                        <img className="filter logo" src={abad} />
                </div>
                <div id="row2" className="row2">
                        <img className="filter website" src={abad} />
                        <img className="filter logo active" src={nalie} />
                        {/* <h6>test</h6>
                        <p>toto</p> */}
                        <img className="filter logo" src={apri} />
                        <img className="filter mobile-app" src={abad} />
                </div>
        </div>
    )
}

export default Portfolio
