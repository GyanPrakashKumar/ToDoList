import React from 'react'

export default function TodoItem({ title, id }) {
    const taskComplete = () => {
        console.log(id)
    }
    const taskDelete = () => {
        
    }
    return (
        <>
            <div className='task'>
                <li>{title}</li>
                <div>
                    <button 
                        className='btnSubmit' 
                        onClick={taskComplete}
                    >
                        ✔️
                    </button>
                    
                    <button 
                        className='btnDelete'
                        onClick={taskDelete}
                    >
                        ❌
                    </button>
                </div>
            </div>
        </>
    )
}