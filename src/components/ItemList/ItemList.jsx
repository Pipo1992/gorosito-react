import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import "./Card.css";

const ItemList = () => {
  const { name } = useParams();

  const [listaProductos, setListaProductos] = useState([]);
  useEffect(() => {
    const urlToFetch = name
      ? `https://fakestoreapi.com/products/category/${name}`
      : "https://fakestoreapi.com/products"
    const allProducts = async () => {
      try {
        const response = await fetch(urlToFetch);
        const data = await response.json();
        setListaProductos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    allProducts()
  }, [name]);

  return (
    <div className="item-list-container">
      {listaProductos &&
        listaProductos.map((producto, i) => (
          <Item key={i} producto={producto} />
        ))}
    </div>
  );
};

export default ItemList;
