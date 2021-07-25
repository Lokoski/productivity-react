import React, {useState, useEffect} from "react";
import Status from "./StatusComponent"

export default function TaskComponent() {

    const [tasks, setTasks] = useState([]);




    useEffect(() => {
        loadFromLocalStorage();
    },[])

    const addEmptyTask = (status) =>{
        const lastTask = tasks[tasks.length - 1];
        let newTaskId = 1;

        if(lastTask !== undefined){
            newTaskId = lastTask.id + 1
        }

        setTasks(tasks => [
            ...tasks, {
                id: newTaskId,
                title: "",
                description: "",
                urgency: "",
                status: status
            }
        ])
    }

    const addTask = (taskToAdd) =>{
        let filteredTasks = tasks.filter((task) =>{ 
            return task.id !== taskToAdd.id;
        })

        let newTaskList=[...filteredTasks, taskToAdd];

        setTasks(newTaskList);

        saveToLocalStorage(newTaskList);
    }

    const deleteTask = (taskId) =>{
        let filteredTasks= tasks.filter((task) => {
            return task.id !== taskId;
        })

        setTasks(filteredTasks)

        saveToLocalStorage(filteredTasks);
    }

    const moveTask = (id, newStatus) =>{
        let task = tasks.filter((task) => {
            return task.id === id;
        })

        let filteredTasks = tasks.filter((task) => {
            return task.id !== id;
        })

        task.status = newStatus;

        let newTaskList = [...filteredTasks, task];

        setTasks(newTaskList)

        saveToLocalStorage(newTaskList);
    }

    const saveToLocalStorage = (tasks) =>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    const loadFromLocalStorage = () =>{
        let loadedTasks = localStorage.getItem("tasks");

        let tasks = JSON.parse(loadedTasks);

        if(tasks){
            setTasks(tasks)
        }
    }

  return <div className="task-container">
      <h1>Task Manager</h1>
      <main>
          <section>
          <Status 
          tasks={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='Backlog'
      />
       <Status 
          tasks={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='In Progress'
      />
       <Status 
          tasks={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status='Completed'
      />
          </section>
      </main>
  </div>;
}
