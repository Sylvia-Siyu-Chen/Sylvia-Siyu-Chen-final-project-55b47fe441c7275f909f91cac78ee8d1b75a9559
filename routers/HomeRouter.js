import {express} from "express";
const {default : axios } = require("axios")
import { Mongoose } from "mongoose";
const router = express.Router()

const Backlog = mongoose.model('Backlog');
const Task = mongoose.model('Task')

router.post("/",(req,res,next)=>{
    const task_detail = req.body.new_task;
    let new_task = new Task(
        {
            name : task_detail,
            finished: false 
        }
    )
})