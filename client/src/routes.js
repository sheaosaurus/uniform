import React from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Layout from './hoc/layout';
import Auth from './hoc/auth';


import Home from './components/home/home';
import RegisterLogin from './components/register_login/registerLogin';
import Register from './components/register_login/register';
import Shop from './components/shop/shop';
import ProductPage from './components/product/product';
import Story from './components/story/story';

import UserDashboard from './components/user/userDashboard';
import AddProduct from './components/user/admin/addProduct';
import ManageCategories from './components/user/admin/manageCategories';
import PageNotFound from './components/utils/pageNotFound';



const Routes = ({location}) => {
    return (
            <TransitionGroup className="transition-group">
                <CSSTransition
                classNames={'fade'}
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}>
                    <section className="route-section">
                    <Layout  >
                        <Switch  location={location}>
                            <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)}/>
                             <Route path="/admin/add_product" exact component={Auth(AddProduct,true)}/>
                            <Route path="/admin/manage_categories" exact component={Auth(ManageCategories,true)}/>

                            <Route path="/register" exact component={Auth(Register,false)}/>
                            <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/>

                            <Route path="/register" exact component={Auth(Register,false)}/>       
                            <Route path="/user/login" exact component={Auth(RegisterLogin,false)}/>
                            
                            <Route path="/" exact component={Auth(Home,null)}/>     
                            <Route path="/ourstory" exact component={Auth(Story,null)}/>
                            <Route path="/shop" exact component={Auth(Shop,null)}/>
                            <Route path="/product/:id" exact component={Auth(ProductPage,null)}/>
                            <Route component={Auth(PageNotFound)}/>
                        </Switch>  
                    </Layout>            
                    </section>
                </CSSTransition>
            </TransitionGroup>
    );

}

export default withRouter(Routes);


 // <BrowserRouter>
 //                        <Route path="/" component={Footer}></Route>
 //                    </BrowserRouter>