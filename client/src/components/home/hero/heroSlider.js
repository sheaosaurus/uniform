import React from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';

const HeroSlider = () => {
 
	const settings = {
		accessibilty: true,
		autoplay: true,
		arrows:false,
		speed: 2500,
		infinite: true,
		dots: false,
		slidesToShow: 1,
      	slidesToScroll: 1,
      	swipeToSlide:true,
		fade: true
	}


    const slides = [
        {
            img:'/images/shoe-ftd-1.jpg',
            lineOne:'Spring 2019',
            lineTwo:'See the desginers',
            linkTitle:'Shop now',
            linkTo:'/designers'
        },
        {
            img:'/images/shoe-ftd-2.jpg',
            lineOne:'Permanent Collection',
            lineTwo:'Free Shipping over $200',
            linkTitle:'View offers',
            linkTo:'/shop'
        },
        {
            img:'/images/shoe-ftd-3.jpg',
            lineOne:'Common Projects Limited Offer',
            lineTwo:'Blush Pink Achilles Sneakers',
            linkTitle:'Desire',
            linkTo:'/shop'
        }

    ]

    const generateSlides = () => (
        slides ?
            slides.map((item,i)=>(
                <div key={i} className="">
                    <div className="hero__img"
                        style={{
                            background:`url(${item.img}) no-repeat`,
                            height: '100vh',
                            backgroundSize:'cover',
		        			backgroundPosition: 'center'
                        }}
                    />
                    <div className="hero__bottom-text">
                        <Fade bottom>
                            <span>{item.lineOne}</span>
                            <h1>{item.lineTwo}</h1>
                        </Fade>
                    </div>
                </div>
            ))
        :null
    )

        return (
            <div className="hero__slide">
            	<Slider {...settings}>
                	{ generateSlides()}
            	</Slider>
        	</div>
        );
}

export default HeroSlider;
