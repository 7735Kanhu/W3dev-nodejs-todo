import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';

interface TodoItem {
    id: number;
    title: string;
  }


const Home: React.FC = () => {
    const [todos,setTodos] = useState<string>('')
    const [todo,setTodo] = useState<TodoItem[]>([])
    const handleSubmit = async()=>{
        const resp = await axios.post('http://localhost:8080/todos', {title: todos});
        const data = await resp.data
            if(data){
                setTodos('')
            }
        

    }
    const fetchTodo = async()=>{
        const resp = await axios.get('http://localhost:8080/todos');
        const data = await resp.data
        // console.log(resp.data.todos);
        if(data && data.todos && data.todos.length){
            setTodo(data.todos)
        }
        
    }
    const handleDelete = (id: string)=>{
            axios.delete(`http://localhost:8080/todos/${id}`)
    }

    useEffect(()=>{
        fetchTodo()
        
    },[handleSubmit,handleDelete])
  return (
    <>
    <div className="add-todo">
        <h1>TODO LIST</h1>
        <div className="input-todo">
            <input type="text" placeholder="Write your todo todo here..." value={todos} onChange={(e)=>setTodos(e.target.value)}/>
            <button onClick={handleSubmit}>ADD TODO</button>
        </div>
        <div className="todo-list">
            <h2>List Of Todo</h2>
            <ul>
                {
                    todo && todo.length ? (
                        todo.map((item)=>{
                            return <li key={item.id}>
                            {item.title}
                            <div className="action">
                            <FaRegEdit />
                            <MdDeleteOutline onClick={()=>handleDelete(item._id)} />
                            </div>
                            </li>
                        })
                    ) : (<h3> No todo . Please add todo</h3>)
                }
            </ul>
        </div>
    </div>
    </>
  )
}

export default Home