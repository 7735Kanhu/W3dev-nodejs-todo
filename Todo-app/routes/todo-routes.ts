import { Router } from "express";
import { createTodo, getTodos, getTodo, deleteTodo } from "../controllers/todo-controller";

const router = Router();

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.get("/todos/:_id", getTodo);
router.delete("/todos/:_id", deleteTodo)

export default router;
