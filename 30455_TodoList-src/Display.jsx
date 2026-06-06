import React from "react";
import Delete from "./DeleteTask";

function Display({ tasks, deleteTask }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <Delete index={index} deleteTask={deleteTask} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Display;