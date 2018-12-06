import React from 'react';

const PageTop = (props) => {
    return (
        <div className="category-intro__container">
            <div className="category-intro__content">
            	<div className="category-intro__title">
                    {props.title}
                </div>
                <div className="category-intro__description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PageTop;

