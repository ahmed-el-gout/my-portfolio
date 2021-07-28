import React,{useEffect} from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

import '../styles/capabilities.css'
import line from '../assets/Line.png'
import capab from '../assets/capab.png'
function Capabilities() {


    const [capabilities, { entry }] = useIntersectionObserver({threshold:.5});
    const isVisible = entry && entry.isIntersecting;
    useEffect(() => {
        // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
        if(isVisible){ document.title = 'capabilities'}
    },[isVisible])

    return (
        <div className="capabilities" ref={capabilities}>
            <h1>My Capabilities </h1>
            <img src={line} alt="alt" />
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
            <div className="row1">
                <div className="container1">
                    <img src={capab} alt="alt" />
                    <h4>web devlopper</h4>
                    <p>Get awesome disignservices from my </p>
                </div>
                <div  className="container2">
                    <img src={capab} alt="alt" />
                    <h4>web devlopper</h4>
                    <p>Get awesome disignservices from my </p>
                </div>
                <div  className="container3">
                    <img src={capab} alt="alt" />
                    <h4>web devlopper</h4>
                    <p>Get awesome disignservices from my </p>
                </div>
            </div>
            <div className="row2">
                <div className="container1">
                    <img src={capab} alt="alt" />
                    <h4>web devlopper</h4>
                    <p>Get awesome disignservices from my </p>
                </div>
                <div  className="container2">
                    <img src={capab} alt="alt" />
                    <h4>web devlopper</h4>
                    <p>Get awesome disignservices from my </p>
                </div>
                <div  className="container3">
                    <img src={capab} alt="alt" />
                    <h4>web devlopper</h4>
                    <p>Get awesome disignservices from my </p>
                </div>
            </div>
        </div>
    )
}

export default Capabilities
