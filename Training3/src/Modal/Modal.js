import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = props => {
    return ReactDOM.createPortal(
        props.show ?
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button">
                            Close
                        </button>
                    </div>
                </div>
            </div>
            : null,
        document.getElementById("root")
    );
};

export default Modal;
