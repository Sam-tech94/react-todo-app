import React from "react";
import "../styles/Items.css"

const TodoItem = ({
    todo,
    deleteItem,
    completeTodo,
    editTodo,
    handleEditChange,
    editId,
    inputValue,
    setInputValue
}) => {


    return (
        <div className="items">
            {
                editId === todo.id ? (
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="input"
                    />
                ) : (
                    <div
                        className={todo.isComplete ? "item-through" : "item"}
                        onDoubleClick={() => handleEditChange(todo.id, todo.text)}
                        onClick={() => completeTodo(todo.id)}
                    >{todo.text}</div>
                )
            }
            {
                editId === todo.id ? (
                    <button  className="editBtn" onClick={() => editTodo(todo.id, inputValue)}>Edit Todo</button>
                ) : (
                    <button className="btn" onClick={() => deleteItem(todo.id)}>X</button>
                )
            }
        </div>
    );
};

export default TodoItem;