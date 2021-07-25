import React, {useState} from 'react'

const Tasks = (props) => {
    const [addTask, deleteTask, moveTask, task] = props;

    const [urgencyLvl, setUrgencyLvl] = useState(task.urgency);

    const [collapsed, setCollapsed] = useState(task.isCollapsed);

    const [formAction, setFormAction] = useState('');

    const setUrgency = (event) => {
        setUrgencyLvl(event.target.attributes.urgency.value)
    }

    const handleSubmit = (event) => {

    }

    const moveLeft = () => {

    }

    const moveRight = () => {
        
    }
    return (
        <div>
            
        </div>
    )
}

export default Tasks
