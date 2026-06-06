import React from "react";

function Delete({ index, deleteTask }) {
  return (
    <button onClick={() => deleteTask(index)}>
      Delete
    </button>
  );
}

export default Delete;