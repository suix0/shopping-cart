import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center text-sm border p-4">
      <img src={product.image} className="w-32 h-32"></img>
      <p>{product.title}</p>
      <div className="flex flex-col items-start mt-auto">
        <div className="flex items-center">
          <img
            src="../src/assets/rating.svg"
            alt="Star symbol representing rating"
            className="w-8"
          />
          <p>{product.rating.rate}</p>
        </div>
        <p>{product.rating.count} reviews</p>
        <p>${product.price}</p>
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
};

export default ProductCard;
