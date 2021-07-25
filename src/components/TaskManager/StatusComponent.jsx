import React from 'react';
import Task from './Tasks'

const StatusComponent = (props) => {
    const {tasks, status, addTask, deleteTask, addEmptyTask, moveTask } = props;

    let taskList, tasksForStatus;

    function handleEmptyTask(){
        addEmptyTask(status)
    }

    if(tasks) {
        tasksForStatus = tasks.filter((task) => task.status === status)
    }

    if(tasksForStatus) {
        taskList = tasksForStatus.map((task) =>{
            return(
                <Task
                    addTask={(task)=> addTask(task)}
                    deleteTask={(id)=> deleteTask(id)}
                    moveTask={(id, status)=> moveTask(id, status)}
                    key={task.id}
                    task={task}
                 />
            )
        })
    }
    return (
        <div className="status">
            <h3>{status}</h3>
            {taskList}
            <button onClick={handleEmptyTask}className="button">+</button>
        </div>
    )
}

export default StatusComponent
