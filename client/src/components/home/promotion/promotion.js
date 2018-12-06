import React from 'react';
import Slider from "react-slick";
import LoadingSpinner from './loadingSpinner'
import Fade from 'react-reveal/Fade';

const Promotion = (props) => {

	const settings = {
        className: "center",
        infinite: true,
        centerPadding: "1rem",
        slidesToShow: 1.5,
        swipeToSlide: true,  
        arrows: false 
        // centerMode: true
    }

    const slides = [
        {
            img:'/images/home-coll-1.jpg',
            header:'Permanent Collection',
            description:'Explore our featured designers'
        },
        {
            img:'/images/home-coll-2.jpg',
            header:'Chelsea Boots',
            description:'Winter Essentials for the cold days ahead'
        },
        {
            img:'/images/home-coll-3.jpg',
            header:'Limited Edition -',
            description: "Blush Pink, limited quanities availble"
        }
    ]




    const generateSlides = () => (
        slides ?
            slides.map((item,i)=>(
                <div className="promotion__box" key={i}>
                        <Fade>
                            <div className="promotion__image"
                            style={{
                            background:`url(${item.img}) no-repeat`,
                            backgroundSize:'cover ',
                            backgroundPosition: 'center',
                            // width: '100%'
                            }}></div>
                            <div className="promotion__text">
                            <h3>{item.header}</h3>
                            <p>{item.description}</p>
                            </div>
                        </Fade>
                    </div>
               
            ))
        :null
    )
    


    
    return slides  ? (

      <div className="promotion">
        <Slider {...settings}>
           {generateSlides()}
        </Slider>
      </div>  

    ) : <LoadingSpinner />;
};


export default Promotion;
