import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useAuth } from "../../hooks/useAuth.js";

function Navbar() {
  const { activeItem, setActiveItem } = useState("Home");
  const { signout } = useAuth();
  return (
    <Menu tabular>
      <Menu.Item
        name="Home"
        active={activeItem === "Home"}
        onClick={() => setActiveItem(this.name)}
      />
      <Menu.Item
        name="Features"
        active={activeItem === "Features"}
        onClick={() => setActiveItem(this.name)}
      />
      <Menu.Item
        name="Contact Us"
        active={activeItem === "Contact Us"}
        onClick={() => setActiveItem(this.name)}
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={signout}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
