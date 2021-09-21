import './CloseButton.css';

function CloseButton(props) {
    return (
        <div className="btn-close" onClick={props.closeModal}>
            <p className="x">X</p>
        </div>
    )
}

export default CloseButton;