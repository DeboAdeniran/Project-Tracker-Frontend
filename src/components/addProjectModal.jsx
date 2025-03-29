import React from "react";
import "../css/modal.css";
import useProjectAPI from "../services/api/projectAPI";
import { UseProjectStates } from "../services/hooks/useProjectStates";

function AddProjectModal() {
  const { handleOnChange, CloseModal } = UseProjectStates();
  const { createProject } = useProjectAPI();

  return (
    <>
      <div className="modal_overlay" onClick={() => CloseModal("Create")}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Create a Project</h1>
            <h2>Fill in all the fields </h2>
            <input
              type="text"
              placeholder="Enter the name of the project"
              onChange={handleOnChange}
              name="projectName"
              required
            />
            <textarea
              placeholder="Enter detailed description"
              onChange={handleOnChange}
              name="description"
              required
            ></textarea>
            <button
              className="create"
              onClick={() => {
                createProject();
                CloseModal("Create");
              }}
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProjectModal;
