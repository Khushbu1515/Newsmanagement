import React,{useEffect} from "react";
import "../Dashboard/file.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setisLoggedIn,setformDatas,setErrors,setInputvalue,setUser} from '../redux-toolkit/reducer';


import { toast } from "react-toastify";
import newspaper from "../assets/newspaper.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.myData);
  const { formDatas, errors, isLoggedIn, user,inputvalue } = alldata;
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    dispatch(setformDatas({ ...formDatas, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formDatas.email || !formDatas.password) {
      // Set error messages htmlFor empty fields
      dispatch(
        setErrors({
          email: !formDatas.email ? "this is required field" : "",
          password: !formDatas.password ? "this is required field" : "",
        })
      );
      return; // Prevent form submission
    }

    // Send the form data to the backend using Axios
    axios
      .post("http://localhost:3004/user/login", formDatas)
      .then((response) => {
        if (response.status === 200) {
          // Signup was successful
          // You can show a success message to the user

          toast.success("login successfully");
          // localStorage.setItem(
          //   "listing",
          //   JSON.stringify(response.data.Profile)
          // );
          localStorage.setItem("JWTtoken", response.data.JWTtoken);

          // Reset the form data to empty values
          dispatch(setformDatas({
           
            email: "",
            password: "",
          }));

          navigate("/");
        } else {
          // Handle other status codes if needed
          toast.error("signup failed");
        }
      })
      .catch((error) => {
        // Handle network errors or other errors
        toast.error("not logined");
        console.log("Error:", error);
      });
  };
  useEffect(() => {
    const jwtToken = localStorage.getItem("JWTtoken");
    const customHeaders = {
      authorization: `${jwtToken}`, // Replace 'YourAuthToken' with your actual authorization token
      "Content-Type": "application/json", // Specify the content type if needed
    };
    axios
      .get("http://localhost:3300/user//get-user", {
        headers: customHeaders,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(setUser(response.data.profile));
          dispatch(setisLoggedIn(true));
        } else {
          toast.error("user not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleLogout = () => {
    // Perform logout logic here

   dispatch( setisLoggedIn(false)); // Set to false when the user logs out
    localStorage.removeItem("JWTtoken");
  };
  return (
    <div>
      <div>
        <nav className="navbars">
          <img src={newspaper} alt=""></img>
          {isLoggedIn && Object.keys(user).length > 0 ? (
            <div>
              {user ? (
                // If a user exists, render the profile icon and logout button
                <div className="profile-container">
                  <input
                    className="profileImage"
                    type="text"
                    value={`${user.firstName
                      .charAt(0)
                      .toUpperCase()} ${user.lastName.charAt(0).toUpperCase()}`}
                    onChange={(e) =>dispatch(setInputvalue(e.target.value))}
                  />
                  <p>{inputvalue}</p>
                  <div className="profile-dialog">
                    <ul>
                      <li onClick={() => navigate(`/update/${user.user_id}`)}>
                        {" "}
                        Profile Update
                      </li>
                      <li onClick={() => navigate("/orderhistory")}>
                        Orders Details
                      </li>
                      <li onClick={handleLogout}> Logout</li>
                    </ul>
                  </div>
                </div>
              ) : (
                // If no user exists, render login and signup buttons
                <div>
                  <h1
                    className="user-actions"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </h1>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className="user-actions" onClick={() => navigate("/login")}>
                login ?
              </h1>
            </div>
          )}
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
                        <p className="head">Login</p>
                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" className="text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </a>

                          <a href="#!" className="text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-google"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                          </a>
                          <a href="#!" className="text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-linkedin"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          </a>
                        </div>
                        <br />
                        <div className="form-outline mb-4">
                          <div className="fields">
                            <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Email:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              name="EmailAddress"
                              value={formDatas.email}
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
                                value={formDatas.password}
                                onChange={handleChange}
                              />
                              <div className="validation">
                                {errors.password}
                              </div>
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                                onClick={handleSubmit}
                              >
                                Log in
                              </button>
                              <br />
                              <br />
                              <a className="text-muted" href="#!">
                                Forgot password?
                              </a>
                            </div>
                            <br />
                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                                onClick={() => navigate("/register")}
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

export default Login;
