import { useState, useEffect } from 'react';
import Dashboard from "../../components/Dashboard/Dashboard";
import Info from "../../components/Info/Info";
import { useSelector, useDispatch } from 'react-redux';
import { requestUsers } from '../../../redux/modules/task2/actions';
import { Link, useHistory } from 'react-router-dom';

export default function Users(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const loginReducer = useSelector(state => state.loginReducer);
    const users = loginReducer.users;
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        dispatch(
            requestUsers({
                onFailure: () => {
                    window.confirm('You have not permission to do it');
                    history.push('/app');
                }
            })
        )
    }, []);

    function toUserDetail(item) {
        setUserInfo(item);
    }

    return (
        <Dashboard users>
            <div style={{ display: 'flex' }}>
                <div className="screen" style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid' }}>
                    {Array.isArray(users) ?
                        users.map((item, index) =>
                            <p key={item.id}>
                                <Link onClick={() => toUserDetail(item)} className="link" style={{ fontWeight: props.myinfo ? 'bold' : 'normal' }} to={{ pathname: `/app/users/${item.id}` }}>{`${item.fullName}>`}</Link>
                            </p>
                        )
                        : null
                    }
                </div>
                <div className="screen">
                    <Info info={userInfo} />
                </div>
            </div>
        </Dashboard>
    )
}