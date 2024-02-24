import React, { useState } from 'react';

export const SubtaskForm = ({addSubtasks}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addSubtasks(value);
        setValue("");
    }

    return (
        <form className='SubtaskForm' onSubmit={handleSubmit}>
        <input type="text" className='subtask-input' value={value} placeholder='What subtasks do you want to learn?'
        id='subtasksTextbox' required onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className='languages-btn'>Add Subtask</button>
    </form>
    )
}