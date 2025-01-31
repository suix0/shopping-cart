import PropTypes from "prop-types";

const ProductCard = ({ product, clickHandler, id, isModalOpen }) => {
  return (
    <div
      className={`flex flex-col items-center text-sm border border-black border-solid p-4 cursor-pointer rounded-3xl ${
        isModalOpen && "pointer-events-none"
      }`}
      onClick={clickHandler}
      id={id}
    >
      <img
        src={product.image}
        // better cropped as long as quality is maintained
        className="w-full h-60 object-cover"
        onClick={clickHandler}
        id={id}
      ></img>
      <p
        onClick={clickHandler}
        id={id}
        className="self-start text-lg font-medium"
      >
        {product.title}
      </p>
      <div
        className="flex flex-col justify-center w-full mt-auto"
        onClick={clickHandler}
        id={id}
      >
        <div className="flex items-center" onClick={clickHandler} id={id}>
          <img
            src="/assets/rating.svg"
            alt="Star symbol representing rating"
            className="w-8"
            onClick={clickHandler}
            id={id}
          />
          <p onClick={clickHandler} id={id} className="text-lg font-light">
            {product.rating.rate}
          </p>
        </div>
        <p onClick={clickHandler} id={id} className="text-lg">
          {product.rating.count} reviews
        </p>
        <p onClick={clickHandler} id={id} className="text-lg">
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
