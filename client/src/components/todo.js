import React from "react"
import { useState } from "react"
const Todo = () => {
    const [todos, setTodos] = useState(["love", "braga", "vishu", "manoj", "raja", "geeths", "miths", "kabins", "guru"])
    const [newTask, setNewtask] = useState("")
    function handlecreate() {

        if (newTask.trim() !== "") {
            setTodos(prev => [...prev, newTask]);
            setNewtask("");
            console.log(newTask)
            console.log(todos)
        }

    }
    function deletehandle(index) {
        const filtered = todos.filter((_, i) => i !== index)
        setTodos(filtered);
    }
    return (
        <>
        <h1 style={{textAlign:"center",fontFamily:"sans-serif",marginTop:"1rem"}}>TODO</h1>
            <div className="input-todo">
                <input type="text" value={newTask} placeholder="Enter todo..." onChange={(e) => setNewtask(e.target.value)}></input>
                <div className="todo-add-btn">
                    <button type="submit" onClick={handlecreate}>Add</button>
                </div>
            </div><br></br>
            <hr></hr>
            <h3 style={{ marginLeft:"25rem",marginTop:"1rem"}}>Works:</h3>
            <div className="list-cont">
                
                <ol>
                    {
                        Array.isArray(todos) && todos?.map((data, index) =>
                            <li key={index}>
                               
                                <span style={{ fontWeight: "600" }}>{index + 1}     {data}</span>
                                <button type="submit" onClick={() => deletehandle(index)}>Delete</button>

                            </li>
                        )

                    }

                </ol>
            </div>
        </>
    )
}

export default Todo;
