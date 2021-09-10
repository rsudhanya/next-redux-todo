import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../models/Todo";
import { initializeTodoState } from "../redux/actions/todoActions";
import { RootState } from "../redux/reducers/RootReducerType";
import TodoComponent from "./TodoComponent";

const TodoListComponent: FunctionComponent = () => {
  const todosRedux: Todo[] = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const [isInitializeReduxState, setIsInitializeReduxState] =
    useState<boolean>(false);

  useEffect(() => {
    if (!isInitializeReduxState) {
      setIsInitializeReduxState(true);
      dispatch(initializeTodoState());
    }
  }, [dispatch, isInitializeReduxState]);

  console.log("Rendered");
  return (
    <div>
      <h3>Todos</h3>
      <div>
        <ul>
          {todosRedux.map((todo) => (
            <TodoComponent key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListComponent;
