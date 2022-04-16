import React from "react";

const Universities = (props) => {
  return (
    <ul>
      {props.universities.map((university) => (
        <li key={university.id}>{university.name}</li>
      ))}
    </ul>
  );
};
export default Universities;
