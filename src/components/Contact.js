import React from 'react'
import '../styles/contact.css'
import line from '../assets/Line.png'
import down from '../assets/down.png'



function Contact() {
    return (
        <div className="contact">
            <img src={line} />
            <h1>Let's Make Something <br/> Great Togther </h1>
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
            <div className="container">
                <div className="first">
                    <input type="text" placeholder="Name" />
                    <input type="Email" placeholder="Email" />
                </div>
                <div className="second">
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Budget" />
                    <img src={down} />
                </div>
                <div className="last">
                    <input type="textarea" placeholder="Message" />
                </div>
                <button>Hire me</button>
            </div>
        </div>
    )
}

export default Contact
