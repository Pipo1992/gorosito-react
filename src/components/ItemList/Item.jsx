import PropTypes from "prop-types";

const Item = ({ producto }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={producto.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a
          href={`http://localhost:5173/product/${producto.id}`}
          className="btn btn-primary"
        >
          Detalle del producto
        </a>
      </div>
    </div>
  );
};

Item.propTypes = {
  producto: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default Item;
