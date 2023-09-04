import React from "react";
import "./LandingPage.css";
import LearnCmp from "../src/Asset/Learn.jpg";
import TeacherVerify from "./Modal/TeacherVerify";
import StudentVerify from "./Modal/StudentVerify";

const LandingPage = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src={LearnCmp}
                className="img-fluid border border-light rounded"
                alt="Sample image"
                style={{
                  boxShadow: "10px 10px 192px 10px rgba(135,255,177,1)",
                }}
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3 mb-2">You Are a?</p>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <button
                    type="button"
                    class="btn btn-success form-control form-control-lg"
                    style={{
                      boxShadow: " 10px 10px 122px -5px rgba(30,250,126,1);",
                    }}
                    data-toggle="modal"
                    data-target="#verifyteacher"
                  >
                    Teacher
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <div className="form-outline mb-4">
                    <button
                      type="button"
                      class="btn btn-primary form-control form-control-lg"
                      style={{
                        boxShadow: "10px 10px 122px -5px rgba(30,137,250,1)",
                      }}
                      data-toggle="modal"
                      data-target="#verifystudent"
                    >
                      Student
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved by Kaushik Bhowmick.
          </div>
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
      <TeacherVerify />
      <StudentVerify />
    </div>
  );
};

export default LandingPage;
