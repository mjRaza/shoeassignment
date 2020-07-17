import React from "react";
import "./App.css";
import Home from "./components/Home";
import { About } from "./components/About";
import { ProductDetails } from "./components/ProductDetails";
import { Products } from "./components/Products";
import Men from "./components/Men";
import Women from "./components/Women";
import NavBar from "./components/NavBar";
import { ProductsIndex } from "./components/ProductsIndex";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsIndex />}>
          <Route path="/" element={<Products />} />

          <Route path="/men" element={<Men />} />

          <Route path="/women" element={<Women />} />
        </Route>
        <Route path="products/men/:id/*" element={<ProductDetails />} />
        <Route path="products/women/:id/*" element={<ProductDetails />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
