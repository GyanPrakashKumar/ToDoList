import React, { useState } from 'react'

export default function TodoForm({todoTask}) {
    const [input, setInput] = useState('');
    const addTask = (e) => {
        e.preventDefault();
        todoTask(input)
        setInput('');
    }
    return (
        <form className='form' onSubmit={addTask}>
            <div>
                <label htmlFor='task'></label>
                <input
                    type='text'
                    name='task'
                    placeholder='New task'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <button type='submit'>
                Add
            </button>

        </form>
    )
}