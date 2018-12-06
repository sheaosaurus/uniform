import React, { Component } from 'react';

import ProductInfo from './productInfo';
import ProductImage from './productImage';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/userActions';
import { getProductDetail, clearProductDetail } from '../../actions/productsActions';

class ProductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(()=>{
            if(!this.props.products.prodDetail){
                this.props.history.push('/');
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }


    addToCartHandler(id){
        this.props.dispatch(addToCart(id))
    }
    
    render() {
        return (
            <div>
                 <div className="header--block"></div>
                 <div className="row">
                {
                    this.props.products.prodDetail ?
                    <div className="product">
                        <div className="product__image">
                                <ProductImage
                                    detail={this.props.products.prodDetail}
                                />
                        </div>
                        <div className="product__content">
                            <ProductInfo
                                addToCart={(id)=> this.addToCartHandler(id)}
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>
                    : 'Loading'
                }

                </div>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductPage);


