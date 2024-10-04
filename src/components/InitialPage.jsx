import noProjectsImg from "../assets/no-projects.png";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";

export default function InitialPage() {
  const { changePage } = useContext(ProjectsContext);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img
        className="mb-6 w-24"
        src={noProjectsImg}
        alt="The logo of the project"
      />
      <h1 className="mb-4 text-2xl font-bold text-stone-700">
        No Project Selected
      </h1>
      <p className="mb-8 text-xl text-stone-500">
        Select a project or get started with a new one
      </p>
      <button
        className="rounded-lg bg-stone-800 px-4 py-3 text-xl text-stone-400 duration-300 ease-out hover:bg-stone-900"
        onClick={() => {
          changePage("creation");
        }}
      >
        Create new project
      </button>
    </div>
  );
}
