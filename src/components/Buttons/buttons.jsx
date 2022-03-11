import { Button } from "@mui/material";
import "./buttons.css";

export default function Buttons(props) {
  return (
    <div className="Buttons-Container">
      <Button variant="text" onClick={() => props.DeleteCompletedTodo()}>
        Удалить выполненные
      </Button>
      <Button variant="text">Показать важные</Button>
    </div>
  );
}
