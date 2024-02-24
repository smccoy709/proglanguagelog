import React, { useState } from 'react';
import { LanguagesForm } from './LanguagesForm';
import { v4 as uuidv4 } from 'uuid';
import { Languages } from './Languages';
import { Subtasks } from './Subtasks';
import { EditLanguagesForm } from './EditLanguagesForm';
import { EditSubtaskForm } from './EditSubtaskForm';
import { SubtaskForm } from './SubtaskForm';
uuidv4();

export const LanguagesWrapper = () => {
    const [languages, setLanguages] = useState([]);
    const [subtasks, setSubtasks] = useState([]);


    const addLanguage = language => {
        setLanguages([...languages, {id: uuidv4(),
        code: language,
        completed: false,
        isEditing: false}]);
        console.log(languages);
    }
    
    const addSubtasks = sub => {
        setSubtasks([...subtasks, {id: uuidv4(),
        code: sub,
        completed: false,
        isEditing: false}]);
        console.log(subtasks);
  }

    const toggleComplete = id => {
        setLanguages(languages.map(language => language.id === id ?
            {...language, completed: !language.completed}
            : language))
    }

    const isToggleComplete = id => {
        setSubtasks(subtasks.map(sub => sub.id === id ?
        {...sub, completed: !sub.completed}
        : sub))
    }

    const deleteLanguage = id => {
        setLanguages(languages.filter(language => language.id !== id))
    }

    const deleteSubtask = id => {
        setSubtasks(subtasks.filter(sub => sub.id !== id))
    }

    const editLanguage = id => {
        setLanguages(languages.map(language => language.id === id ?
            {...language, isEditing: !language.isEditing}
            : language))
    }

        const editSubtask = id => {
        setSubtasks(subtasks.map(sub => sub.id === id ?
            {...sub, isEditing: !sub.isEditing}
            : sub))
    }

    const editLanguages = (code, id) => {
        setLanguages(languages.map(language => language.id === id ?
            {...language, code, isEditing: !language.isEditing}
            : language))
    }

    const editSubtasks = (code, id) => {
        setSubtasks(subtasks.map(sub => sub.id === id ?
            {...sub, code, isEditing: !sub.isEditing}
            : sub))
    }

    return (
        <div className='LanguagesWrapper'>
            <h1>Let's Learn How To Code!</h1>
            <LanguagesForm addLanguage={addLanguage} />
            {languages.map((language, index) => (
                language.isEditing ? (
                    <EditLanguagesForm editLanguage={editLanguages} code={language} />
                ) : (
                    <Languages code={language} key={index} toggleComplete={toggleComplete}
                    deleteLanguage={deleteLanguage} editLanguage={editLanguage} />
                )
            ))}
            <SubtaskForm addSubtasks={addSubtasks} />
            {subtasks.map((sub, index) => (
                sub.isEditing ? (
                    <EditSubtaskForm editSubtask={editSubtasks} code={sub} />
                ) : (
                    <Subtasks code={sub} key={index} isToggleComplete={isToggleComplete}
                    deleteSubtask={deleteSubtask} editSubtask={editSubtask} />
                )
            ))}
        </div>
    )
}