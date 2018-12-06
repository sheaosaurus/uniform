import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const ContentCard = (props) => {
    return (
        <div className="card">
        <Fade>
        <Link
        to={props.link}>
        	<div className="card__photo"
			style={{
				background:`url(${props.image})`,
				width: '100%',
				height: '280px',
				backgroundSize:'cover',
	            backgroundPosition: 'center'
			}} />
        </Link>
        </Fade>
	    	<div className="card__text">
	  		  	<h3>{props.header}</h3>
	  		  	<span>{props.text}</span>
			</div>
		</div>
    );
};


export default ContentCard;
