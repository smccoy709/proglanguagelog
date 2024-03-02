import { useState } from "react";

function LanguagesForm(props) {
  const [language, setLanguage] = useState("");
  const [isSubTask, setSubTask] = useState(false);
  const [selectedParentTask, setSelectedParentTask] = useState(null);

  function handleChange(e) {
    setLanguage(e.target.value);
  }
  function handleCheckboxChange(e) {
    setSubTask(e.target.checked);
  }

  function handleDropdownChange(e) {
    setSelectedParentTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (language === "") {
      alert("You need to enter a programming language that you want to learn!");
    } else {
      if (isSubTask && selectedParentTask !== null) {
        props.addTask(language, isSubTask, selectedParentTask);
        console.log(
          "Here are the props being set:" +
            language +
            " " +
            isSubTask +
            " " +
            selectedParentTask
        );
      } else {
        props.addTask(language);
        console.log(
          "Here are the props being set:" +
            language +
            " " +
            isSubTask +
            " " +
            selectedParentTask
        );
      }
      setLanguage("");
      setSubTask(false);
      setSelectedParentTask("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={language}
        placeholder="What programming languages did you want to learn?"
        onChange={handleChange}
      />
      <div className="isSub">
        <label htmlFor="new-subtask" className="label__sm">
          Is this a subtask?
        </label>
        <input
          type="checkbox"
          id="new-subtask"
          value={isSubTask}
          onChange={handleCheckboxChange}
        />
      </div>
      {isSubTask && props.parentTasks.length > 0 && (
        <div className="parentSelect">
          <label htmlFor="parent-task-dropdown" className="label__sm">
            Select Programming Language:
          </label>
          <select
            id="parent-task-dropdown"
            onChange={handleDropdownChange}
            value={selectedParentTask}>
            <option value={null}>Select a Language</option>
            {props.parentTasks.map((parentTask) => (
              <option key={parentTask.id} value={parentTask.id}>
                {parentTask.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default LanguagesForm;
