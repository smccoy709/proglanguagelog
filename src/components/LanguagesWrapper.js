import React, { useState } from 'react';
import { LanguagesForm } from './LanguagesForm';
import { v4 as uuidv4 } from 'uuid';
import { Languages } from './Languages';
import { EditLanguagesForm } from './EditLanguagesForm';
uuidv4();

export const LanguagesWrapper = () => {
    const [languages, setLanguages] = useState([]);

    const addLanguage = language => {
          setLanguages([...languages, {id: uuidv4(),
            code: language,
            completed: false,
            isEditing: false}]);
    console.log(languages);
    }

    const toggleComplete = id => {
        setLanguages(languages.map(language => language.id === id ?
            {...language, completed: !language.completed}
            : language))
    }

    const deleteLanguage = id => {
        setLanguages(languages.filter(language => language.id !== id))
    }

    const editLanguage = id => {
        setLanguages(languages.map(language => language.id === id ?
            {...language, isEditing: !language.isEditing}
            : language))
    }

    const editLanguages = (code, id) => {
        setLanguages(languages.map(language => language.id === id ?
            {...language, code, isEditing: !language.isEditing}
            : language))
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
        </div>
    )
}