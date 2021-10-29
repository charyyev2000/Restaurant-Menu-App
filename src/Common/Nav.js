import { css } from "@emotion/css";
import React from "react";
import { Link } from "react-router-dom";

const NavStyles = css`
  margin-bottom: 15px;

  a {
    color: #fff;
    padding: 6px 12px;
    text-decoration: none;
  }
`;

const Nav = () => (
  <nav className={NavStyles}>
    <Link to="/">Products</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Nav;
