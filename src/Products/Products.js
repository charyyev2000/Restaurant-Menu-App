import React from "react";
import { css } from "@emotion/css";
import { Outlet } from "react-router";

const ProductsStyles = css`
  display: flex;
  flex-direction: column;

  .logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

const Products = () => {
  return (
    <div className={ProductsStyles}>
      <img src="/assets/img/logo.svg" alt="restaurant-menu" className="logo" />
      <Outlet />
    </div>
  );
};

export default Products;
