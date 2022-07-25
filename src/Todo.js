import * as React from 'react';

export default function Todo(props) {
    const { todo, todoList, setTodoList } = props

    function handleDeleteTask() {
        setTodoList(todoList.filter(t => t !== todo))
    }

    return (
        <li>
            <div id="container">
                Task Description: {todo}
                <button className='delete-button' onClick={handleDeleteTask}>X</button>

            </div>
        </li>
    )

}