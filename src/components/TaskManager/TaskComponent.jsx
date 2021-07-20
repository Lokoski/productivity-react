import React, {useState, useEffect} from "react";
import Status from "./StatusComponent"

export default function TaskComponent() {

    const [task, setTask] = useState([]);




    useEffect(() => {},[])

    const addTask = () =>{

    }

    const deleteTask = () =>{

    }

    const moveTask = () =>{

    }

    const saveToLocalStorage = () =>{

    }

    const loadFromLocalStorage = () =>{

    }

  return <div className="task-container">
      <h1>Task Manager</h1>
      <Status 
          task={task}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='Backlog'
      />
       <Status 
          task={task}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='In Progress'
      />
       <Status 
          task={task}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='Completed'
      />
  </div>;
}
