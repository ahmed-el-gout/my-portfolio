import React from "react";
import points from "../assets/points.png";
import { Link, animateScroll as scroll } from "react-scroll";


function Header() {

  function handleClick1(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
  function scrollToTop(e) {
    scroll.scrollToTop();
    document.querySelector(".active").classList.toggle("active");
    e.target.classList.add("active");
  }

  window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    if (this.scrollY > 670) {
      // console.log(this.oldScroll > this.scrollY);
      if (this.oldScroll > this.scrollY) {
        document.querySelector(".header").style.transform = "translateY(0px)";
      } else {
        document.querySelector(".header").style.transform = "translateY(-95px)";
      }
      this.oldScroll = this.scrollY;
    }
  };

  return (
    <div className="header">
      <h3 onClick={scrollToTop}>Ahmed-El-Gout</h3>
      <div className="header-menu">
        <ul>
          <Link activeClass="active" to="about" smooth={true} duration={1000}>
            <li onClick={handleClick1}>About</li>
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            smooth={true}
            duration={1000}
          >
            <li onClick={handleClick1}>Portfolio</li>
          </Link>
          <Link activeClass="active" to="contact" smooth={true} duration={1000}>
            <li onClick={handleClick1}>Contact</li>
          </Link>
        </ul>
        <button type="text">Get started</button>
      </div>
      <img src={points} alt="alt" />
    </div>
  );
}

export default Header;
