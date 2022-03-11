import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./footerBar.css";
import { useState } from "react";

export default function FooterBar({ addTodo }) {
  const [value, setValue] = useState("");
  function addTodoHandler(event) {
    event.preventDefault();
    addTodo(value);
    setValue("")
  }

  return (
    <div className="footer-bar">
      <div className="footer-container">
        <h5>Добавить ToDo</h5>
        <form onSubmit={addTodoHandler}>
          <TextField
            id="outlined-helperText"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Добавить
          </Button>
        </form>
      </div>
    </div>
  );
}
