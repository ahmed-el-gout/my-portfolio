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
    useEffect(() => {
        // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
        if(isVisible){ document.title = 'Clientsays'}
    },[isVisible])

    return (
        <div className="clientsyas" ref={clientsays} >
            <h1>What My Client Says </h1>
            <img src={line} alt="alt" />
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
            <div className="container">
                <div className="container-left">
                    <img src={map} alt="alt " />
                    <img className="sara" src={sara} alt="alt" />
                    <img className="sara2" src={sara} alt="alt" />
                    <img className="wissal" src={wissal} alt="alt" />
                    <img className="wissal2" src={wissal} alt="alt"/>
                    <img className="adam" src={adam} alt="alt" />
                    <img className="adam2" src={adam} alt="alt" />
                </div>
                <div className="container-right">
                    <img className="image1" src={kots} alt="alt" />
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page titre provisoire pour calibrer une mise en page titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
                    <img className="image2" src={kots} alt="alt" />
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

