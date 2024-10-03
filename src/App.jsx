import { useState } from "react";
import InitialPage from "./components/InitialPage.jsx";
import CreationPage from "./components/CreationPage.jsx";
import ProjectDisplay from "./components/ProjectDisplay.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
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
  let content;

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

  if (projectsState.action === "home") {
    content = <InitialPage handleChangePage={handleChangePage} />;
  } else if (projectsState.action === "creation") {
    content = (
      <CreationPage
        handleChangePage={handleChangePage}
        handleProjectCreation={handleProjectCreation}
      />
    );
  } else if (projectsState.action === "viewProject") {
    content = (
      <ProjectDisplay
        projectsState={projectsState}
        handleAddTask={handleAddTask}
        handleDeleteProject={handleDeleteProject}
        handleDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="mt-8 flex h-screen">
      <SideBar
        projectsState={projectsState}
        handleChangePage={handleChangePage}
        handleDisplayProject={handleDisplayProject}
      />
      {content}
    </main>
  );
}

export default App;
