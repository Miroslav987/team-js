import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="foot_block">
          <div className="foot_right">
            <NavLink to="/home">
              <h3>Logo</h3>
            </NavLink>
          </div>
          <div className="foot_center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            autem dolores? Corrupti facilis magni dignissimos, maiores hic est
            quasi numquam illum at nesciunt. Architecto, numquam. Aperiam culpa
          </div>
          <div className="foot_center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            autem dolores? Corrupti facilis magni dignissimos, maiores hic est
            quasi numquam illum at nesciunt. Architecto, numquam. Aperiam culpa
          </div>

          <div className="foot_left">
            <div className="foot_icon">
              <img
                src="https://img.icons8.com/ios/500/facebook-new.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/ios/500/facebook-new.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/ios/500/facebook-new.png"
                alt=""
              />
            </div>
            <div className="foot_btn">
              <button>app store</button>
              <button>app store</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
