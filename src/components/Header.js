import React from 'react';
import points from '../assets/points.png';
// import {seo} from '../helpers/seo';
// pour le smooth scroll
import { Link,animateScroll as scroll  } from 'react-scroll';
// import { useIntersectionObserver } from 'react-intersection-observer-hook';


// const { ref, inView, entry } = useInView(options);
function Header() {

    // const [ref, { entry }] = useIntersectionObserver();
    // const isVisible = entry && entry.isIntersecting;
    // console.log(useIntersectionObserver());
    // useEffect(() => {
    //     console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
    // },[isVisible])


    // useEffect(() => {  
    //     console.log('header');
    // });
    // useEffect(() => {
    //     seo({
    //         title: 'home page',
    //         metaDescription: 'With some meta description'
    //     });
    // }, [seo]);
    

    function handleClick1(e) { 
        document.querySelector('.active').classList.remove('active');
        // if(e.target.classList.contains('active')){
        //     e.target.classList.remove('active');
        // } else { 
            e.target.classList.add('active'); 
            // console.log(e.target.textContent);      // portfolio // contact // about  ...  
            //>>>> document.title = e.target.textContent; le nom de composant pour le title
            // }
    }
    function  scrollToTop(e) {
        scroll.scrollToTop();
        document.querySelector('.active').classList.toggle('active');
            e.target.classList.add('active');
            //>>> document.title = 'home'
    }
    
    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        if(this.scrollY > 670){
            // console.log(this.oldScroll > this.scrollY);
            if(this.oldScroll > this.scrollY){
                document.querySelector('.header').style.transform ="translateY(0px)";
            }else{
                document.querySelector('.header').style.transform ="translateY(-95px)";
            }
            this.oldScroll = this.scrollY;
        }
        // else{
        //     document.querySelector('.header').style.transform ="translateY(0px)";
        // }
    }

    return (
        <div className="header" >
                <h3 onClick={scrollToTop}>Ahmed-El-Gout</h3>
                <div className="header-menu">
                    <ul>
                    <Link activeClass="active" to="about"  smooth={true} duration={1000}><li   onClick={handleClick1} >About</li></Link>
                    <Link activeClass="active" to="portfolio"  smooth={true} duration={1000}><li onClick={handleClick1}  >Portfolio</li></Link>
                    <Link activeClass="active" to="contact"  smooth={true} duration={1000}><li onClick={handleClick1}  >Contact</li></Link>
                    </ul>
                    <button  type="text" >Get started</button>
                </div>
                <img src={points} />
        </div>
    )
}

export default Header
