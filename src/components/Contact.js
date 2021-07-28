import React,{ useEffect } from 'react'
import { useIntersectionObserver } from 'react-intersection-observer-hook';

import '../styles/contact.css'
import line from '../assets/Line.png'
import down from '../assets/down.png'

// pour l'envoye des emails a ma boite d'email
import emailjs from 'emailjs-com'


function Contact() {

    const [contact, { entry }] = useIntersectionObserver({threshold:.5});
    
    const isVisible = entry && entry.isIntersecting;
    useEffect(() => {
        // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
        if(isVisible){ document.title = 'contact'}
    },[isVisible])

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_8xg6mfs', 'template_p2r93e4', e.target , 'user_bE7xEkh0jHLyohKT5hTX5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
       
    return (
        <div className="contact" ref={ contact }>
            <img src={line} alt="alt" />
            <h1> thanks for give <br/> your feedback </h1>
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
                <div className="container">
                    <form className="container" onSubmit={sendEmail}>
                        <div className="first">
                            <input id="name"  type="text" placeholder="Name" required />
                            <input   name="name" type="Email" placeholder="Email" required />
                        </div>
                        <div className="second">
                            <input type="text" placeholder="Phone" required />
                            <input type="text" placeholder="Budget" required />
                            <img src={down} alt="alt" />
                        </div>
                        <div className="last">
                            <input id="message" name="message" type="textarea" placeholder="Message" required />
                        </div>
                        <button type="submit"  > send </button>
                        {/* <input type="submit" value="Send" /> */}
                    </form>  
                </div>
        </div>
    )
}

export default Contact
