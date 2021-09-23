import './App.css';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>Task1</h1>
        <Task1 />
      </div>
      <div className="box">
        <h1>Task2</h1>
        <Task2 />
      </div>
    </div>
  );
}

export default App;
