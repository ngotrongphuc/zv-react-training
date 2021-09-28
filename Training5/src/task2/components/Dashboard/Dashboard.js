import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Dashboard.css';
import avatar from '../../../logo.svg';
import { requestMyInfo } from '../../../redux/modules/task2/actions';

export default function Dashboard(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [menuDisplayed, setMenuDisplayed] = useState('none');
    const toggleMenu = () => setMenuDisplayed(menuDisplayed === 'none' ? 'block' : 'none')
    const loginReducer = useSelector(state => state.loginReducer);
    useEffect(() => {
        dispatch(
            requestMyInfo()
        )
    }, [])
    function logout() {
        localStorage.removeItem('token');
        history.push('/login')
    }
    return (
        <div className="dashboard">
            <div className="header">
                <h3 className="title">Zigvy</h3>
                <div className="dropdown">
                    <img className="avatar" src={avatar} alt="avatar" onClick={toggleMenu} />
                    <div className="dropdown-content" style={{ display: menuDisplayed }}>
                        <p>{loginReducer.myInfo.fullName}</p>
                        <p onClick={logout}>Log out</p>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="container">
                    <div className="navbar">
                        <Link className="link" style={{ fontWeight: props.home ? 'bold' : 'normal' }} to={{ pathname: '/app' }}>Home</Link>
                        <Link className="link" style={{ fontWeight: props.users ? 'bold' : 'normal' }} to={{ pathname: '/app/users' }}>Users</Link>
                        <Link className="link" style={{ fontWeight: props.myInfo ? 'bold' : 'normal' }} to={{ pathname: '/app/my-info' }}>My info</Link>
                    </div>
                    <div className="main">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="footer">
                Zigvy Corp
            </div>
        </div >
    )
}