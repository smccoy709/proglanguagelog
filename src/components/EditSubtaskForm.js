import React, { useState } from 'react';

export const EditSubtaskForm = ({editSubtask, code}) => {
    const [value, setValue] = useState(code.code)
    const handleSubmit = e => {
        e.preventDefault();
        editSubtask(value, code.id);
        setValue("");
    }

    return (
        <form className='SubtaskForm' onSubmit={handleSubmit}>
            <input type="text" id='subtasksTextbox' className='subtask-input' value={value} placeholder='Update Subtask'
            required onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='languages-btn'>Update Subtask</button>
        </form>
    )
}