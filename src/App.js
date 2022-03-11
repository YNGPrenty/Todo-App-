import { FamilyRestroom } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/buttons";
import FooterBar from "./components/FooterBar/footerBar";
import TodoList from "./components/ToDoList/todoList";
import TopBar from "./components/Topbar/topBar";

function App() {
  let [todosStart, setTodosStart] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
      important: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
      important: true,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
      important: true,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
      important: false,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
      important: false,
    },
  ]);

  let [todos, setTodos] = useState();

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function ChangeTodoImp(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function DeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  }

  function DeleteCompletedTodo() {
    setTodos(todos.filter((todo) => todo.completed !== true));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.completed !== true))
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
          important: false,
        },
      ])
    );
    localStorage.setItem(
      "todos",
      JSON.stringify(
        todos.concat([
          {
            title,
            id: Date.now(),
            completed: false,
            important: false,
          },
        ])
      )
    );
  }

  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(todosStart));
    todos = JSON.parse(localStorage.getItem("todos"));
    alert("Загружены стартовые ToDo!");
  }

  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return (
    <div>
      <TopBar />
      <Buttons DeleteCompletedTodo={DeleteCompletedTodo}/>
      {todos.length ? null : <h1 id="notodos">Нет задач!</h1>}
      {todos.filter((todo) => todo.important === true).length ? (
        <TodoList
          todos={todos.filter((todo) => todo.important === true)}
          onToggle={toggleTodo}
          ChangeTodoImp={ChangeTodoImp}
          DeleteTodo={DeleteTodo}
          title="Важные задачи"
        />
      ) : null}

      {todos.filter((todo) => todo.important === false).length ? (
        <TodoList
          todos={todos.filter((todo) => todo.important === false)}
          onToggle={toggleTodo}
          ChangeTodoImp={ChangeTodoImp}
          DeleteTodo={DeleteTodo}
          title="Все задачи"
        />
      ) : null}
      <FooterBar addTodo={addTodo} />
    </div>
  );
}

export default App;
