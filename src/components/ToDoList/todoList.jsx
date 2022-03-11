import TodoItem from "./components/todoItem";
import "./todoList.css";

export default function TodoList(props) {
  return (
    <div className="Todo-List">
      <h1>{props.title}</h1>
      <ul>
        {props.todos
          .map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                ChangeTodo={props.onToggle}
                ChangeTodoImp={props.ChangeTodoImp}
                DeleteTodo={props.DeleteTodo}
              />
            );
          })}
      </ul>
    </div>
  );
}
