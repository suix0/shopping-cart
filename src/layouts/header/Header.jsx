import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Header = ({ checkout, isModalOpen, setCheckout }) => {
  return (
    <header
      className={`${isModalOpen && "pointer-events-none"} ${
        checkout && "pointer-events-none blur-[1px]"
      } bg-primary-clr flex flex-col py-4 gap-4`}
    >
      <div className="flex justify-between mx-72">
        <p className="text-3xl text-white">Fake Store</p>
        <img
          src="../src/assets/cart.svg"
          alt="Cart button for opening checkout cart"
          className="w-6 cursor-pointer"
          onClick={setCheckout}
          role="button"
        />
      </div>
      <Navigation></Navigation>
    </header>
  );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool,
  setCheckout: PropTypes.func,
  checkout: PropTypes.bool,
};

export default Header;
