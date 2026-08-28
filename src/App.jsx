import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import CategoryProducts from "./Pages/CategoryProducts";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products Parent Route */}
        <Route path="/products" element={<Products />}>
          {/* Nested Route */}
          <Route
            path="category/:category"
            element={<CategoryProducts />}
          />
        </Route>

        {/* Dynamic Product Route */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        {/* Other Pages */}
        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;