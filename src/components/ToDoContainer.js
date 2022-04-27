import React from "react";
import TodosList from "./TodoList";
import Header from "./Header"
import InputToDo from "./InputToDo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };
  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }))
  };
  render() {
    return (
      <div className="container">
        <div className="inner">
          <InputToDo addTodoProps={this.addTodoItem} />
          <Header />
          <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} delTodoProps={this.delTodo} />
        </div>
      </div>
    )
  }
}
export default TodoContainer;