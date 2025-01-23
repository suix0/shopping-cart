import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Header = ({ isModalOpen }) => {
  return (
    <div className={`${isModalOpen && "pointer-events-none"}`}>
      <div className="flex justify-between mx-72 my-10">
        <p className="text-3xl">Fake Store</p>
        <img src="../src/assets/cart.svg" alt="Cart icon" className="w-6" />
      </div>
      <Navigation></Navigation>
    </div>
  );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool,
};

export default Header;
