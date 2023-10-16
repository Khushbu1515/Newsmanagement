import React, { useState } from "react";
import "../Dashboard/file.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFormData,setErrors } from "../redux-toolkit/Store";
import { toast } from "react-toastify";
import newspaper from "../assets/newspaper.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.myData);
  const {errors,formData}=allData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    dispatch(setFormData({ ...formData, [name]: value }));
  };
  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !!formData.user_type
    ) {
      // Set error messages htmlFor empty fields
      setErrors({
        name: !formData.name ? "This is a required field" : "",

        email: !formData.email ? "This is a required field" : "",
        password: !formData.password ? "This is a required field" : "",
        user_type: !formData.user_type ? "This is a required field" : "",
      });
      return; // Prevent form submission
    }

    axios
      .post("http://localhost:3004/user/signup", formData)
      .then((response) => {
        if (response.status === 200) {
          // You can show a success message to the user
          toast.success("Signup successful");
          // Reset the form data to empty values
          dispatch(
            setFormData({
              name: "",

              email: "",
              password: "",
              user_type: "",
            })
          );
        } else {
          // Handle other status codes if needed
          toast.error("Signup failed");
        }
      })
      .catch((error) => {
        // Handle network errors or other errors
        console.error("Error:", error);
        alert("Signup failed");
      });
  };

  return (
    <div>
      <div>
        <nav className="navbars">
          <img src={newspaper} alt=""></img>
          <h1
            style={{ color: "darkblue", fontSize: "35px" }}
            onClick={() => navigate("/login")}
          >
            Login ?
          </h1>
        </nav>
      </div>

      <section className="gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="container">
                      <form className="form">
                        <p className="head">Register</p>

                        <br />

                        <div className="fields">
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <div className="validation">{errors.name}</div>
                          <div />
                          <br />
                          <div className="fields">
                            <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <div className="validation">{errors.email}</div>
                            <div />
                            <br />

                            <div className="fields">
                              <label
                                className="form-label"
                                htmlFor="form2Example11"
                              >
                                password:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              <div className="validation">
                                {errors.password}
                              </div>
                              <div />
                              <br />
                              <div>
                                <label>user-type: </label>
                                <select
                                  id="user_type"
                                  className="form-control"
                                  name="user_type"
                                  value={formData.user_type}
                                  onChange={handleChange} // Ensure the correct case for the event handler
                                >
                                  <option value="">-- Select --</option>{" "}
                                  {/* Set an empty value for the default option */}
                                  <option value="admin">admin</option>
                                  <option value="sub_admin">sub admin</option>
                                </select>
                              </div>
                            </div>

                            <br />
                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                                onClick={handleSubmit}
                              >
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  );
};

export default Register;
