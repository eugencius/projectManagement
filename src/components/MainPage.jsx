import CreationPage from "./CreationPage.jsx";
import InitialPage from "./InitialPage.jsx";
import ProjectDisplay from "./ProjectDisplay.jsx";

import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";

export default function MainPage() {
  const { action } = useContext(ProjectsContext);

  return (
    <>
      {action === "home" && <InitialPage />}
      {action === "creation" && <CreationPage />}
      {action === "viewProject" && <ProjectDisplay />}
    </>
  );
}
