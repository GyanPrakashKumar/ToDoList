import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    const { taskList } = props;
    return (
        <div className="taskList">
            <ol>
                {
                    taskList.map((task) => <TodoItem key={task.id} id={task.id} title={task.task} />)
                }
            </ol>
            
        </div>
    )
}