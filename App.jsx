import { Routes, Route } from "react-router-dom";
import Login from "./src/pages/login";
import SignUp from "./src/pages/signUp";
import "./src/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
