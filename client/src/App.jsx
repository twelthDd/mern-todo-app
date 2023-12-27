import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { TodoPage } from "./pages/TodoPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
