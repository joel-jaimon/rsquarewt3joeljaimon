import React from "react";

const public_url = process.env.PUBLIC_URL;

function Nav() {
  return (
    <div className="nav col-12">
      <img
        className="nav__logo m-2 mb-5"
        src={public_url + "/Resources/icons/nock-nock-logo-wht@2x.png"}
      />
    </div>
  );
}

export default Nav;
