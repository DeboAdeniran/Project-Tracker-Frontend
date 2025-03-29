import React, { useEffect, useState } from "react";
import "../css/card.css";
import Dot from "../assets/svg/dot.svg?react";
import Edit from "../assets/svg/edit.svg?react";

function Card({ project, OpenModal }) {
  const [isDesc, setIsDesc] = useState();
  const [productName, setProjectName] = useState();

  useEffect(() => {
    if (project.description.length > 10) {
      setIsDesc(project.description.slice(0, 10) + "...");
    } else {
      setIsDesc(project.description);
    }

    if (project.projectName.length > 15) {
      setProjectName(project.projectName.slice(0, 15) + "...");
    } else {
      setProjectName(project.projectName);
    }
  });
  const status =
    project.status.charAt(0).toUpperCase() + project.status.slice(1);

  return (
    <div className="card">
      <div className="card_container">
        <div className="card_top">
          <p
            style={{
              backgroundColor:
                project.status === "inprogress"
                  ? "#1a9db119"
                  : project.status === "todo"
                  ? "#fc4a033c"
                  : project.status === "done"
                  ? "#1ab11a3c"
                  : null,

              color:
                project.status === "inprogress"
                  ? "#1a9db1"
                  : project.status === "todo"
                  ? "#fc4a03"
                  : project.status === "done"
                  ? "#1ab11a"
                  : null,
            }}
            className="status"
          >
            <Dot
              className="img"
              style={{
                fill:
                  project.status === "inprogress"
                    ? "#1a9db1"
                    : project.status === "todo"
                    ? "#fc4a03"
                    : project.status === "done"
                    ? "#1ab11a"
                    : null,
              }}
            />
            {status}
          </p>
          <Edit className="edit" onClick={() => OpenModal("edit")} />
        </div>
        <div
          className="card_section"
          style={{
            textDecoration: project.status === "done" ? "line-through" : "",
          }}
        >
          <p>{productName}</p>
          <p>{isDesc}</p>
        </div>
        <div className="progress">
          <div className="card_details">
            <p>{status}</p>
            <p>{project.progress}%</p>
          </div>
          <div className="progress_container">
            <div
              className="progress_bar"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="createdAt">
          <p>{new Date(project.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
