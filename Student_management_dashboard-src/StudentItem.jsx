import React from "react";

function StudentItem({ name, onDelete }) {
  return (
    <li>
      {name}
      <button onClick={() => onDelete(name)}>Delete</button>
    </li>
  );
}

export default React.memo(StudentItem);