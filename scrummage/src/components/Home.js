
import { PromiseProvider } from "mongoose";
import Button from "./Button"
import Tasks from "./Task";
import Backlog from "./Backlog";
import {FaTimes} from 'react-icons'
import { useState } from "react";
import AddTask from "./AddTask";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";

const Home = (props) =>{

    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTask] = useState(props.tasks);

    // const showAdd = () =>{
        
    // }

    const add = ({name,day}) =>{
        const newTask = {
            "id" : tasks.length+1,
            "name" : name,
            "date" : day,
            "finished" : false
        }
        console.log(newTask);
        setTask([...tasks,newTask]);
    }


    const toggleFinished = (id) => {
        setTask(tasks.map((task)=>
            (task = task.id === id ? {...task, finished : !task.finished} : task)
        ))
    }

    const deleteTask = (id) => {
        // Alert('Are you sure you wanna delete this task?')
        setTask(props.tasks.filter((task)=>(
            task.id !== id
        )))
      }

    return(
        <header className='Home'>
        <Header/>
        <body>
        <div className = 'container'>
        <div className='backlog'>
        <h2>Here is your Backlog!</h2>
        </div>
        {props.tasks.length > 0 ? (        
        <Backlog tasks={tasks} onDelete = {deleteTask} onToggle = {toggleFinished}/>
        ) : ("You Don't Have Any Tasks For Now ")}
        </div>
        <Button text='Add' color = 'blue' onClick={()=>setShowAdd(!showAdd)}/>
        {showAdd && <AddTask onAdd={add}/>}
       {/* <Login/> */}
        </body>
        </header>

    )
}

export default Home 