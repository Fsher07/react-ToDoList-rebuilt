import React from "react";
import ToDoItem from "./ToDoItem";
class TodosList extends React.Component {
  render() {
    return (
        <ul>
          {this.props.todos.map(todo => (
           <ToDoItem 
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              delTodoProps={this.props.delTodoProps}
              setUpdate={this.props.setUpdate}
           />
          ))}
        </ul>
    );
  }
}

export default TodosList;
