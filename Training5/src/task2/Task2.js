import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/Common';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Users from './screens/Users/Users';
import MyInfo from './screens/MyInfo/MyInfo';
import './Task2.css';

function Task2() {
    return (
        <div className="Task2">
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/app" exact>
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/app/users">
                    <Users />
                </PrivateRoute>
                <PrivateRoute path="/app/my-info">
                    <MyInfo />
                </PrivateRoute>
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default Task2;
