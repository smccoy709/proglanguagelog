import React, { useState } from 'react';

export const EditLanguagesForm = ({editLanguage, code}) => {
    const [value, setValue] = useState(code.code)
    const handleSubmit = e => {
        e.preventDefault();
        editLanguage(value, code.id);
        setValue("");
    }

    return (
        <form className='LanguagesForm' onSubmit={handleSubmit}>
            <input type="text" className='languages-input' value={value} placeholder='Update Programming Language'
            required onInvalid={e => e.target.setCustomValidity('Please enter the updated programming language!')}
            onInput={e => e.target.setCustomValidity('')} onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='languages-btn'>Update Language</button>
        </form>
    )
}