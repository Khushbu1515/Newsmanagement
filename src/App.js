import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Components/Dashboard/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
    </Routes>
  );
}
// new comment .
export default App;


