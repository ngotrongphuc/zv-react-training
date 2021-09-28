import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { receiveToken } from '../../../redux/modules/task2/actions';

export function PrivateRoute(props) {
    const token = localStorage.getItem('token');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            receiveToken({ token })
        )
    }, []);

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