import React from 'react';
import StoreFront from '../../resources/images/store-front.jpg';

const Story = () => {
    return (
        <div className="row"
        style={{
            height: '95%'
        }}>
        	<div className="header--block" />
        	<div className="story">
        		<section className="story__header">
        			<div className="story__header-image"
                            style={{
                            background:`url(${StoreFront}) no-repeat`,
                            backgroundSize:'contain ',
                            backgroundPosition: 'center',
                            height: '400px'
                            }}></div>
                    <div className="story__header-text">
                    	<div className="about">
                    	<h1>About .Uniform</h1>
                    	</div>
                    	<div className="info">
                    	<p>Since opening its doors in 2015, .uniform store houses a selection of established brands and young talent, carefully curated to complement the significant .uniform style and aesthetic.</p>
                    		<h3>Founded</h3>
                    		<p>2015</p>
                    		<h3>Origin</h3>
                    		<p>Brooklyn</p>
                    		<h3>Brands</h3>
                    		<p>A.P.C. – Common Projects - Greats - Gucci - Aimé Leon Dore – Études - Harmony Paris - Norse Projects – Maison Margiela Fragrance – The North Face – and more</p>
                    	</div>
                    </div>
        		</section>
        	</div>
       </div>
    );
};


export default Story;
