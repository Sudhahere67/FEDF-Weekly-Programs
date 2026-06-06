import Add from "./Add.jsx";
import Subtract from "./Subtract.jsx";

function App() {
  return (
    <div>
      <h1>Class Component Demo</h1>

      <Student
        name="Madhavi"
        course="React JS"
      />

      <Student
        name="Ravi"
        course="JavaScript"
      />
    </div>
  );
}

export default App;