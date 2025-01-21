import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} className="w-20"></img>
      <p>{product.title}</p>
      <div>
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
