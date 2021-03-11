import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BannerImage from '../Images/banner.jpg';

const Header = () => {
    const headerStyle={
        backgroundImage: `url(${BannerImage})`,
        height:500,
    
    }
    return (
        <Jumbotron className="container img-fluid" style={headerStyle}>
            <h1 className="text-center text-light pt-5 mb-0">Sports Mania</h1>
        </Jumbotron>
    );
};

export default Header;