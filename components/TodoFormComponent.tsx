import { FormEvent, FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/actions/todoActions";

const TodoFormComponent: FunctionComponent = () => {
  const [todoText, setTodoText] = useState<string>("");

  const dispatch = useDispatch();

  const handleTodoTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value.trim());
  };

  const handleTodoFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (todoText === "") {
      alert("Please enter a todo");
      return;
    }
    dispatch(createTodo({ text: todoText }));
    setTodoText("");
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={handleTodoFormSubmit}>
        <label>Write a todo</label>
        <input type="text" value={todoText} onChange={handleTodoTextInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoFormComponent;
