import "./App.css";
import "./components/Navbar/Navbar";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import ItemDetail from "./components/ItemList/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/category/:name" element={<ItemList />} />
        <Route path="/product/:id" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
