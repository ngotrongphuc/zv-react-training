import Dashboard from "../../components/Dashboard/Dashboard";
import Info from "../../components/Info/Info";
import { useSelector } from 'react-redux';

export default function MyInfo() {
    const loginReducer = useSelector(state => state.loginReducer);
    const myInfo = loginReducer.myInfo;

    return (
        <Dashboard myInfo>
            <div className="screen">
                <Info info={myInfo} />
            </div>
        </Dashboard>
    )
}