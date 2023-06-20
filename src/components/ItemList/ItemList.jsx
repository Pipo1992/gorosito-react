import React, { useState, useEffect } from 'react'

const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setListaProductos(data)
                console.log(data); // Do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <>
            {listaProductos && listaProductos.map((producto, i) => {
                <div key={i}>
                    <div>Card del producto</div>
                    <div>{producto.title}</div>
                    <div>{producto.price}</div>
                </div>
            })}
        </>
    )
}

export default ItemList