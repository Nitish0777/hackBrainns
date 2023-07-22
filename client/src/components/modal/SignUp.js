import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if you are using it

const SignUp = ({ isSignupModalVisible, closeSignupModal }) => {
  return (
    /* signup modal */
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
                <form>
                  <div className="user-box">
                    <i className="fa fa-user sym" />
                    <input type="text" name="name" required />
                    <label>Name</label>
                  </div>
                  <div className="user-box">
                    <i className="fa fa-user sym" />
                    <input type="email" name="email" required />
                    <label>Email</label>
                  </div>
                  <div className="user-box">
                    <i className="fa fa-key sym" />
                    <input type="password" name="password" required />
                    <label>Set Password</label>
                  </div>
                  <div className="user-box">
                    <i className="fa fa-key sym" />
                    <input type="password" name="confirmPassword" required />
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
