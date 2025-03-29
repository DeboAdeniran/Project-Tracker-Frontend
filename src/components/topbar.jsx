import React from "react";
import { UseProjectStates } from "../services/hooks/useProjectStates";
import Back from "../assets/svg/back.svg?react";
import "../css/topbar.css";
import Help from "../assets/svg/help.svg?react";
import More from "../assets/svg/more.svg?react";
import Notification from "../assets/svg/notification.svg?react";
import Menu from "../assets/svg/menu.svg?react";

function TopBar() {
  const { header, setNotFound, toggleSidebar } = UseProjectStates();
  return (
    <div className="topbar">
      <div className="topbar_sections">
        <button className="hamburger_menu" onClick={toggleSidebar}>
          <Menu />
        </button>
        <button onClick={() => setNotFound(false)} className="back">
          <Back className="span_icon" />
        </button>
        <p>Project Space</p>
        <p>/</p>
        <p>{header.head}</p>
      </div>
      <div className="topbar_sections">
        <button className="span" onClick={() => setNotFound(true)}>
          Help
          <Help />
        </button>
        <button onClick={() => setNotFound(true)}>
          <Notification />
        </button>
        <button onClick={() => setNotFound(true)}>
          <More />
        </button>
      </div>
    </div>
  );
}
export default TopBar;
