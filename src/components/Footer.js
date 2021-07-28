import React from 'react'
import '../styles/footer.css'
import line from '../assets/Line.png'

import insta from '../assets/insta.png';
import linkedIn from '../assets/linked in.png';
import dribbble from '../assets/dribbble.png';
import behance from '../assets/behance.png';
import pinterest from '../assets/pinterest.png';


function Footer() {
    return (
        <div className="footer">
            <img src={line} alt="alt" />
            <h1>Ahmed-EL-Gout</h1>
            <p>About <span>|</span>Portfolio<span>|</span> Contact</p>
            <p>Marrakech / +212 695036910 / ahmedelgout7@gmail.com</p>
            <ul>
                <li><img src={insta} alt="alt" /></li>
                <li><img src={linkedIn} alt="alt" /></li>
                <li><img src={dribbble} alt="alt"/></li>
                <li><img src={behance} alt="alt"/></li>
                <li><img src={pinterest} alt="alt" /></li>
            </ul>
            <div className="copyright">
                <p>copyright © 2020 el-gout | All right reserved</p>
            </div>
        </div>
    )
}

export default Footer
