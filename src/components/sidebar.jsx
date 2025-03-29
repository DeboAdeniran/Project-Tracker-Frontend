import React from "react";
import "../css/sidebar.css";
import UseProjectAPI from "../services/api/projectAPI";
import { UseProjectStates } from "../services/hooks/useProjectStates";
import Account from "../assets/svg/account.svg?react";
import All from "../assets/svg/all.svg?react";
import Done from "../assets/svg/done.svg?react";
import Progress from "../assets/svg/progress.svg?react";
import NewIcon from "../assets/svg/new.svg?react";
import Settings from "../assets/svg/settings.svg?react";
import HelpIcon from "../assets/svg/helpIcon.svg?react";

function Sidebar() {
  const {
    setActive,
    setHeader,
    active,
    setNotFound,
    isSidebarOpen,
    toggleSidebar,
  } = UseProjectStates();
  const { getByStatus, getProjects } = UseProjectAPI();

  return (
    <div
      className={`side_bar_container ${isSidebarOpen ? "open" : ""}`}
      onClick={toggleSidebar}
    >
      <div className="sidebar">
        <div className="sidebar_list">
          <Account className="sidebar_img" />
          <p>Debo Adeniran</p>
        </div>
        <div className="sidebar_section">
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
                toggleSidebar;
              }}
              className={active === "all" ? "live" : ""}
            >
              <All className="sidebar_img" />
              <span>All Task</span>
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
                toggleSidebar;
              }}
              className={active === "todo" ? "live" : ""}
            >
              <NewIcon className="sidebar_img" />

              <span>New Task</span>
            </li>
            <li
              onClick={() => {
                getByStatus("inprogress");
                setActive("inprogress");
                setHeader({
                  head: "Task Inprogress",
                  desc: "Tasks that are actively being worked on.",
                });
                toggleSidebar;
                setNotFound(false);
              }}
              className={active === "inprogress" ? "live" : ""}
            >
              <Progress className="sidebar_img" />

              <span>Task Inprogress</span>
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
                toggleSidebar;
              }}
              className={active === "done" ? "live" : ""}
            >
              <Done className="sidebar_img" />

              <span>Completed Task</span>
            </li>
          </ul>
          <ul>
            <li
              className={active === "settings" ? "live" : ""}
              onClick={() => {
                setActive("settings");
                setHeader({
                  head: "Settings",
                  desc: "",
                });
                setNotFound(true);
                toggleSidebar;
              }}
            >
              <Settings className="sidebar_img" />

              <span>Setting</span>
            </li>
            <li
              className={active === "help" ? "live" : ""}
              onClick={() => {
                setActive("help");
                setHeader({
                  head: "Help",
                  desc: "",
                });
                toggleSidebar;
                setNotFound(true);
              }}
            >
              <HelpIcon className="sidebar_img" />

              <span>Help Center</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
