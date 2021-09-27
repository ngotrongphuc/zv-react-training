import React, { useState, useCallback } from 'react';
import './App.css';
import Modal from './Modal/Modal';

function App() {
  const [show, setShow] = useState(false);
  const [log, setLog] = useState([]);

  const openModal = () => {
    setShow(true);
    startListening();
  };

  const closeModal = () => setShow(false);

  const listener = useCallback((event) => {
    setLog(log => [...log, event.code]);
  }, []);

  function startListening() {
    document.addEventListener("keydown", listener);
  }

  return (
    <div className="App">
      <div className="main">
        <Modal title="My Modal" onClose={closeModal} show={show}>
          <textarea />
        </Modal>
        <button onClick={openModal}>Open Modal</button>
        <List data={log} />
      </div>
    </div>
  );
}

function List(props) {
  const data = props.data;
  const listItems = data.map((item, index) =>
    <li style={{ listStyleType: 'none' }} key={index}>{item}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default App;
