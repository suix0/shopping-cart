import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Header = ({ checkout, isModalOpen, setCheckout, cartProducts }) => {
  return (
    <header
      className={`${isModalOpen && "pointer-events-none"} ${
        checkout && "pointer-events-none blur-[1px]"
      } bg-primary-clr flex flex-col py-4 gap-4`}
    >
      <div className="flex justify-between mx-72">
        <p className="text-3xl text-white">Fake Store</p>
        <div className="relative">
          <img
            src="../src/assets/cart.svg"
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
      <Navigation></Navigation>
    </header>
  );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool,
  setCheckout: PropTypes.func,
  checkout: PropTypes.bool,
  cartProducts: PropTypes.array,
};

export default Header;
