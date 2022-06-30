import React, { useEffect, useRef, useState } from "react";
import "../styles/Form.css"

const TodoForm = ({onSubmit}) => {
    const [input, setInput] = useState("");
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    }, []);

 
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (input === "") {
            return;
        }
        if (e.code === "Enter") {
            onSubmit({
                id: String(Math.random()),
                text: input
            });

            setInput("");
        }
    };

    const handleClick = (e) => {
        if (input === "") {
            return;
        }

        onSubmit({
            id: String(Math.random()),
            text: input
        });
        setInput("");
    };

    return (
        <div className="form">
            <input 
                ref={ref}
                type="text"
                className="todo-input"
                name="todo"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
            />
            <span onClick={handleClick} className="plus">+</span>
        </div>
    );
};

export default TodoForm;