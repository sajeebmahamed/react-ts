import { useState } from "react";
import FormRef from "./components/FormRef";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todoData, setTodoData] = useState<Todo[]>([]);
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodoData((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };
  // const removeTodoHandler = (id : string) => {
  //   setTodoData((prevTodo) => {
  //     return prevTodo.filter(todo => todo.id !== id)
  //   })
  // }
  return (
    <TodosContextProvider>
      <FormRef/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
