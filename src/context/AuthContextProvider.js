import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://35.158.122.77/";

const AuthContextProvider = ({ children }) => {
  async function register(formData) {
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
    }
    try {
      // const { data } = await axios.get(API);
      // const res = data.paths;
      const { data } = await axios.options(`${API}account/register/`, formData);
      // console.log(data);
      alert("Вы зарегистрированы");
    } catch (err) {
      console.error(err);
    }
  }
  async function Look2() {
    const { data } = await axios.get(API);
    const res = data.paths;
    console.log(res);
  }
  async function Look() {
    const { data } = await axios.get(`${API}`);
    console.log(data);
  }

  console.log(Look());
  console.log(Look2());
  const values = { register };

  return (
    <>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
