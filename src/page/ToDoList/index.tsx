import React, { useState } from 'react'
import "./index.scss"
import { ToDoForm } from './components/ToDoForm'
import { ToDo } from './components/ToDo'
import { EditToDoForm } from './components/EditToDoForm'

interface TodoForm {
    id: any,
    task: any,
    completed: boolean,
    isEditting: boolean
}
export const ToDoList = () => {
    const [todos, setTodos] = useState<TodoForm[]>([])

    const addTodo = (todo: any) => {
        setTodos([...todos, { id: todos.length + 1, task: todo, completed: false, isEditting: false }])
    }

    const toogleComplete = (id: any) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
    }

    const deleteTodo = (id: any) => {
        setTodos(todos.filter((item) => (item.id !== id)))
    }

    const editTodo = (id: any) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, isEditting: !item.isEditting } : item))
    }

    const editTask = (task: any, id: any) => {
        console.log(task, id);

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditting: !todo.isEditting } : todo
            )
        );
    };
    return (
        <div className='TodoWrapper'>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditting ? (
                    <EditToDoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <ToDo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toogleComplete={toogleComplete}
                    />
                )
            )}
        </div>
    )
}
