import './App.css';
import Timer from './components/PomodoroTimer/Timer'
import TaskManager from './components/TaskManager/TaskComponent'

function App() {
  return (
    <div className="App">
      <Timer />
      <TaskManager />
    </div>
  );
}

export default App;
