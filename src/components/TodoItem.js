import React, { useState } from "react";
import "../styles/Items.css"
import TodoForm from "./TodoForm";

const TodoItem = ({todo, deleteItem, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

     

    return (
        <div className="items">
            <div className="item" onDoubleClick={() => setEdit({id: todo.id, value: todo.text})}>{todo.text}</div>
            <button className="btn" onClick={() => deleteItem(todo.id)}>X</button>
        </div>
    );
};

export default TodoItem;