import type { NextPage } from "next";
import { Fragment } from "react";
import TodoFormComponent from "../components/TodoFormComponent";
import TodoListComponent from "../components/TodoListComponent";

const Home: NextPage = () => {
  return (
    <Fragment>
      <section>
        <TodoFormComponent />
      </section>
      <section>
        <TodoListComponent />
      </section>
    </Fragment>
  );
};

export default Home;
