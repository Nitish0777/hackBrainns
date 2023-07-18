import React, { useState } from "react";
import "../../styles/header.css";
import "../../styles/login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Modal } from "bootstrap";

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      console.log(res);
      if (res.data.success) {
        const { user, token } = res.data;
        setAuth({ user, token });
        localStorage.setItem("auth", JSON.stringify({ user, token }));
        const loginModal = document.getElementById("loginModal");
        const modal = new Modal(loginModal);
        modal.hide();
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <header>
      <div className="box" />
      <div className="box-2" />
      <div className="box-3" />
      <div className="box-4" />
      <div className="box-5" />
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top sample"
        id="navbar"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="home.html">
            <img src="final.jpg" alt="Logo" className="logo" />
            SAVAI LABS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-2">
            <button
              className="btn btn-light-purple"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Log In
            </button>
            <Link href="profile.html" className="pro">
              <button className="btn btn-light-purple profile">Profile</button>
            </Link>
          </div>
        </div>
      </nav>
      {/* login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="loginModalLabel">
                Log In to HackBrainn
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="main">
              <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="user-box">
                    <i className="fa fa-user sym" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                  </div>
                  <div className="user-box">
                    <i className="fa fa-key sym" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                  </div>
                  <button type="submit">
                    <span />
                    <span />
                    <span />
                    <span />
                    Submit
                  </button>
                </form>
                <div className="foot">
                  <span>
                    <Link href="index.html" className="forgot">
                      Forgot password?
                    </Link>
                  </span>
                  <span>
                    <Link href="#" id="signupLink">
                      Signup
                    </Link>
                  </span>
                </div>
                <div className="second">or</div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <Link href="index.html">
                    <p className="btn-text">
                      <b>Sign in with google</b>
                    </p>
                  </Link>
                </div>
              </div>
              {/* signup modal */}
              <div
                className="modal fade"
                id="signupModal"
                tabIndex={-1}
                aria-labelledby="signupModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="signupModalLabel">
                        Sign Up to HackBrainn
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="main">
                      <div className="login-box">
                        <h2>Sign Up</h2>
                        <form>
                          <div className="user-box">
                            <i className="fa fa-user sym" />
                            <input type="text" name required />
                            <label>Name</label>
                          </div>
                          <div className="user-box">
                            <i className="fa fa-user sym" />
                            <input type="email" name required />
                            <label>Email</label>
                          </div>
                          <div className="user-box">
                            <i className="fa fa-key sym" />
                            <input type="text" name required />
                            <label>Set Password</label>
                          </div>
                          <div className="user-box">
                            <i className="fa fa-key sym" />
                            <input type="password" name required />
                            <label>Confirm Password</label>
                          </div>
                          <Link href="#">
                            <span />
                            <span />
                            <span />
                            <span />
                            Submit
                          </Link>
                        </form>
                        <div className="google-btn">
                          <div className="google-icon-wrapper">
                            <img
                              className="google-icon"
                              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            />
                          </div>
                          <Link href="index.html">
                            <p className="btn-text">
                              <b>Sign in with google</b>
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
