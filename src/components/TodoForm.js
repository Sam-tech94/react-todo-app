import React, { useState } from "react";
import "../styles/Form.css"

const TodoForm = ({onSubmit}) => {
    const [input, setInput] = useState("");

 
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.code === "Enter") {
            onSubmit({
                id: String(Math.random()),
                text: input
            });

            setInput("");
        }
    };

    return (
        <div className="form">
            <input 
                type="text"
                className="todo-input"
                name="todo"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
            />
            <span className="plus">+</span>
        </div>
    );
};

export default TodoForm;