import TodoList from "./TodoList"
import AddTaskForm from "./AddTaskForm"
import { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    document.title = `Todo List (${todoList.length})`

    return (() => {
      console.log("destroyed")
    })
  }, [todoList])

  return (
    <div className="App">
      <h1 id="app-header">Todo List Application</h1>

      <AddTaskForm todoList={todoList} setTodoList={setTodoList} />

      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
