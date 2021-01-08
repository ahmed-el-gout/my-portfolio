import React from 'react';
import '../styles/about.css';
import Layer from '../assets/Layer.png';
import carre from '../assets/carre.png';
// pour telecharger le cv
import myPDF from '../ahmed-el-gout.pdf';

function About() {
    function handleScroll(e) {
        console.log('toto');
    }
    return (
        <div className="about" onScroll={handleScroll}>
            <div className="about-left">
                <div className="about-left-top">
                    <img src={carre} />
                    <h3>About Me</h3>
                    <div className="line"></div>
                </div>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition  et la mise en page avant impression. Le Lorem Ipsum est le faux texte  standard de l'imprimerie depuis les années 1500,</p> 
                <p>On sait depuis longtemps que travailler avec du texte  lisible et contenant du sens  est source de distractions, et empêche de se ...</p>
                <a href={myPDF} download="el_gout_cv.pdf"><button> Download CV </button></a>
            </div>
            <div className="about-right">
                <div className="container-img">
                    <img src={Layer} />
                </div>
                <img src={carre} />
            </div>
            
        </div>
    )
}


export default About   
