import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { Contact } from "lucide-react";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<Orders />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
