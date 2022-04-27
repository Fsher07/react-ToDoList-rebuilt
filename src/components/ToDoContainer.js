import React, { useState, useEffect } from "react";
import TodosList from "./TodoList";
import Header from "./Header"
import InputToDo from "./InputToDo";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  const delTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleChange = (id) => {
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    );
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  };
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    setTodos(JSON.parse(temp));
  }, []);
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
    return (
      <>
        <Navbar />
      <div className="container">
      <div className="inner">
     <Routes>
     <Route path="/" element={<InputToDo addTodoProps={addTodoItem} />} />
     </Routes>
     <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<TodosList todos={todos} delTodo={delTodo} handleChange={handleChange} setUpdate={setUpdate} />} />
      </Routes>
      </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="*" element={<NotMatch />} />
      </Routes>
      </>
    );
}
export default TodoContainer;
