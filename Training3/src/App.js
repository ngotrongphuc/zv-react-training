import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [log, setLog] = useState([]);

  const openModal = () => {
    setIsModalOpen(true)
    startListening();
  };

  const listener = useCallback((event) => {
    setLog(log => [...log, event.code]);
  }, []);

  function startListening() {
    document.addEventListener("keydown", listener)
  }

  return (
    <div className="App">
      <div className="main">
        <Modal isModalOpen={isModalOpen}>
          <textarea />
        </Modal>
        <button onClick={openModal}>Open Modal</button>
        <List data={log} />
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    props.isModalOpen === false ? null :
      <div className="modal">
        {props.children}
      </div>
  )
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
