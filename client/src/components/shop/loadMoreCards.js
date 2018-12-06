import React from 'react';
import ShopCard from '../utils/shopCard'; 

const LoadMoreCards = (props) => {
    return (
        <React.Fragment>
            <React.Fragment>
                <ShopCard
                    grid={props.grid}
                    list={props.products}
                />
            </React.Fragment>
            {
                props.size > 0 && props.size >= props.limit ?
                    <div className="load_more_container">
                        <span onClick={()=> props.loadMore()}>
                            Load More
                        </span>
                    </div>
                :null
            }
        </React.Fragment>
    );
};

export default LoadMoreCards;