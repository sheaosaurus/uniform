import React from 'react';
import ButtonComp from '../utils/buttonComp';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const ProductInfo = (props) => {

    const showProdTags = (detail) => (
        <div className="product__tags">
            { detail.shipping ?
                <div className="product__tags-tag">
                    <div><FontAwesomeIcon icon={faTruck}/></div>
                    <div className="product__tags-text">
                        <div>Free shipping</div>
                        <div>And return</div>
                    </div>
                </div>
            :null
            }
            { detail.available ?
                <div className="product__tags-tag">
                    <div><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="product__tags-text">
                        <div>Available</div>
                        <div>in store</div>
                    </div>
                </div>
            :
                <div className="product__tags-tag">
                    <div><FontAwesomeIcon icon={faTimes}/></div>
                    <div className="product__tags-text">
                        <div>Not Available</div>
                        <div>Preorder only</div>
                    </div>
                </div>
            }
        </div>
    )

    const showProdActions = (detail) => (
        <div className="product__actions">
            <div className="product__actions-price">$ { detail.price }</div>
            <div className="product__actions-cart">
                <ButtonComp
                    type="add_to_cart_link"
                    runAction={()=>{
                       props.addToCart(detail._id)
                    }}
                />
            </div>
        </div>
    )

    const showProdSpecifications = (detail) => (
        <div className="product__specifications">
            <h2>Specs:</h2>
            <div>
                <div className="product__specifications-item">
                    <strong>Category:</strong> {detail.category.name}
                </div>
            </div>
        </div>
    )


    const detail = props.detail;
    return (
        <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>
                {detail.description}
            </p>
            { showProdTags(detail)}
            { showProdActions(detail)}
            { showProdSpecifications(detail)}
        </div>
    );
};

export default ProductInfo;