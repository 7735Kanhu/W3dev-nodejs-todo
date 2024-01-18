import Todo from '../models/Todo'
import { Request, Response } from "express";


export const createTodo = async (req: Request, res: Response) => {
    const todo = new Todo(req.body);
    try {
      await todo.save();
    } catch (error) {
      return res.status(500).json({
        error,
      });
    }
    res.status(201).json({
      message: "Todo Created Successfully",
    });
  };

  export const getTodos = async(req: Request, res: Response) => {
    let todos: any;
    try {
        todos = await Todo.find()
    } catch (error) {
        console.log(error);
        
    }
    if(!todos){
        return res.status(404).json({
            message: "No todo here add todo first"
        })
    }
    return res.status(200).json({
        todos
    })
  };

  export const updateTodo = async(req: Request, res: Response) => {
    const id = req.params._id;
    const {_id,title} = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate(id, {_id, title})
        if(!todo){
            return res.status(404).json({
                message: "No todo here add todo first"
            })
        }
        return res.status(200).json({
            todo
        })
    } catch (error) {
        console.log(error);
        
    }
  };
  export const deleteTodo = async(req: Request, res: Response) => {
    const id = req.params._id;
    const {title} = req.body;
    try {
        const todo = await Todo.findByIdAndDelete(id, { title})
        if(!todo){
            return res.status(404).json({
                message: "No todo here add todo first"
            })
        }
        return res.status(200).json({
            message: "Deleted Successfully"
        })
    } catch (error) {
        console.log(error);
        
    }
  };