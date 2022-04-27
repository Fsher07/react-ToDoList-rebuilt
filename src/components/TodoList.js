import React from "react";
import ToDoItem from "./ToDoItem";
const TodosList = props => {
    return (
        <ul>
          {props.todos.map(todo => (
           <ToDoItem 
              key={todo.id}
              todo={todo}
              handleChangeProps={props.handleChange}
              delTodoProps={props.delTodo}
              setUpdate={props.setUpdate}
           />
          ))}
        </ul>
    );
}

export default TodosList;
