import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Admin from "./Admin/Admin";
import Products from "./Products/Products";
import { css } from "@emotion/css";
import Nav from "./Common/Nav";
import ProtectedRoute from "./Common/ProtectedRoute";

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
  const [authenticated] = useState(true);
  return (
    <div className={AppStyles}>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/*" element={<Products />} />
            <ProtectedRoute
              authenticated={authenticated}
              path="/admin*"
              element={<Admin />}
              redirectTo="/"
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
