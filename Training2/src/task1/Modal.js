import './Modal.css';

function Modal(props) {
    function closeModal(){
        alert('closeModal')
    }
    return (
        props.isModalOpen === false ? null :
            <div className="modal">
                {props.children}
            </div>
    )
}

export default Modal;