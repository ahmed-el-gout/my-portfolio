import React from 'react';
import  '../styles/home.css';
import  '../styles//header.css';
import HomeMain from './Home-main';
import Header from './Header';



function Home() {
    return (
        <div className="home-page">
            <Header />
            <HomeMain />
        </div>
    )
}

export default Home
