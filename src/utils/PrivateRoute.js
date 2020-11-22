import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component, ...rests}) => {
    return (
        <Route
        {...rests}
        render={
            props=>{
                return(localStorage.getItem('token'))?
                <Component {...props} {...rests}/>:
                <Redirect to='/register' {...rests}/>
            }
        }
        />
    );
};

export default PrivateRoute;