import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Admin from "./Admin/Admin";
import Products from "./Products/Products";
import Product from "./Products/Product";
import { css } from "@emotion/css";
import Nav from "./Common/Nav";
import ProductsIndex from "./Products/ProductsIndex";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;

  .container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 26px;
  }
`;

const App = () => {
  return (
    <div className={AppStyles}>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductsIndex />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
