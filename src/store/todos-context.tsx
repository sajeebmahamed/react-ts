import { createContext, useState } from "react";
import Todo from "../models/todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<todoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodoData((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodoData((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: todoContextObj = {
    items: todoData,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
