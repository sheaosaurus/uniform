import React from 'react';
import UserLayout from '../../hoc/user';
import ButtonComp from '../utils/buttonComp';

const UserDashboard = ({user}) => {
    return (
        <UserLayout>
                <div className="user__content-info">
                    <h1>User information</h1>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <ButtonComp
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>

                <div className="user__content-info">
                    <h1>History purchases</h1>
                    <div className="user__content-history">
                            history
                    </div>            
                </div>
        </UserLayout>
        
    );
};

export default UserDashboard;