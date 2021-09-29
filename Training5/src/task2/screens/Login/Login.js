import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { requestToken } from '../../../redux/modules/task2/actions';
import './Login.css';
import { useHistory, Redirect } from "react-router-dom";

export default function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState('john@doe.com');
    const [password, setPassword] = useState('zigvy123');
    const dispatch = useDispatch();

    function login() {
        dispatch(
            requestToken({
                body:
                {
                    email,
                    password
                },
                onSuccess: () => history.push('/app')
            })
        )
    }

    //redirect to home if logged in and token is valid
    const token = localStorage.getItem('token');
    const isTokenExpired = token => {
        try {
            return Date.now() >= (JSON.parse(atob(token.split('.')[1]))).exp * 1000;
        } catch (e) {
            console.log(e);
            return true;
        }
    }
    if (!isTokenExpired(token)) {
        return <Redirect to={'/app'} />;
    }

    return (
        <div className="container-login">
            <div className="form-login">
                <h1>LOGIN</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" value={email} onChange={e => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" value={password} onChange={e => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={login}>Login</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}