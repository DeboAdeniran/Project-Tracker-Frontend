import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
  });
  const [isModalOpen, setModalOpen] = useState({
    Create: false,
    edit: false,
    delete: false,
  });
  const [header, setHeader] = useState({
    head: "All Task",
    desc: "All Task",
  });
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({ status: "", progress: 0 });

  const CloseModal = (type, project = null) => {
    setSelectedProject(project);
    setModalOpen((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  const OpenModal = (type, project = null) => {
    setSelectedProject(project);
    setModalOpen((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleEditOnChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    console.log("toggle button");
  };

  return (
    <ProjectContext.Provider
      value={{
        isLoading,
        setLoading,
        notFound,
        setNotFound,
        projects,
        setProjects,
        active,
        setActive,
        selectedProject,
        setSelectedProject,
        isModalOpen,
        setModalOpen,
        header,
        setHeader,
        formData,
        setFormData,
        data,
        setData,
        CloseModal,
        OpenModal,
        handleOnChange,
        progress,
        setProgress,
        handleEditOnChange,
        setIsSidebarOpen,
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const UseProjectStates = () => {
  return useContext(ProjectContext);
};
