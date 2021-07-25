import React, {useState} from 'react';
import "../../App.css";

const Tasks = (props) => {
    const {addTask, deleteTask, moveTask, task} = props;

    const [urgencyLvl, setUrgencyLvl] = useState(task.urgency);

    const [collapsed, setCollapsed] = useState(task.isCollapsed);

    const [formAction, setFormAction] = useState('');

    const setUrgency = (e) => {
        setUrgencyLvl(e.target.attributes.urgency.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formAction === "save") {
            if(collapsed){
                setCollapsed(false);
            }else{
                let newTask = {
                    id: task.id,
                    title: e.target.elements.title.value,
                    description: e.target.elements.description.value,
                    urgency: urgencyLvl,
                    status: task.status,
                    isCollapsed: true
                }

                addTask(newTask);
                setCollapsed(true)
            }
        }

        if(formAction === "delete"){
            deleteTask(task.id)
        }
    }

    const moveLeft = () => {
        let newStatus = "";

        if(task.status === "In Progress"){
            newStatus = "Backlog"
        }else if(task.status === "Completed"){
            newStatus = "In Progress"
        }
        if(newStatus !== ""){
            moveTask(task.id, newStatus)
        }
    }

    const moveRight = () => {
        let newStatus = "";

        if(task.status === "Backlog"){
            newStatus = "In Progress"
        }else if(task.status === "In Progress"){
            newStatus = "Completed"
        }
        if(newStatus !== ""){
            moveTask(task.id, newStatus)
        }
    }
    return (
        <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
            <button className="button moveTask" onClick={moveLeft}>&#171;</button>
            <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
                <input 
                    type="text"
                    className="title input"
                    name="title"
                    placeHolder="Enter Title"
                    disabled={collapsed}
                    defaultValue={task.title}
                />
                <textarea
                    rows = "2"
                    className="description input"
                    name="description"
                    placeHolder="Enter Description"
                    defaultValue={task.description}
                 />
                 <div>
                     <label className={`low ${urgencyLvl === "low" ? "selected" : ""}`}>
                     <input
                        urgency="low"
                        onChange={setUrgency}
                        type="radio"
                        name="urgency"
                      />low
                      </label>
                    <label className={`medium ${urgencyLvl === "medium" ? "selected" : ""}`} >
                     <input
                        urgency="medium"
                        onChange={setUrgency}
                        type="radio"
                        name="urgency"
                    />medium
                    </label>
                    <label className={`high ${urgencyLvl === "high" ? "selected" : ""}`} >
                     <input
                        urgency="high"
                        onChange={setUrgency}
                        type="radio"
                        name="urgency"
                      />high
                      </label>
                 </div>
                 <button className="button" onClick={() => {
                     setFormAction("save")
                 }}>{collapsed ? "Edit" : "Save"}</button>
                 {collapsed && <button className="button delete"onClick={() => {
                     setFormAction("delete")
                 }}>X</button>}
            </form>
            <button className="button moveTask" onClick={moveRight}>&#187;</button>
        </div>
    )
}

export default Tasks
