import "./App.css";
import { useEffect } from "react";
import readTodosRequest from "./api/readTodosRequest.js";

function App() {
  useEffect(() => {
    readTodosRequest();
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
