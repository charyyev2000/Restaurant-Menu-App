import { css } from "@emotion/css";
import React from "react";
import { NavLink } from "react-router-dom";

const NavStyles = css`
  margin-bottom: 15px;

  a {
    color: #fff;
    padding: 6px 12px;
    text-decoration: none;

    &.active {
      color: #50fa7b;
      border: 2px solid #50fa7b;
    }
  }
`;

const Nav = () => (
  <nav className={NavStyles}>
    <NavLink to="/" activeClassName="active" end>
      Products
    </NavLink>
    <NavLink
      to="/admin"
      activeClassName="active"
      activeStyle={{
        fontStyle: "italic",
        fontWeight: 900
      }} /* inline-style of active class */
    >
      Admin
    </NavLink>
  </nav>
);

export default Nav;
