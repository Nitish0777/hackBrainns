import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if you are using it
import axios from "axios"; // Import axios
import { toast } from "react-toastify";

const SignUp = ({ isSignupModalVisible, closeSignupModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSigUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      console.log(res);
      if (res.data.success) {
        toast.dark("Sign Up Successfully");
        closeSignupModal();
      } else {
        console.log(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Sign Up Error", error);
      toast.error("Sign Up Error");
    }
  };

  return (
    <div>
      <div
        className={`modal fade ${isSignupModalVisible ? "show" : ""}`}
        id="signupModal"
        tabIndex={-1}
        aria-labelledby="signupModalLabel"
        aria-hidden={!isSignupModalVisible}
        style={{ display: isSignupModalVisible ? "block" : "none" }}
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
                onClick={closeSignupModal}
              />
            </div>
            <div className="main">
              <div className="login-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSigUpSubmit}>
                  <div className="user-box">
                    <i className="fa fa-user sym" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label>Name</label>
                  </div>
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
                    <label>Set Password</label>
                  </div>
                  <div className="user-box">
                    <i className="fa fa-key sym" />
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label>Confirm Password</label>
                  </div>
                  <button type="submit">
                    <span />
                    <span />
                    <span />
                    <span />
                    Submit
                  </button>
                </form>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google Logo"
                    />
                  </div>
                  <Link to="index.html">
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
  );
};

export default SignUp;
