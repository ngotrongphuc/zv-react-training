import React from 'react';
import './Card.css';

function Card(props) {
    React.useEffect(() => {
        console.log(props);
    })
    return (
        <div className="card" style={{ flexDirection: props.descriptDirection, alignItems: props.descriptDirection == "row" ? "center" : null }}>
            <img src={props.src} style={{ width: props.width, height: props.height }} alt="" />
            <div className="description">
                <p className="title" style={{ fontSize: props.fontSize }}>{props.title}</p>
                <p className="content" style={{ fontSize: props.fontSize }}>{props.content}</p>
            </div>
        </div>
    );
}

export default Card;