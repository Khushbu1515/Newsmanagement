import React from "react";
import "./file.css";

const Homepage = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <div>
        <nav className="navbars">
         <div>THE TIMES OF INDIA</div>
          
          
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
