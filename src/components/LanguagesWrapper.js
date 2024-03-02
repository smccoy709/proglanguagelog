import { useState } from "react";

function LanguagesWrapper(props) {
  const [isEditing, setEditing] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [editingSubtaskId, setEditingSubtaskId] = useState(null);

  function handleChange(e) {
    setNewLanguage(e.target.value);
  }

  function handleSubtaskEdit(subtaskId) {
    setEditing(true);
    setEditingSubtaskId(subtaskId);
    setNewLanguage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingSubtaskId !== null) {
      props.editSubtask(props.id, editingSubtaskId, newLanguage);
    } else {
      // If not editing a subtask, call the function for main task edit
      props.editTask(props.id, newLanguage);
    }
    setNewLanguage("");
    setEditing(false);
    setEditingSubtaskId(null);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newLanguage}
          placeholder="What do you want to change this to?"
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => {
            setEditing(false);
            setEditingSubtaskId(null);
          }}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      {props.subtasks && props.subtasks.length > 0 && (
        <div className="subtask-list">
          {props.subtasks.map((subtask) => (
            <div className="subtask" key={subtask.id}>
              <input
                id={subtask.id}
                type="checkbox"
                defaultChecked={subtask.completed}
                onChange={() => props.toggleTaskCompleted(subtask.id)}
              />
              <label className="subtask-control" htmlFor={subtask.id}>
                {subtask.name}
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn subtask-edit"
                  onClick={() => handleSubtaskEdit(subtask.id)}>
                  Edit subtask <span className="visually-hidden">{subtask.name}</span>
                </button>
                <button
                  type="button"
                  className="btn btn__danger subtask-delete"
                  onClick={() => props.deleteSubtask(props.id,subtask.id)}>
                  Delete subtask <span className="visually-hidden">{subtask.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className={`todo>${props.subtasks ? " with-subtasks" : ""}`}>
      {isEditing ? editingTemplate : viewTemplate}{" "}
    </li>
  );
}

export default LanguagesWrapper;
