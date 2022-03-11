import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ChangeCircle } from "@mui/icons-material";

export default function TodoItem({
  todo,
  ChangeTodo,
  ChangeTodoImp,
  DeleteTodo,
}) {
  console.log("todo", todo);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li>
      <div id="left">
        <Checkbox
          onChange={() => ChangeTodo(todo.id)}
          checked={todo.completed}
        />
        <h5 className={classes.join(" ")}>{todo.title}</h5>
      </div>
      <div id="right">
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={todo.important}
          onChange={() => ChangeTodoImp(todo.id)}
        />
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => DeleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
}
