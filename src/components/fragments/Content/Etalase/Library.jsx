import React from "react";
import Card from "../../../elements/Card";

function Library() {
  return (
    <>
      <div className="grid w-full max-w-[60rem] grid-cols-1 gap-8 text-center lg:grid-cols-3 bg-fuchsia-400">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Library;
