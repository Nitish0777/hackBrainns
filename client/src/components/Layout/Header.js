import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import "../../styles/login.css";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import SignIn from "../modal/Signin";
import SignUp from "../modal/SignUp";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({
      ...auth,
      token: "",
      user: null,
    });
    localStorage.removeItem("auth");
    toast.dark("Logged out successfully!");
  };

  const openSignupModal = () => {
    setIsSignupModalVisible(true);
    setIsModalVisible(false); // Close login modal when opening signup modal
  };

  const closeSignupModal = () => {
    setIsSignupModalVisible(false);
  };

  const openModal = () => {
    setIsModalVisible(true);
    setIsSignupModalVisible(false); // Close signup modal when opening login modal
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
          <Link className="navbar-brand" to="home.html">
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
                <Link className="nav-link" to="#contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {!auth?.user ? (
            <>
              <div className="mx-2">
                <button className="btn btn-light-purple" onClick={openModal}>
                  Log In
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mx-2">
                <Link to="profile.html" className="pro">
                  <button className="btn btn-light-purple profile">
                    {auth?.user?.name}
                  </button>
                </Link>
                <button className="btn btn-light-purple" onClick={logout}>
                  Log Out
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
      {/* Login Modal */}
      <SignIn
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        openSignupModal={openSignupModal}
      />
      {/* Sign Up Modal */}
      <SignUp
        isSignupModalVisible={isSignupModalVisible}
        closeSignupModal={closeSignupModal}
      />
    </header>
  );
};

export default Header;
