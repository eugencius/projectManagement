import SideBar from "./components/SideBar.jsx";
import ProjectsContextProvider from "./store/projects-context.jsx";
import MainPage from "./components/MainPage.jsx";

function App() {
  return (
    <ProjectsContextProvider>
      <main className="mt-8 flex h-screen">
        <SideBar />
        <MainPage />
      </main>
    </ProjectsContextProvider>
  );
}

export default App;
