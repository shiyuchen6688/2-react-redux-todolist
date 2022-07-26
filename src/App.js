import TodoList from "./component/TodoList"
import AddTaskForm from "./component/AddTaskForm"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  let todoList = useSelector(state => state.todoList.list)

  useEffect(() => {
    document.title = `Todo List (${todoList.length})`
    return (() => {
      console.log("destroyed")
    })
  }, [todoList])

  return (
    <div className="App">
      <h1 id="app-header">Todo List Application</h1>

      <AddTaskForm />

      <TodoList />
    </div>
  );
}

export default App;
