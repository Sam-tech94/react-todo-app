import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "../styles/FormStyles.css"

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const newTodo = [todo, ...todos];

        setTodos(newTodo);

        console.log(newTodo)
    };

    const deleteItem = id => {
        let removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr)
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

  

    return (
        <div className="todo-form">
            <TodoForm onSubmit={addTodo} />
            {
                todos.map((todo, index) => <TodoItem key={index} todo={todo} deleteItem={deleteItem} completeTodo={completeTodo}  />)
            }
        </div>
    );

};

export default TodoList;