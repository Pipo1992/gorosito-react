import './App.css';
import "./components/Navbar/Navbar";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemList />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
