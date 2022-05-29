import Header from "../components/Header";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class PageHome extends Component {
  state = { activeItem: "Home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Menu tabular>
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Features"
            active={activeItem === "Features"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact Us"
            active={activeItem === "Contact Us"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Header />
      </>
    );
  }
}
