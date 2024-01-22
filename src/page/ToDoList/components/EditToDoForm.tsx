import React, { useState } from 'react'

interface EditFormProps {
    editTodo: any
    task: any
}

export const EditToDoForm: React.FC<EditFormProps> = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Update Task' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
