import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

export function PrivateRoute(props) {
    const loginReducer = useSelector(state => state.loginReducer);
    const token = loginReducer.token;

    const isTokenExpired = token => {
        try {
            return Date.now() >= (JSON.parse(atob(token.split('.')[1]))).exp * 1000;
        } catch (e) {
            console.log(e);
            return true;
        }
    }
    if (isTokenExpired(token)) {
        return <Redirect to={'/login'} />;
    }

    return <Route {...props} />;
}