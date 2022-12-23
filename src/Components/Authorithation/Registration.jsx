import React, { useContext, useState } from "react";
import "./Authorithation.css";
import home from "../img/home.svg";
import { Link, NavLink } from "react-router-dom";
import facebook from "../img/facebook.svg";
import twiter from "../img/twiter.svg";
import wk from "../img/wk.svg";
import google from "../img/google.svg";
import { useAuth } from "../../context/AuthContextProvider";
const Registration = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  function handleSave() {
    // e.preventDefault();
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password_confirm.trim()
    ) {
      return;
    } else if (password !== password_confirm) {
      alert("Пароли не совпадают");
      return;
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", password_confirm);
      register(formData);
      // let obj = {
      //   username,
      //   email,
      //   password,
      //   password_confirm,
      // };
      // console.log(obj);
      console.log(register());
      setUsername("");
      setPassword("");
      setPassword_confirm("");
      setEmail("");
    }
  }
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
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Nickname "
              className="user"
              type="text"
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="user"
              type="text"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="password"
              type="password"
            />
            <input
              value={password_confirm}
              onChange={e => setPassword_confirm(e.target.value)}
              placeholder="Password2"
              className="password"
              type="password"
            />
            <div className="line2 end"></div>
            <button onClick={() => handleSave()}>Registration</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
