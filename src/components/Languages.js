import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Languages = ({code, toggleComplete, deleteLanguage, editLanguage}) => {
    function isCompleted() {
        document.getElementById('completed').style.backgroundColor = 'lightgreen';
    }

    function notCompleted() {
        document.getElementById('completed').style.backgroundColor = '#8758ff';
    }
    
    return (
        <div id='completed' className='Languages'>
            <p onClick={() => toggleComplete(code.id)} className={`${code.completed ? 'completed' : ""}`}
            onMouseDown={isCompleted} onChange={notCompleted}>{code.code}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editLanguage(code.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteLanguage(code.id)}/>
            </div>
        </div>
    )
}