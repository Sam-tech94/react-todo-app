import React, {useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "../styles/FormStyles.css"

// const LOCALE_STORAGE_KEY = "todoApp.todos";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(false);
    const [inputValue, setInputValue] = useState("");


    //Locale Storage

    useEffect(() => {
        if (localStorage.getItem("localTodo")) {
            const storedList = JSON.parse(localStorage.getItem("localTodo"));

            setTodos(storedList);
        }
    }, [])



    const handleEditChange = (id, text) => {
        setEditId(id);
        setInputValue(text);
    };

    const editTodo = (id, text) => {
        let editTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        setTodos(editTodos);
        setEditId(false)
    };

    const addTodo = (todo) => {
        const newTodo = [todo, ...todos];

        localStorage.setItem("localTodo", JSON.stringify([todo, ...todos]))

        setTodos(newTodo);

        console.log(newTodo)
    };

    const deleteItem = id => {
        let removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr)

        localStorage.setItem("localTodo", JSON.stringify(removeArr))
    };

    const completeTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos)
    };

    // Clear Completed
    const handleClear = () => {
        setTodos([])
        localStorage.removeItem("localTodo");
    };

  

    return (
        <div className="todo-form">
            <TodoForm onSubmit={addTodo} />
            {
                todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        deleteItem={deleteItem} 
                        completeTodo={completeTodo}  
                        editTodo={editTodo}
                        handleEditChange={handleEditChange}
                        editId={editId}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                ))
            }
            {
                !todos.length ? null : (
                    <button className="clear-completed" onClick={handleClear}>Clear Completed</button>
                )
            }
            
        </div>
    );

};

export default TodoList;