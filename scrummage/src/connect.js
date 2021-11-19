
// const path = require("path")

// const multer = require("multer") 
// const axios = require("axios") 
// require("dotenv").config({ silent: true }) 
// const morgan = require("morgan") 

// app.use(morgan("dev")) 

// require('./routers/HomeRouter')(app);

// use express's builtin body-parser middleware to parse any data included in a request
// app.use(express.json()) 
// app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// const homePageRouter = require("./routers/HomeRouter")


// const bcrypt = require('bcryptjs');
// const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');


require('./db');
// const {use} = require("express/lib/router");

const express = require('express');
const app = express();
// require('./db.js')
const {use} = require("express/lib/router");


// import db from './db.js';
// import {model, mongo} from 'mongoose';
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'add session secret here',
	resave: false,
	saveUninitialized: true,
}));



const User = mongoose.model('User');
const Task = mongoose.model('Task');

let default_task = new Task(
	{
		name : "learn how to use Scrummage",
		finished: false
	}
).save();


app.get('/backlog', (req,res)=>{
	const tasks_list = [default_task];
	Task.find({},(err,data)=>{
		if(err) throw err;
		data.map(obj => tasks_list.push(obj));
		res.json(tasks_list);
	})
})

// app.get('/', (req, res) => {
// 	res.render('home', {user: req.session.user, tasks: tasks});
// });

app.post('/backlog', (req,res)=>{
	const obj = {
		name : req.body.task,
		finished : false
	}
	new Task(obj).save(
		function(err,data){
			if (err) throw err;
		}
	)
	res.redirect('/backlog');
})

app.get('/',(req,res)=>{
	res.render('home')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);

