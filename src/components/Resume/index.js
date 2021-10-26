import React from "react";
import { useParams } from "react-router-dom";

const Resume = () => {
  const id = useParams().id;

  return (
    <div>
      <h1>Service detail</h1>
      <p>{id}</p>
    </div>
  );
};

export default Resume;
