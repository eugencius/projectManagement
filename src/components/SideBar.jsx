import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";

export default function SideBar() {
  const { projects, selectedProjectId, action, displayProject, changePage } =
    useContext(ProjectsContext);

  const selectedProject = projects.selectedProjectId;

  return (
    <aside className="h-full w-1/3 max-w-md rounded-tr-xl bg-stone-950 px-8 py-24 text-stone-50">
      <h2 className="mb-8 text-2xl font-bold uppercase">Your projects</h2>
      <button
        className="mb-8 rounded-lg bg-stone-700 px-4 py-2 text-lg text-stone-400 duration-300 ease-out hover:bg-stone-800"
        onClick={() => {
          changePage("creation");
        }}
      >
        + Add Project
      </button>
      <ul className="flex flex-col gap-1">
        {projects.map((project, id) => (
          <li
            className={`${selectedProjectId === id && action === "viewProject" && "bg-stone-900"} rounded p-2 text-lg text-stone-200 duration-300 ease-out hover:bg-stone-900`}
            key={id}
            onClick={() => {
              displayProject(id);
            }}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
