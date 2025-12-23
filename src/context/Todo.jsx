import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete project documentation",
      description: "Write comprehensive docs for the new feature",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Review pull requests",
      description: "Check and merge pending PRs",
      completed: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Update dependencies",
      description: "Upgrade React and related packages",
      completed: true,
      createdAt: new Date().toISOString(),
    },
  ]);

  // add new todo
  function insertTodo(newtodo) {
    setTodos([newtodo, ...todos]);
  }

  return (
    <TodoContext.Provider value={{ todos, insertTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

export const useTodo = () => {
  const tc = useContext(TodoContext);
  return tc;
};
