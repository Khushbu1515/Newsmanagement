import { Routes, Route } from "react-router-dom";
import './App.css';
//import { Provider } from 'react-redux';
//import store from '../src/Components/redux-toolkit/Store'; // Import your Redux store
import Homepage from "./Components/Dashboard/Homepage";
import Login from "./Components/Authorization/Login";
import Register from "./Components/Authorization/Register";

function App() {
  return (
    //<Provider store={store}>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
   // </Provider>
  );
}
// new comment .
export default App;


