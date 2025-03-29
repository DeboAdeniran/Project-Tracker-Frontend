import React from "react";
import HomePage from "./pages/homePage";
import AddProjectModal from "./components/addProjectModal";
import { ProjectProvider } from "./services/hooks/useProjectStates";
function App() {
  return (
    <ProjectProvider>
      <HomePage />
    </ProjectProvider>
  );
}

export default App;
