import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Components/Dashboard/Homepage";
import Login from "./Components/Authorization/Login";
import Register from "./Components/Authorization/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
  );
}
// new comment .
export default App;


