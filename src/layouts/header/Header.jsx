import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Header = ({ checkout, isModalOpen, setCheckout }) => {
  return (
    <div
      className={`${isModalOpen && "pointer-events-none"} ${
        checkout && "pointer-events-none blur-[1px]"
      }`}
    >
      <div className="flex justify-between mx-72 my-10">
        <p className="text-3xl">Fake Store</p>
        <img
          src="../src/assets/cart.svg"
          alt="Cart button for opening checkout cart"
          className="w-6 cursor-pointer"
          onClick={setCheckout}
        />
      </div>
      <Navigation></Navigation>
    </div>
  );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool,
  setCheckout: PropTypes.func,
  checkout: PropTypes.bool,
};

export default Header;
