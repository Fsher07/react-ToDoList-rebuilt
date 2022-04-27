import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
//component file
import TodoContainer from "./components/ToDoContainer";
//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>
);
