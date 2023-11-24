import React from "react";
import "./file.css";
import newspaper from "../assets/newspaper.png"
import { useNavigate } from "react-router-dom";
const Homepage = () => {
 
  const navigate=useNavigate();

  return (
    <div>
      <div>
        <nav className="navbars">
        <img src={newspaper}  alt=""></img>
          <h1 style ={{color:"darkblue", fontSize:"35px"}} onClick={()=>navigate("/login")}>Login ?</h1>
        </nav>

        <footer>
          <div className="footer-content">
            <p>@copy; 2023 MATRIX MEDIA SOLUTION PVT. LTD.</p>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
