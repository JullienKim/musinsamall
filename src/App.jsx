import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./assets/routes/PrivateRoute";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  li{
    list-style:none;
  }

  a{
    text-decoration: none;
    color:inherit;
  }
`;

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} etAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          path: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <ProductDetail authenticate={authenticate} />,
        },
      ],
    },
  ]);
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
