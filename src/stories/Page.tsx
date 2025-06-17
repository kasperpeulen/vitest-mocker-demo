import React, { use, cache, useEffect } from "react";

import { Header } from "./Header";
import "./page.css";
import { getTodos } from "../utils/todos";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className="storybook-page">
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};
