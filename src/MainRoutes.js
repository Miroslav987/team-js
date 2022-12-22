import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Components/Authorithation/LogIn";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Registration from "./Components/Authorithation/Registration";
import AddBook from "./Components/AddBook/AddBook";
import Libary from "./Components/Libary/Libary";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/popular" element={<Popular />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/addBook" element={<AddBook />} />
      <Route path="/myLibary" element={<Libary />} />
    </Routes>
  );
};

export default MainRoutes;
