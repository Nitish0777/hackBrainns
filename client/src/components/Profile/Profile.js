import React from "react";
import Layout from "../Layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <section className="user-info">
        <div className="container rounded  mt-lg-5 mb-5">
          <div className="row">
            <div className="col-md-4 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5 ">
                <img
                  className="rounded-circle mt-5"
                  id="profile-pic"
                  width="350px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <label htmlFor="input-file" className="updateimg">
                  Update Image
                </label>
                <input
                  className="profile"
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  id="input-file"
                />
                <span className="font-weight-bold">User ID</span>
                <span className="font-weight-bold text-black-100">
                  sample@gmail.com
                </span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-7 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Id"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label className="labels">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Age"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
