import PropTypes from "prop-types";

const ProductCard = ({ product, clickHandler, id, isModalOpen }) => {
  return (
    <div
      className={`flex flex-col items-center text-sm border p-4 cursor-pointer ${
        isModalOpen && "pointer-events-none"
      }`}
      onClick={clickHandler}
      id={id}
    >
      <img
        src={product.image}
        className="w-32 h-32"
        onClick={clickHandler}
        id={id}
      ></img>
      <p onClick={clickHandler} id={id}>
        {product.title}
      </p>
      <div
        className="flex flex-col items-start mt-auto"
        onClick={clickHandler}
        id={id}
      >
        <div className="flex items-center" onClick={clickHandler} id={id}>
          <img
            src="../src/assets/rating.svg"
            alt="Star symbol representing rating"
            className="w-8"
            onClick={clickHandler}
            id={id}
          />
          <p onClick={clickHandler} id={id}>
            {product.rating.rate}
          </p>
        </div>
        <p onClick={clickHandler} id={id}>
          {product.rating.count} reviews
        </p>
        <p onClick={clickHandler} id={id}>
          ${product.price}
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number,
  }),
  clickHandler: PropTypes.func,
  id: PropTypes.number,
  isModalOpen: PropTypes.bool,
};

export default ProductCard;
