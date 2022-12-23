import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  const [update, setUpdate] = useState({});

  // let bc = update.background;
  return (
    // <body style={update}>
    <>
      <div className="body" style={update}>
        <AuthContextProvider>
          <Navbar update={update} setUpdate={setUpdate} />
          <MainRoutes setUpdate={setUpdate} />
          <Footer />
        </AuthContextProvider>
      </div>
    </>
    // </body>
  );
};

export default App;
