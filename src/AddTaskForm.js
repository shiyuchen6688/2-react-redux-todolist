import { useState } from 'react';

export default function AddTaskForm(props) {
    const { todoList, setTodoList } = props
    const [taskName, setTaskName] = useState("")

    function handleAddTask(e) {
        e.preventDefault()
        setTodoList([...todoList, taskName])
        console.log(todoList)
        setTaskName("")

    }
    return (
        <form>
            <h2>Add Todo Form</h2>

            <input type="text" id="taskname" value={taskName}
                onChange={e => { setTaskName(e.target.value) }}
                placeholder="Task Name"
            ></input>

            <span className="add-button" onClick={handleAddTask}>Add</span>
        </form>
    )
}