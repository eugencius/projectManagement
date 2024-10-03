import { useRef, useState } from "react";
import Modal from "./Modal.jsx";

export default function Tasks({
  handleAddTask,
  handleDeleteTask,
  projectsState,
}) {
  const [enteredTask, setEnteredTask] = useState("");
  const projectId = projectsState.selectedProjectId;
  const selectedProject = projectsState.projects[projectId];
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function addTask() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    handleAddTask(enteredTask, projectId);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} btnCaption="Okay">
        <h2 className="mb-4 text-xl font-bold text-stone-700">Invalid input</h2>
        <p className="mb-4 text-stone-600">
          Ops... Looks like you forgot to enter a value for the task.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value.
        </p>
      </Modal>
      <div className="pt-8">
        <h2 className="mb-6 text-4xl font-bold text-stone-800">Tasks</h2>
        <div className="mb-6 flex gap-3">
          <input
            type="text"
            className="bg-stone-200 px-2 py-1 text-lg outline-sky-700"
            onChange={handleChange}
            value={enteredTask}
          />
          <button
            className="text-lg text-stone-700 duration-300 ease-out hover:text-stone-950"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        {selectedProject.tasks.length === 0 ? (
          <p>This project does not have any tasks yet.</p>
        ) : (
          <ul className="flex flex-col gap-3 bg-stone-200 p-6">
            {selectedProject.tasks.map((task, i) => (
              <li className="flex justify-between text-lg" key={i}>
                <span>{task}</span>
                <button
                  className="duration-300 ease-out hover:text-red-500"
                  onClick={() => {
                    handleDeleteTask(projectId, i);
                  }}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
