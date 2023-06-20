import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Counter from './Counter'

const ItemDetail = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const urlToFetch = `https://fakestoreapi.com/products/${id}`
    const fetchProduct = async () => {
      try {
        const response = await fetch(urlToFetch);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProduct()
}, [id]);

  return (
    <>
    {product &&  <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <p className="card-text">
          {product.price}
        </p>
        <p className="card-text">
          {product.category}
        </p>
      </div>
      <Counter initialValue={2}/>
      <Counter stock={10}/>
    </div>}
    </>
  )
}

export default ItemDetail