import { Router } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todo-controller";

const router = Router();

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.put("/todos/:_id", updateTodo);
router.delete("/todos/:_id", deleteTodo)

export default router;
