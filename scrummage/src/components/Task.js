import { useState } from "react"
import {FaTimes} from "react-icons/fa"


const Task = ({key,task, onDelete, onToggle}) =>{
    return(
        <div className={`task ${task.finished ? 'finished' : ''}`} key= {key} onDoubleClick = {()=> onToggle(task.id)}>
            <h3>
                {task.name}
                <FaTimes style ={{color:'red', cursor: 'pointer'}} onClick = {()=> onDelete(task.id)}/>
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task