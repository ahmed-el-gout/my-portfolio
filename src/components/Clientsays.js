import React,{ useEffect } from 'react'
import { useIntersectionObserver } from 'react-intersection-observer-hook';

import '../styles/clientsyas.css'
import line from '../assets/Line.png'
import map from '../assets/map.png'
import kots from '../assets/kots.png'
import adam from '../assets/adam.png'
import wissal from '../assets/wissal.png'
import sara from '../assets/sara.png'


function Clientsays() {

    const [clientsays, { entry }] = useIntersectionObserver({threshold:.5});
    
    const isVisible = entry && entry.isIntersecting;
    useEffect((e) => {
        // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
        if(isVisible){ document.title = 'Clientsays'}
    },[isVisible])

    return (
        <div className="clientsyas" ref={clientsays} >
            <h1>What My Client Says </h1>
            <img src={line} />
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
            <div className="container">
                <div className="container-left">
                    <img src={map} />
                    <img className="sara" src={sara} />
                    <img className="sara2" src={sara} />
                    <img className="wissal" src={wissal} />
                    <img className="wissal2" src={wissal} />
                    <img className="adam" src={adam} />
                    <img className="adam2" src={adam} />
                </div>
                <div className="container-right">
                    <img className="image1" src={kots} />
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page titre provisoire pour calibrer une mise en page titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
                    <img className="image2" src={kots} />
                    <div className="small">
                        <h3>-Sara Smith</h3>
                        <p>lorem ipsum text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Clientsays

