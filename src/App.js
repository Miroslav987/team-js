import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  const [update, setUpdate] = useState();
  const style = {
    background: "white",
    color: "white",
  };
  console.log(update);
  return (
    // <body style={update}>
    <>
      <div className="body" style={update}>
        <Navbar update={update} setUpdate={setUpdate} />
        <MainRoutes update={update} setUpdate={setUpdate} />
        <Footer />
      </div>
    </>
    // </body>
  );
};

export default App;
