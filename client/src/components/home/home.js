import React, { Component } from 'react';

import Hero from './hero/hero';
import Promotion from './promotion/promotion';
import Content from './content/content';


import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../../actions/productsActions';

class Home extends Component {

	componentDidMount() {
		this.props.dispatch(getProductsBySell());
		this.props.dispatch(getProductsByArrival());
		
	}
	
	render(){
		return (
	    	<div className="row">
	        	<Hero />
	        	<Promotion list={this.props.products.byArrival}/>
	      		<Content />
	    	</div>
    	);
	}

};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);