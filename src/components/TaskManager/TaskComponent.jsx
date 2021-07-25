import React, {useState, useEffect} from "react";
import Status from "./StatusComponent"

export default function TaskComponent() {

    const [tasks, setTasks] = useState([]);




    useEffect(() => {},[])

    const addTask = (taskToAdd) =>{

    }

    const deleteTask = (taskId) =>{

    }

    const moveTask = (taskId) =>{

    }

    const saveToLocalStorage = () =>{

    }

    const loadFromLocalStorage = () =>{

    }

  return <div className="task-container">
      <h1>Task Manager</h1>
      <Status 
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='Backlog'
      />
       <Status 
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='In Progress'
      />
       <Status 
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='Completed'
      />
  </div>;
}
