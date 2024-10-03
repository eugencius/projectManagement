import { useRef } from "react";
import Tasks from "./Tasks.jsx";

export default function ProjectDisplay({
  projectsState,
  handleAddTask,
  handleDeleteProject,
  handleDeleteTask,
}) {
  const projectId = projectsState.selectedProjectId;
  const selectedProject = projectsState.projects[projectId];

  const date = new Date(selectedProject.dueDate);
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="mx-10 flex w-5/12 flex-col justify-center divide-y-2 divide-stone-300">
      <div className="pb-8">
        <div className="flex justify-between">
          <h1 className="mb-3 text-4xl font-bold text-stone-800">
            {selectedProject.title}
          </h1>

          <button
            className="text-lg duration-300 ease-out hover:text-red-500"
            onClick={() => {
              handleDeleteProject(projectId);
            }}
          >
            Delete
          </button>
        </div>
        <p className="mb-6 text-lg text-stone-500">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-lg text-stone-800">
          {selectedProject.description}
        </p>
      </div>
      <Tasks
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        projectsState={projectsState}
      />
    </div>
  );
}
