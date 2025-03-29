import axios from "axios";
import { UseProjectStates } from "../hooks/useProjectStates";

const useProjectAPI = () => {
  const { setLoading, setProjects, formData, data } = UseProjectStates();

  const API_URL = import.meta.env.VITE_PROJECTS_API;

  const getProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/projects`);
      setProjects(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getByStatus = async (status) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/api/projects/status/${status}`
      );
      setProjects(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/projects`, formData);
      console.log("Project Created..............");
      await getProjects();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_PROJECTS_API}/api/projects/${id}`
      );
      console.log("Project Deleted..............");
      await getProjects();
    } catch (err) {
      console.error("Delete failed:", err);
      console.log(id);
    }
  };

  const updateProject = async (id) => {
    setLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_PROJECTS_API}/api/projects/${id}`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Project Updated..............");
      await getProjects();
    } catch (err) {
      console.error("Update failed:", err);
      console.log(id);
    } finally {
      setLoading(false);
    }
  };

  return {
    getProjects,
    getByStatus,
    createProject,
    deleteProject,
    updateProject,
  };
};

export default useProjectAPI;
