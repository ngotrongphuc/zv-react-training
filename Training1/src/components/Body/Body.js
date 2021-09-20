import React from 'react';
import Card from '../Card/Card';
import './Body.css';

function Body() {
    return (
        <div className="body">
            <h1>Khám phá những điểm đến gần đây</h1>
            <div className="flexBox1">
                <div>
                    <Card src={require("../../assets/small1.jpg").default} descriptDirection="row" title="Thành phố Kansas" content="4,5 giờ lái xe" />
                    <Card src={require("../../assets/small2.jpg").default} descriptDirection="row" title="Thành phố Oklahoma" content="4 giờ lái xe" />
                    <Card src={require("../../assets/small3.jpg").default} descriptDirection="row" title="Branson" content="7 giờ lái xe" />
                    <Card src={require("../../assets/small4.jpg").default} descriptDirection="row" title="Omaha" content="6,5 giờ lái xe" />
                </div>
                <div>
                    <Card src={require("../../assets/small5.jpg").default} descriptDirection="row" title="Tulsa" content="4,5 giờ lái xe" />
                    <Card src={require("../../assets/small6.jpg").default} descriptDirection="row" title="Amarillo" content="8 giờ lái xe" />
                    <Card src={require("../../assets/small7.jpg").default} descriptDirection="row" title="Thành phố Kansas" content="4,5 giờ lái xe" />
                    <Card src={require("../../assets/small8.jpg").default} descriptDirection="row" title="Fayetteville" content="6,5 giờ lái xe" />
                </div>
            </div>
            <h1>Ở bất cứ đâu</h1>
            <div className="flexBox2">
                <div>
                    <Card src={require("../../assets/medium1.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Nơi nghỉ dưỡng ngoài trời" />
                    <Card src={require("../../assets/medium2.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Chỗ ở độc đáo" />
                    <Card src={require("../../assets/medium3.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Toàn bộ nhà" />
                    <Card src={require("../../assets/medium4.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Cho phép mang theo thú cưng" />
                </div>
                <div>
                    <Card src={require("../../assets/large.jpg").default} width={'100%'} height={'100%'} descriptDirection="column" />
                    <div className="descriptBox">
                        <p className="title">Thử đón tiếp khách</p>
                        <p className="content">Kiếm thêm thu nhập và khám phá các cơ hội mới bằng cách chia sẻ nơi ở của bạn.</p>
                        <p className="more">Tìm hiểu thêm</p>
                    </div>
                </div>
            </div>
            <h1>Khám phá những điều nên trải nghiệm</h1>
            <div className="flexBox3">
                <Card src={require("../../assets/medium5.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Trải nghiệm" content="Tìm các hoạt động khó quên gần bạn." />
                <Card src={require("../../assets/medium6.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Trải nghiệm trực tuyến" content="Các hoạt động tương tác, truyền trực tiếp dưới sự dẫn dắt của Người tổ chức." />
                <Card src={require("../../assets/medium7.jpg").default} width={'95%'} height={'95%'} descriptDirection="column" title="Bộ sưu tập nổi bật: Phiêu du" content="Du lịch tại nhà với Trải nghiệm trực tuyến." />
            </div>
        </div>
    );
}

export default Body;
