import { css } from "@emotion/css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductEdit from "../Products/ProductEdit";
import ProductsIndex from "../Products/ProductsIndex";

const AdminStyles = css`
  .Admin {
    &-Header {
      display: flex;
      align-items: center;
    }
    &-New {
      text-decoration: none;
      border: 2px solid #fff;
      color: #fff;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
      text-transform: uppercase;
      margin-left: auto;
    }
  }
`;

const Admin = () => (
  <div className={AdminStyles}>
    <div className="Admin-Header">
      <h1>Admin</h1>
      <Link className="Admin-New" to="new">
        New
      </Link>
    </div>
    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path="/new" element={<ProductEdit />} />
    </Routes>
  </div>
);

export default Admin;
