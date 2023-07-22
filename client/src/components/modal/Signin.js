import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";

const SignIn = ({ isModalVisible, closeModal, openSignupModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

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
        toast.dark("Login Successfully");

        const { user, token } = res.data;
        setAuth({ user, token });
        localStorage.setItem("auth", JSON.stringify({ user, token }));
        closeModal();
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <div>
      <div
        className={`modal fade ${isModalVisible ? "show" : ""}`}
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden={!isModalVisible}
        style={{ display: isModalVisible ? "block" : "none" }}
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
                onClick={closeModal}
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
                    <Link className="btn btn-light-purple">
                      Forgot password?
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="btn btn-light-purple"
                      onClick={openSignupModal}
                    >
                      Sign Up
                    </Link>
                  </span>
                </div>
                <div className="second">or</div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google"
                    />
                  </div>
                  <Link to="index.html">
                    <p className="btn-text">
                      <b>Sign in with Google</b>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
