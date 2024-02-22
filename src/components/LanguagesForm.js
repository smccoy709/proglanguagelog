import React, { useState } from 'react';

export const LanguagesForm = ({addLanguage}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addLanguage(value);
        setValue("");
    }

    return (
        <form className='LanguagesForm' onSubmit={handleSubmit}>
            <input type="text" className='languages-input' value={value} placeholder='What languages do you want to learn?'
           required onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='languages-btn'>Add Language</button>
        </form>
    )
}