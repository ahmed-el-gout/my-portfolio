import React from 'react'
import '../styles/contact.css'
import line from '../assets/Line.png'
import down from '../assets/down.png'

// pour l'envoye des emails a ma boite d'email
import emailjs from 'emailjs-com'


function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_8xg6mfs', 'template_p2r93e4', e.target , 'user_bE7xEkh0jHLyohKT5hTX5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()

        //   window.location.reload(false);
      }
       
    return (
        <div className="contact">
            <img src={line} />
            <h1> thanks for give <br/> your feedback </h1>
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer</p>
                <div className="container">
                    <form className="container" onSubmit={sendEmail}>
                        <div className="first">
                            <input id="name"  type="text" placeholder="Name" />
                            <input   name="name" type="Email" placeholder="Email" />
                        </div>
                        <div className="second">
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Budget" />
                            <img src={down} />
                        </div>
                        <div className="last">
                            <input id="message" name="message" type="textarea" placeholder="Message" />
                        </div>
                        <button type="submit"  > send </button>
                        {/* <input type="submit" value="Send" /> */}
                    </form>  
                </div>
        </div>
    )
}

export default Contact
