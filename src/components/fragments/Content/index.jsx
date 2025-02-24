import React from "react";

import Etalase from "./Etalase";
import Dashboard from "./Dashboard";

function index() {
  return (
    <>
      <div className="">
        <Dashboard />
        <Etalase />
      </div>
    </>
  );
}

export default index;
