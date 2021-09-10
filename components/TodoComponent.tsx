import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../models/Todo";
import { deleteTodo, toggleTodo } from "../redux/actions/todoActions";

const TodoComponent: FunctionComponent<Todo> = (props: Todo) => {
  const dispatch = useDispatch();

  const handleTodoClick = () => {
    dispatch(toggleTodo(props.id || 0));
  };

  const handleTodoDelete = () => {
    dispatch(deleteTodo(props.id || 0));
  };

  return (
    <li>
      <p
        style={{
          cursor: "pointer",
          textDecoration: props.isCompleted ? "line-through" : "none",
        }}
        onClick={handleTodoClick}
      >
        {props.text}
      </p>
      <button type="button" onClick={handleTodoDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoComponent;
