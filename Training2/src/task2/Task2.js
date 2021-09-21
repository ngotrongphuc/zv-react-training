import React from 'react';
import Modal from '../task1/Modal';
import CloseButton from './CloseButton';

function Task2() {
    const [isModalOpen, setIsModalOpen] = React.useState(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <Modal isModalOpen={isModalOpen}>
            Hello
            <CloseButton closeModal={closeModal} />
        </Modal>
    )
}

export default Task2;