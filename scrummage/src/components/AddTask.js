import { text } from "body-parser";
import { useState } from "react"
import Button from "./Button"

const AddTask = (props) =>{

    const [name, setName] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!name){
            alert('please add a task')
            return
        }
        console.log(name, day);
        props.onAdd({name,day});
        setName('')
        setDay('')
    }

    return(
        <div className = 'addtask'>
        <form onSubmit={onSubmit}>
            <div><label>Task Name: </label>
            <input value={name} 
                onChange={(e)=>(setName(e.target.value))} 
                type = {Text} placeholder='write down your task name'/></div>

            <div><label>Due Day: </label>
            <input value={day} 
                onChange={e => setDay(e.target.value)}
                type = {Text} placeholder='write down your due day'/></div>
            <div><input type='submit' value='Save Task'/></div>
        </form>
        </div>
    )
}

export default AddTask