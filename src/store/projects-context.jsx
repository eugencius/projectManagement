import { useState, useContext, createContext } from "react";

export const ProjectsContext = createContext({
  action: "home",
  projects: [],
  selectedProjectId: undefined,
  changePage: () => {},
  createProject: () => {},
  deleteProject: () => {},
  displayProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

export default function ProjectsContextProvider({ children }) {
  /*
   * Recognized actions are:
   * "home"
   * "creation"
   * "viewProject"
   */

  const [projectsState, setProjectsState] = useState({
    action: "home",
    projects: [],
    selectedProjectId: undefined,
  });

  function updateProjectsState(callback) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map(callback);

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleChangePage(page) {
    setProjectsState((prevState) => ({
      ...prevState,
      action: page,
    }));
  }

  function handleProjectCreation(newProject) {
    setProjectsState((prevState) => {
      const updatedProjects = [...prevState.projects, newProject];

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
    handleChangePage("home");
  }

  function handleDeleteProject(projectId) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (_, index) => index !== projectId,
      );
      handleChangePage("home");
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleDisplayProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        action: "viewProject",
        selectedProjectId: projectId,
      };
    });
  }

  function handleAddTask(task, projectId) {
    updateProjectsState((project, id) => {
      if (id === projectId) {
        return {
          ...project,
          tasks: [task, ...project.tasks],
        };
      }
      return project;
    });
  }

  function handleDeleteTask(projectId, taskId) {
    updateProjectsState((project, id) => {
      if (id === projectId) {
        const updatedTasks = project.tasks.filter(
          (_, index) => index !== taskId,
        );
        return { ...project, tasks: updatedTasks };
      }
      return project;
    });
  }

  const projectsContext = {
    action: projectsState.action,
    projects: projectsState.projects,
    selectedProjectId: projectsState.selectedProjectId,
    changePage: handleChangePage,
    createProject: handleProjectCreation,
    deleteProject: handleDeleteProject,
    displayProject: handleDisplayProject,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return (
    <ProjectsContext.Provider value={projectsContext}>
      {children}
    </ProjectsContext.Provider>
  );
}
