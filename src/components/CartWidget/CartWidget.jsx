import carrito from "../../Img/carrito.svg";
import React from "react";
import "../../App.css";

const CardWidget = () => {
    const products = [];

    return (
        <div className="cartWidgetDisplay">
            <img src={carrito} alt="logoCarrito" width="30px" height="30px" />
            {products.length !== 0 && (<p>{products.length}</p>)}
        </div>
    );
};

export default CardWidget;