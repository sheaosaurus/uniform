import React, { Component } from 'react';
import ButtonComp from './buttonComp';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/userActions';

import Fade from 'react-reveal/Fade';

class Card extends Component {

    renderCardImage(images){
        if(images.length > 0){
            return images[0].url
        } else {
            return '/images/image_not_availble.png'
        }
    }


    render() {
        const props = this.props;
        return (
            <div className={`card__item-wrapper ${props.grid}`}>
                <Fade>
                    <div
                    className="card__item-image"
                    style={{
                        background:`url(${this.renderCardImage(props.images)}) no-repeat`
                    }} />
                </Fade>
                    <div className="card__item-container">
                        <div className="card__item-tags">
                            <div className="card__item-tags--brand">{props.brand.name}</div>
                            <div className="card__item-tags--name">{props.name}</div>
                            <div className="card__item-tags--price">${props.price}</div>
                        </div>
                    
                    { props.grid ?
                        <div className="description">
                            <p>
                                {props.shortDescription}
                            </p>    
                        </div>
                        :null
                    }
                    <div className="card__item--actions">
                        <div className="button_wrap">
                            <ButtonComp
                                type="default"
                                altClass="card_link"
                                title="View product"
                                linkTo={`/product/${props._id}`}
                                addStyles={{
                                    margin: '10px 0 0 0'
                                }}
                            />
                        </div>
                        <div className="button_wrap">
                            <ButtonComp
                                type="bag_link"
                                runAction={()=>{
                                    props.user.userData.isAuth ?
                                        this.props.dispatch(addToCart(props._id))
                                    :
                                        console.log('you need to log in')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Card);