import React, { Component } from 'react';

import Navigation from '../components/header_footer/header/navigation';
import SideDrawer from '../components/header_footer/header/sideDrawer';
import Footer from '../components/header_footer/footer/footer';
import Fade from 'react-reveal/Fade';


class Layout extends Component {

    state = {
        sideDrawerOpen: false,
        showFooter: false
    }

    //CLoses sidedrawer after .5sec when navLink pressed and next component renders
    handleClick = (e) => {
        if(e.target.tagName.toLowerCase() === 'a' ){
            setTimeout(
                function() {
                    this.setState({ sideDrawerOpen: false })
                }
                .bind(this)
            ,500);
        }
    }



    backDropClickHandler = () => {

        this.setState(state => ({
            sideDrawerOpen: !state.sideDrawerOpen
        }))
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };


    render(){
        let backdrop;

        if (this.state.sideDrawerOpen){
            backdrop = <div 
            className='backdrop'
            onClick={this.backDropClickHandler} />;
        }


        return (
            <div className="wrapper">
                <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer 
                show={this.state.sideDrawerOpen} 
                handleClick={this.handleClick.bind(this.state)} />
                { backdrop }
                <div className="page__container">
                    {this.props.children}
                </div> 
                 <Fade><Footer /></Fade>;
   
            </div>
        )
    }

}

export default Layout;

