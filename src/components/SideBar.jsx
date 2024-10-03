export default function SideBar({
  projectsState,
  handleDisplayProject,
  handleChangePage,
}) {
  const projects = projectsState.projects;
  const selectedProject = projectsState.selectedProjectId;
  const currentPage = projectsState.action;

  return (
    <aside className="h-full w-1/3 max-w-md rounded-tr-xl bg-stone-950 px-8 py-24 text-stone-50">
      <h2 className="mb-8 text-2xl font-bold uppercase">Your projects</h2>
      <button
        className="mb-8 rounded-lg bg-stone-700 px-4 py-2 text-lg text-stone-400 duration-300 ease-out hover:bg-stone-800"
        onClick={() => {
          handleChangePage("creation");
        }}
      >
        + Add Project
      </button>
      <ul className="flex flex-col gap-1">
        {projects.map((project, id) => (
          <li
            className={`${selectedProject === id && currentPage === "viewProject" && "bg-stone-900"} rounded p-2 text-lg text-stone-200 duration-300 ease-out hover:bg-stone-900`}
            key={id}
            onClick={() => {
              handleDisplayProject(id);
            }}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
