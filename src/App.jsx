import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
    {
        id: 1,
        task: "Code, Eat, Sleep, Repeat"
    },
    {
        id: 2,
        task: "Code, Eat, Sleep, Repeat"
    },
    {
        id: 3,
        task: "Code, Eat, Sleep, Repeat"
    },
    {
        id: 4,
        task: "Code, Eat, Sleep, Repeat"
    }
]

export default function App({}) {
    const [todo, setTodo] = useState([]);

    const addTodo = (task) => {
        setTodo([...todo, {id: Date.now(), task: task}])
    }
    
    return (
        <main>
            <TodoForm todoTask={addTodo} />
            <TodoList taskList={todo} />
        </main>
    )
}
