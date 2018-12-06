import React, { Component } from 'react';

import DrawerToggleButton from '../../utils/drawerToggleButton';

import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/userActions';

class Navigation extends Component {

	state = {
		navShow: false, 
        menuToggled: false,
        toggledClasses: 'nav__narrow-toggled--hide',
        navNarrowShow: true,
        navNarrowClasses: 'nav__narrow',
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
                name:'Login / Register',
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
            <div className="nav__link--logout"
                key={i}
                onClick={()=> this.logoutHandler()}
                style={{
                color: this.state.navShow ?  '#000' : '#fff' ,
                }}
            >
                {item.name}
            </div>

        :
			<li key={i}>
				<NavLink
				style={{
				color: this.state.navShow ?  '#000' : '#fff' ,
				}} 
				to={item.linkTo}
				>
					{item.name}
				</NavLink>
			</li>
    )

    cartLink = (item,i) => {
        const user = this.props.user.userData;

        return (
            <div className="nav__link--cart" key={i}>
                <li>
                        <NavLink
                        style={{
                        color: this.state.navShow ?  '#000' : '#fff' 
                        }} 
                        to={item.linkTo}
                        key={i}
                        >
                            {item.name}
                        </NavLink>
                </li>
                <p
                style={{
                        color: this.state.navShow ?  '#000' : '#fff' 
                }} >{user.cart ? user.cart.length:0}</p>
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
	    window.addEventListener('scroll', this.handleScroll, false);
	}

     componentWillUnmount() {
        // you need to unbind the same listener that was binded.
        window.removeEventListener('scroll', this.handleScroll, false);
    }

	

	handleScroll = () => {
		const nav = document.querySelector('.nav')
		if(window.scrollY > 0){
			this.setState({
				navShow: true
			})
			nav.classList.add('nav-scrolled')
		} else {
			this.setState({
				navShow: false
			})
			nav.classList.remove('nav-scrolled')
		}
	}
    
    render() {
        return (
            <header className="header">
                <nav className="nav"
                style={{
                backgroundColor: this.state.navShow ? '#fff' : 'transparent',
                }}>
                <div className="nav__wide">
                <h2 className="nav__wide-header">
                <NavLink
                style={{
                color: this.state.navShow ?  '#000' : '#fff' 
                }}
                to={'/'}>
                    .Uniform
                </NavLink></h2>
                <div className="nav__wide-div">
                    <div className="nav__wide-div-page">
                        {this.showLinks(this.state.page)}
                    </div>
                    <div className="nav__wide-div-user">
                        {this.showLinks(this.state.user)}
                    </div>
                </div>
                </div>
                <div className="nav__narrow" id="nav__narrow">
                <DrawerToggleButton        
                togglebck={this.state.navShow ? '#000' : '#fff' }
                click={this.props.drawerClickHandler}
                />
                <h2 className="nav__narrow-header">
                <NavLink
                style={{
                color: this.state.navShow ?  '#000' : '#fff' 
                }}
                to={'/'}>
                    .Uniform
                </NavLink>
                 </h2>
                </div>
                </nav>     
            </header>       
        );
    }
}


function mapStateToProps(state){
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(withRouter(Navigation));

