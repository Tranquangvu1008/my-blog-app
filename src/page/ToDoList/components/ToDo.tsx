import React from 'react'

interface TodoProps {
    task: any,
    toogleComplete: any
    deleteTodo: any
    editTodo: any
}

export const ToDo: React.FC<TodoProps> = ({ task, toogleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toogleComplete(task.id)}>{task.task}</p>
            <div>
                <button onClick={() => editTodo(task.id)}>Edit</button>
                <button onClick={() => deleteTodo(task.id)}>Remove</button>
            </div>
        </div>
    )
}
