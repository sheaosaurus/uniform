import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const links = [
    {
        name: 'My account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'User information',
        linkTo: '/user/user_profile'
    },
    {
        name: 'My Cart',
        linkTo: '/user/cart'
    },
]

const admin = [
    {
        name: 'Site info',
        linkTo: '/admin/site_info'
    },
    {
        name: 'Add products',
        linkTo: '/admin/add_product'
    },
    {
        name: 'Manage categories',
        linkTo: '/admin/manage_categories'
    }
]


const UserLayout = (props) => {

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <NavLink to={item.linkTo} key={i}>
                {item.name}
            </NavLink>
        ))
    )


    return (
        <div className="row">
        <div className="header--block"></div>
            <div className="user">
                <div className="user__nav">
                    <h2>My account</h2>
                    <div className="user__nav-links">
                        { generateLinks(links)}
                    </div>
                    { props.user.userData.isAdmin ?
                        <div>
                            <h2>Admin</h2>
                            <div className="user__nav-links">
                                { generateLinks(admin)}
                            </div>
                        </div>
                    :null
                    }

                </div>
                <div className="user__content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(UserLayout);