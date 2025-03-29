/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../css/modal.css";
// import axios from "axios";
import useProjectAPI from "../services/api/projectAPI";
import { UseProjectStates } from "../services/hooks/useProjectStates";

function ProjectModal() {
  const {
    progress,
    selectedProject,
    handleEditOnChange,
    setData,
    data,
    setProgress,
    CloseModal,
    project,
    setLoading,
  } = UseProjectStates();
  const { updateProject, deleteProject } = useProjectAPI();

  // const selectedProject = project

  return (
    <div className="modal_overlay" onClick={() => CloseModal("edit")}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Update Status and Progress</h1>
          <input
            type="text"
            placeholder={selectedProject?.projectName || ""}
            value={selectedProject?.name || ""}
            readOnly
          />
          <select
            name="status"
            value={data.status}
            onChange={handleEditOnChange}
          >
            <option value="todo">Select a Status</option>
            <option value="todo">Todo</option>
            <option value="inprogress">inprogress</option>
            <option value="done">Done</option>
          </select>
          <textarea
            placeholder="Enter detailed description"
            className="readTextArea"
            value={selectedProject?.description || ""}
            readOnly
          ></textarea>
          <div className="range_container">
            <label htmlFor="progress" className="range_label">
              Progress: <span className="range_value">{data.progress}%</span>
            </label>
            <input
              type="range"
              id="progress"
              min="0"
              max="100"
              // name=""
              value={data.progress}
              onChange={(e) => {
                setProgress(e.target.value);
                handleEditOnChange(e);
              }}
              name="progress"
            />
          </div>
          <div className="modal_button">
            <button
              className="create"
              onClick={() => {
                updateProject(selectedProject._id);
                CloseModal("edit");
                // window.location.reload(1);
              }}
            >
              Update Project
            </button>
            <button
              className="delete"
              onClick={() => {
                deleteProject(selectedProject._id);
                CloseModal("edit");
              }}
            >
              Delete Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectModal;
