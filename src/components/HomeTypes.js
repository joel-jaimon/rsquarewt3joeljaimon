import React from "react";
import "./HomeTypes.css";
const public_url = process.env.PUBLIC_URL;

function HomeTypes() {
  return (
    <div className="hometype col-xl-12 col-md-12 col-sm-11">
      <div className="head mt-2 mb-3">
        <a className="ques col-12">
          What <strong>Types of Home</strong> are you looking to sell.
        </a>
      </div>
      <div className="row">
        <div className="hometype__components col-6 p-3">
          <img
            src={public_url + "./Resources/icons/Group 174@2x.png"}
            className="home__img col-12"
          />
          <button className="mt-4 btn-outline btn">Single Family</button>
        </div>
        <div className="hometype__components col-6 p-3">
          <img
            src={public_url + "./Resources/icons/Group 175@2x.png"}
            className="home__img col-12"
          />
          <button className="mt-4 btn-outline btn">Multi Family</button>
        </div>
        <div className="hometype__components col-6 p-3">
          <img
            src={public_url + "./Resources/icons/Group 176@2x.png"}
            className="home__img col-12"
          />
          <button className="mt-4 btn-outline btn">Townhouse</button>
        </div>
        <div className="hometype__components col-6 p-3">
          <img
            src={public_url + "./Resources/icons/Group 177@2x.png"}
            className="home__img col-12"
          />
          <button className="mt-4 btn-outline btn">Condominium</button>
        </div>
      </div>
      <div className="m-2 mb-3">
        <a>
          <u>
            <strong>Others</strong>
          </u>
        </a>
      </div>
    </div>
  );
}

export default HomeTypes;
