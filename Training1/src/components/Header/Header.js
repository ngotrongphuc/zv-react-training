import banner from '../../assets/banner.jpg';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={banner} className="banner" alt="banner" />
            <div className="topbar">
                <img src={logo} className="logo" alt="logo" />
                <div className="centerMenu">
                    <p>Nơi ở</p>
                    <p>Trải nghiệm</p>
                    <p>Trải nghiệm trực tuyến</p>
                </div>
                <div className="rightMenu">
                    <p>Trở thành chủ nhà</p>
                    <FontAwesomeIcon icon={faGlobe} />
                    <div className="boxAvatar">
                        <FontAwesomeIcon icon={faBars} className="iconMenu" />
                        <img src={avatar} className="avatar" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="searchBox">
                <ul>
                    <li>Địa điểm</li>
                    <li>Bạn sắp đi đâu</li>
                </ul>
                <ul>
                    <li>Nhận phòng</li>
                    <li>Thêm ngày</li>
                </ul>
                <ul>
                    <li>Trả phòng</li>
                    <li>Thêm ngày</li>
                </ul>
                <ul>
                    <li>Khách</li>
                    <li>Thêm khách</li>
                </ul>
                <FontAwesomeIcon icon={faSearch} size="lg" className="iconSearch" />
            </div>
            <div className="headerContent">
                <p style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Bạn chưa biết đi đâu? Tuyệt!</p>
                <div style={{ backgroundColor: 'white', borderRadius: 100, paddingLeft: 50, paddingRight: 50 }}>
                    <p style={{ color: '#7b13a2', fontSize: 20, fontWeight: '700' }}>Tìm kiếm linh hoạt</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
