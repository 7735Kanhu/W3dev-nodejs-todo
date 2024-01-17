import express, { Request, Response } from "express";
import "../db/index";
import todoRouter from '../routes/todo-routes'
import cors from "cors"

const app = express();
app.use(cors())

app.use(express.json());
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Rest Api Using node",
  });
});

app.use(todoRouter)

app.listen(PORT, () => {
  console.log("Server is listening in 8080");
});

export default app;
