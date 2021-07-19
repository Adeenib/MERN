import React from 'react'


function Tasks(props) {
    const {tasks} = props;
    const handleChecked = (e, id) => {
        props.changeCompleted(e.target.checked, id);
    }
    const deleteTask = (e, id) => {
        props.deleteTask(id);
    }
    
    return (
        <React.Fragment>
            <ul>
                {
                    tasks.map(
                        (task, index) => {
                             
                            return (
                                <li style={task.completed? { color: "blue", textDecoration: "line-through"} : {}} key={index}>
                                    {task.text}
                                    <input type="checkbox" checked={task.completed} onChange={(e) => handleChecked(e,task.id)} />
                                    <button onClick={(e) => deleteTask(e,task.id)}>Delete</button>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </React.Fragment>
    )
}

export default Tasks
