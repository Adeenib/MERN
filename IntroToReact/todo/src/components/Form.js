
import React, {useState} from 'react';

function Form(props) {
    const [task, setTask] = useState("");

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(task);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">a new task</label>
                <input id="task" value={task} onChange={handleTask}/>
                <input type="submit" value="Add" />
            </form>            
        </React.Fragment>
    )
}

export default Form
