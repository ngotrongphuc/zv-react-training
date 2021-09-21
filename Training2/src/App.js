import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import Task3 from './task3/Task3';
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className="box">
        <h1>Task 1</h1>
        <Task1 />
      </div>
      <div className="box">
        <h1>Task 2</h1>
        <Task2 />
      </div>
      <div className="box">
        <h1>Task 3</h1>
        <Task3 />
      </div>
    </div>
  );
}

export default App;
