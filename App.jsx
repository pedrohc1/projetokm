import { Routes, Route } from "react-router-dom";
import Login from "./src/pages/login";
import SignIn from "./src/pages/signIn";
import "./src/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
