import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import { mongoose } from 'mongoose';


const sample_tasks = [
  // sample tasks 
  {   
      "id" : 1,
      "name" : "Learn how to use Scrummage",
      "date" : "Feb 6th",
      "finished" : false
  },
  { 
      "id" : 2,
      "name" : "sample task",
      "date" : "Feb 5th",
      "finished" : false
  },
  {
      "id" : 3,
      "name" : "another sample task",
      "date" : "Jan 6th",
      "finished" : false
  }
]

function App() {
  return (
    <div className="App">
      <Home tasks={sample_tasks}/>
    </div>
  );
}

export default App;
