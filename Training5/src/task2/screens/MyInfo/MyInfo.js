import { useEffect } from 'react';
import Dashboard from "../../components/Dashboard/Dashboard";
import Info from "../../components/Info/Info";
import { useSelector, useDispatch } from 'react-redux';
import { requestMyInfo } from '../../../redux/modules/task2/actions';

export default function MyInfo() {
    const dispatch = useDispatch();
    const loginReducer = useSelector(state => state.loginReducer);
    const myInfo = loginReducer.myInfo;
    useEffect(() => {
        dispatch(
            requestMyInfo()
        )
    }, []);
    return (
        <Dashboard myInfo>
            <div className="screen">
                <Info info={myInfo} />
            </div>
        </Dashboard>
    )
}