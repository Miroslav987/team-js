import React from "react";
import "./Popular.css";

const Popular = () => {
  return (
    <>
      <div className="popular">
        <div className="popular_left">
          <div className="popular_block">
            <h2>Filters</h2>
            {/* <input
              className="popular_search"
              type="text"
              placeholder="Start to add a symbols"
            /> */}
            <select name="select">
              <option style={{ display: "none" }} value="value1">
                Category
              </option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Transportation">Transportation</option>
              <option value="Beauty">Beauty</option>
            </select>
            <select name="select">
              <option style={{ display: "none" }} value="value1">
                Rating
              </option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Transportation">Transportation</option>
              <option value="Beauty">Beauty</option>
            </select>
            <select name="select">
              <option style={{ display: "none" }} value="value1">
                Jenre
              </option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Transportation">Transportation</option>
              <option value="Beauty">Beauty</option>
            </select>
            <div className="inp_check">
              <span> Free </span>
              <input type="checkbox" id="vehicle1" name="vehicle1" />
            </div>
            <div className="inp_check">
              <span>Audio</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" />
            </div>
            <div className="popular_btn">
              <button className="btn_search">Search</button>
              <p className="btn_reset">Reset</p>
            </div>
          </div>
        </div>
        <div className="popular_right">
          <h2>Popular</h2>
          <div className="popular_list">
            <div className="card">
              <div className="card_info">
                <img
                  src="https://binaries.templates.cdn.office.net/support/templates/ru-ru/lt22301254_quantized.png"
                  alt=""
                />
                <p>Название</p>
                <button>Read now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
