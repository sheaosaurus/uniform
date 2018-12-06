import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__text--wrapper">
                <h3 className="footer__logo">
                    <Link to="/">.Uniform</Link>
                </h3>
                <p className="footer_text"> 126 Grand Street :  212.664.7665</p>
            </div>
        </div>
    );
};

export default Footer;
