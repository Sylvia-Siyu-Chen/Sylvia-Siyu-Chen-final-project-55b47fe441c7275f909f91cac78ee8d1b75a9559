import Task from './Task'
import Button from './Button'

const Backlog = (props) =>{
    return(
        <div>
            {props.tasks.map((each_task)=>(
                <Task key = {each_task.id} task = {each_task} onDelete = {props.onDelete} onToggle = {props.onToggle}/>
            ))}
        </div>
        
    )
}

export default Backlog