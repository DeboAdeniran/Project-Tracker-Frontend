import React from "react";
import "../css/navFilter.css";
import UseProjectAPI from "../services/api/projectAPI";
import { UseProjectStates } from "../services/hooks/useProjectStates";
import OverviewIcon from "../assets/svg/widget.svg?react";
import AddBox from "../assets/svg/addBox.svg?react";
import Sort from "../assets/svg/sort.svg?react";
import Format from "../assets/svg/format.svg?react";
import Plus from "../assets/svg/plus.svg?react";

function NavFilter() {
  const { setActive, active, OpenModal, setHeader, header, setNotFound } =
    UseProjectStates();
  const { getByStatus, getProjects } = UseProjectAPI();
  return (
    <div className="navFilter">
      <div className="navFilter_section">
        <div className="navFilter_top">
          <h2>{header.head}</h2>
          <p>{header.desc} </p>
        </div>
        <ul>
          <li
            onClick={() => {
              getProjects();
              setActive("all");
              setHeader({
                head: "All Task",
                desc: "View all tasks, regardless of their current status.",
              });
              setNotFound(false);
            }}
            className={active === "all" ? "active" : ""}
          >
            <OverviewIcon className="icon" />
            All
          </li>
          <li
            onClick={() => {
              getByStatus("todo");
              setActive("todo");
              setHeader({
                head: "New Task",
                desc: "Recently added tasks that are yet to be started.",
              });
              setNotFound(false);
            }}
            className={active === "todo" ? "active" : ""}
          >
            <Format className="icon" />
            Fresh task
          </li>
          <li
            onClick={() => {
              getByStatus("inprogress");
              setActive("inprogress");
              setHeader({
                head: "Task Inprogress",
                desc: "Tasks that are actively being worked on.",
              });
              setNotFound(false);
            }}
            className={active === "inprogress" ? "active" : ""}
          >
            <AddBox className="icon" />
            Active Task
          </li>
          <li
            onClick={() => {
              getByStatus("done");
              setActive("done");
              setHeader({
                head: "Completed Task",
                desc: "Tasks that have been successfully finished.",
              });
              setNotFound(false);
            }}
            className={active === "done" ? "active" : ""}
          >
            <Sort className="icon" />
            Done
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          OpenModal("Create");
          setNotFound(false);
        }}
      >
        <Plus className="icon" />
        Add Task
      </button>
      {}
    </div>
  );
}
export default NavFilter;
