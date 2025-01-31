import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Header = ({
  checkout,
  isModalOpen,
  setCheckout,
  cartProducts,
  windowDimensions,
}) => {
  return (
    <>
      {windowDimensions.width <= 1300 ? (
        <header
          className={`${isModalOpen && "pointer-events-none"} ${
            checkout && "pointer-events-none blur-[1px]"
          } bg-primary-clr flex justify-evenly py-4 gap-4`}
        >
          <Navigation windowDimensions={windowDimensions}></Navigation>
          <Link to="/" className="text-3xl text-white cursor-pointer">
            Fake Store
          </Link>
          <div className="flex justify-evenly">
            <div className="relative">
              <img
                src="/assets/cart.svg"
                alt="Cart button for opening checkout cart"
                className="w-8 cursor-pointer"
                onClick={setCheckout}
                role="button"
              />
              <p
                className="text-primary-clr absolute bottom-0 right-0 bg-white rounded-full px-1 text-sm cursor-pointer"
                onClick={setCheckout}
                role="button"
              >
                {cartProducts.length}
              </p>
            </div>
          </div>
        </header>
      ) : (
        <header
          className={`${isModalOpen && "pointer-events-none"} ${
            checkout && "pointer-events-none blur-[1px]"
          } bg-primary-clr flex flex-col py-4 gap-4`}
        >
          <div className="flex justify-between mx-72">
            <Link to="/" className="text-3xl text-white cursor-pointer">
              Fake Store
            </Link>
            <div className="relative">
              <img
                src="/assets/cart.svg"
                alt="Cart button for opening checkout cart"
                className="w-8 cursor-pointer hover:scale-110 transition-all"
                onClick={setCheckout}
                role="button"
              />
              <p
                className="text-primary-clr absolute bottom-0 right-0 bg-white rounded-full px-1 text-sm cursor-pointer"
                onClick={setCheckout}
                role="button"
              >
                {cartProducts.length}
              </p>
            </div>
          </div>
          <Navigation windowDimensions={windowDimensions}></Navigation>
        </header>
      )}
    </>
  );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool,
  setCheckout: PropTypes.func,
  checkout: PropTypes.bool,
  cartProducts: PropTypes.array,
  windowDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default Header;
