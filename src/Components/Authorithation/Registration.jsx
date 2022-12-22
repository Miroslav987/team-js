import React from "react";
import "./Authorithation.css";
import home from "../img/home.svg";
import { Link, NavLink } from "react-router-dom";
import facebook from "../img/facebook.svg";
import twiter from "../img/twiter.svg";
import wk from "../img/wk.svg";
import google from "../img/google.svg";
const Registration = () => {
  return (
    <>
      <div className="container1">
        <h2>Registration</h2>
        <div className="auth_block">
          <div className="auth_block_info">
            <div className="auth_nav">
              <Link to="/home">
                <img src={home} alt="" />
              </Link>
              <NavLink to="/logIn">
                <p className="p">Log In</p>
              </NavLink>
              <NavLink to="/registration">
                <p className="p">Registration</p>
              </NavLink>
            </div>
            <div className="line"></div>{" "}
            <p className="auth_text"> Sign in with social networks</p>
            <div className="auth_bl">
              <div className="bl one">
                <img src={facebook} alt="" />
              </div>
              <div className="bl two">
                <img src={twiter} alt="" />
              </div>
              <div className="bl three">
                <img src={wk} alt="" />
              </div>
              <div className="bl four">
                <img src={google} alt="" />
              </div>
            </div>
            <div className="auth_bl2">
              <div className="line2"></div>
              <span>Or</span>
              <div className="line2"></div>
            </div>
            <p className="auth_text"> Sign in with nickname or email</p>
            <input
              placeholder="Nickname or email"
              className="user"
              type="text"
            />
            <input
              placeholder="Password"
              className="password"
              type="password"
            />
            <div className="line2 end"></div>
            <button>Registration</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
