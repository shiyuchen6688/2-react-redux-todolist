import * as React from 'react';
import Todo from './Todo';



export default function TodoList(props) {

    const { todoList, setTodoList } = props

    return (
        <>
            <h2>Todo List</h2>

            <ul>
                {
                    todoList.map(todo => {
                        return <Todo key={todo} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                    })
                }
            </ul>
        </>
    )
}