import React, { useState } from 'react';

export const EditSubtaskForm = ({editSubtask, code}) => {
    const [value, setValue] = useState(code.code)
    const handleSubmit = e => {
        e.preventDefault();
        editSubtask(value, code.id);
        setValue("");
    }

    return (
        <form className='LanguagesForm' onSubmit={handleSubmit}>
            <input type="text" className='languages-input' value={value} placeholder='Update Programming Language'
            onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='languages-btn'>Update Language</button>
        </form>
    )
}