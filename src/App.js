import './App.css';
import Pomodoro from './components/PomodoroTimer/PomodoroTimer'
import TaskManager from './components/TaskManager/TaskComponent'

function App() {
  return (
    <div className="App">
      <Pomodoro />
      <TaskManager />
    </div>
  );
}

export default App;
