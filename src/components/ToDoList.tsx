import {useState} from "react";


interface item {
    id:number,
    text:string,
    done:boolean
}
export const ToDoList= ()=>{

    const[todos,setTodos] = useState<item[]>(
        [
            {id:1,text:"finish task",done:false},
            {id:3,text:"task d",done:false},
            {id:4,text:"df ddkl take",done:false},
        ]
    )

    const [input,setInput] = useState("")

    const addTodo = ()=>{
        const newToDo: item ={
            id:Date.now(),
            text: input,
            done:false
        }
        setTodos([...todos,newToDo])
        setInput("")
    }

    const removeTodo = (id:number) =>{
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos([...newTodos])
    }

    const doneTask = (id:number)=>{
        setTodos(
            todos.map((todo)=>{
            if(todo.id == id){
                return {...todo,done:!todo.done}
            }
            return todo
        }))

    }

    return(
        <div className="todo_container">
        <h1>To Do list</h1>
            <ul className="todo_list">
                {
                    todos.map((todo) => {
                        return(
                            <div key={todo.id}>
                                <li
                                    onClick={()=>doneTask(todo.id)}
                                    style={{textDecoration: todo.done?"line-through":"none"}}>
                                    {todo.text}</li>
                                <button onClick={()=>removeTodo(todo.id)}>x</button>
                            </div>
                        )
                    })
                }
            </ul>
            <input type="text"
                   placeholder="add todo"
                   value={input}
                   onChange={(e)=>setInput(e.target.value)}
                   className="todo_input" onc/>
            <button className="todo_add_btn" onClick={()=>addTodo()}>Add</button>

        </div>
    )
}