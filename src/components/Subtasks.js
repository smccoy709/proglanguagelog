import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Subtasks = ({code, isToggleComplete, deleteSubtask, editSubtask}) => {
    function isCompleted() {
        document.getElementById('is-completed').style.backgroundColor = 'lightgreen';
    }

    function notCompleted() {
        document.getElementById('is-completed').style.backgroundColor = '#8758ff';
    }

    return (
        <div id='is-completed' className='Subtasks'>
            <p onClick={() => isToggleComplete(code.id)} className={`${code.completed ? 'completed' : ""}`}
            onMouseDown={isCompleted} onChange={notCompleted}>{code.code}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editSubtask(code.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteSubtask(code.id)}/>
            </div>
        </div>
    )
}