import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import TopBar from "../components/topbar";
import NavFilter from "../components/navFilter";
import Card from "../components/card";
import AddProjectModal from "../components/addProjectModal";
import ProjectModal from "../components/projectModal";
import Loader from "../components/loader";
import Error from "../components/404";
import useProjectAPI from "../services/api/projectAPI";
import { UseProjectStates } from "../services/hooks/useProjectStates";

function HomePage() {
  const { isLoading, isModalOpen, notFound, projects, OpenModal } =
    UseProjectStates();
  const { getProjects } = useProjectAPI();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isModalOpen.Create && <AddProjectModal />}
      {isModalOpen.edit && <ProjectModal />}

      <div className="app">
        <Sidebar />
        <div className="app_sec">
          <TopBar />
          <NavFilter />
          <div className="main_section">
            {notFound && <Error />}
            {projects.length > 0 ? (
              <>
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    project={project}
                    OpenModal={() => OpenModal("edit", project)}
                  />
                ))}
              </>
            ) : (
              <p>No projects found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
