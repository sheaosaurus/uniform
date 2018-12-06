import React, { Component } from 'react';
import PageTop from '../utils/pageTop';

import { price } from '../utils/form/fixedCategories';

import { connect } from 'react-redux';
import { getBrands, getCategories,getProductsToShop } from '../../actions/productsActions';

import CollapseCheckbox from '../utils/collapseCheckbox';
import CollapseRadio from '../utils/collapseRadio';

import LoadMoreCards from './loadMoreCards';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTh from '@fortawesome/fontawesome-free-solid/faTh';


class Shop extends Component {

    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: {
            brand: [],
            categorie: [],
            price: []
        }
    }

    componentDidMount() {

        this.props.dispatch(getBrands());
        this.props.dispatch(getCategories());

        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ))
    }

    handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }

    handleFilters = (filters,category) => {
       const newFilters = {...this.state.filters}
       newFilters[category] = filters;

        if(category === "price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }
        
        this.showFilteredResults(newFilters)
        this.setState({
           filters: newFilters
       })
    }

    showFilteredResults = (filters) =>{
        this.props.dispatch(getProductsToShop(
            0,
            this.state.limit,
            filters
        )).then(()=>{
            this.setState({
                skip:0
            })
        })
    }

    loadMoreCards = () => {
        let skip = this.state.skip + this.state.limit;

        this.props.dispatch(getProductsToShop(
            skip,
            this.state.limit,
            this.state.filters,
            this.props.products.toShop
        )).then(()=>{
            this.setState({
                skip
            })
        })
    }

    handleGrid= () =>{
        this.setState({
            grid: !this.state.grid ? 'grid_bars':''
        })
    }

    render() {
        const products = this.props.products;
        return (
           <div className="row">
                <div className="header--block"></div>
                <PageTop
                    title="Permanent Collection"
                    description="Our permanent collection features the core of designers that we have established relationships with and that embody the core and quality of our brand."
                />
                    <div className="shop">
                        <div className="shop__left">
                            <CollapseCheckbox
                                initState={false}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters)=> this.handleFilters(filters,'brand')}
                            />
                            <CollapseCheckbox
                                initState={false}
                                title="Category"
                                list={products.categories}
                                handleFilters={(filters)=> this.handleFilters(filters,'wood')}
                            />
                             <CollapseRadio
                                initState={false}
                                title="Price"
                                list={price}
                                handleFilters={(filters)=> this.handleFilters(filters,'price')}
                            />
                           
                        </div>
                        <div className="shop__right">
                            <div className="shop_options">
                                <div className="shop_grids clear">
                                    <div
                                        className={`grid_btn ${this.state.grid?'':'active'}`}
                                        onClick={()=> this.handleGrid()}
                                    >
                                        <FontAwesomeIcon icon={faTh}/>
                                    </div>
                                    <div
                                        className={`grid_btn ${!this.state.grid?'':'active'}`}
                                        onClick={()=> this.handleGrid()}
                                    >
                                        <FontAwesomeIcon icon={faBars}/>
                                    </div>
                                </div>
                            </div>
                                <LoadMoreCards
                                    grid={this.state.grid}
                                    limit={this.state.limit}
                                    size={products.toShopSize}
                                    products={products.toShop}
                                    loadMore={()=> this.loadMoreCards()}
                                />
                        </div>
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

export default connect(mapStateToProps)(Shop);
