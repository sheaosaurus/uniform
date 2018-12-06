import React, {Component} from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/userActions';


class sideDrawer extends Component {

	state = {
        drawerShow: false,
		page:[
            {
                name:'Home',
                linkTo:'/',
                public: true
            },
            {
                name:'Shop',
                linkTo:'/shop',
                public: true
            },
            {
                name:'Our Story',
                linkTo:'/ourstory',
                public: true
            }
        ],
        user:[
            {
                name:'My Cart',
                linkTo:'/user/cart',
                public: false
            },
            {
                name:'My Account',
                linkTo:'/user/dashboard',
                public: false
            },
            {
                name:'Login/Register',
                linkTo:'/user/login',
                public: true
            },
            {
                name:'Log out',
                linkTo:'/user/logout',
                public: false
            },
        ] 
	}

	logoutHandler = () => {
        this.props.dispatch(logoutUser()).then(response =>{
            if(response.payload.success){
                this.props.history.push('/')
            } 
        })
    }

    defaultLink = (item,i) => (
        item.name === 'Log out' ?
            <div className="nav__sideDrawer-logout"
                key={i}
                onClick={()=> this.logoutHandler()}
            >
                {item.name}
            </div>

        :
			<li key={i}>
				<NavLink
				to={item.linkTo}
				>
					{item.name}
				</NavLink>
			</li>
    )

    cartLink = (item,i) => {
        const user = this.props.user.userData;

        return (
            <div className="nav__sideDrawer-cart" key={i}>
                <li>
                        <NavLink
                   
                        to={item.linkTo}
                        key={i}
                        >
                            {item.name}
                        </NavLink>
                </li>
                <span>{user.cart ? user.cart.length:0}</span>
            </div>
        )
    }


    showLinks = (type) =>{
        let list = [];
        if(this.props.user.userData){
            type.forEach((item)=>{
                if(!this.props.user.userData.isAuth){
                    if(item.public === true){
                        list.push(item)
                    }
                } else{
                    if(item.name !== 'Login/Register'){
                        list.push(item)
                    }
                }
            });
        }

        return list.map((item,i)=>{
            if(item.name !== 'My Cart'){
                return this.defaultLink(item,i)
            } else {
                return this.cartLink(item,i)
            }
            
        })
    }


    menuToggle = () => {

        if(this.state.menuToggled === false){
            this.setState({
                menuToggled: true, 
                toggledClasses:'nav__narrow-toggled',
                navNarrowShow: false,
                navNarrowClasses: 'nav__narrow--hide'
            })
        } else {
            this.setState({
                menuToggled: false, 
                toggledClasses:'nav__narrow-toggled--hide',
                navNarrowShow: true,
                navNarrowClasses: 'nav__narrow'
            })
        }
    }

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	}



	render(){
    	return (
    		<nav className={this.props.show ? 
                'nav__sideDrawer open' : 'nav__sideDrawer' }
            onClick={this.props.handleClick} 
            >
    			<div className="nav__sideDrawer-page">
                	{this.showLinks(this.state.page)}
                </div>
                <div className="nav__sideDrawer-user">
                   {this.showLinks(this.state.user)}
                </div>
    		</nav>
    	)
	}
}



function mapStateToProps(state){
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(withRouter(sideDrawer));

