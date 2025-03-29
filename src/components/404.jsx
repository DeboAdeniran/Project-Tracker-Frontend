import React from "react";
import Error from "../assets/svg/404.svg?react";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <Error className="pageNotFound_icon" />
    </div>
  );
}
export default PageNotFound;
