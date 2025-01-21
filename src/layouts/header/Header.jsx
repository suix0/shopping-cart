import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-72 my-10">
        <p className="text-3xl">Fake Store</p>
        <img src="../src/assets/cart.svg" alt="Cart icon" className="w-6" />
      </div>
      <Navigation></Navigation>
    </>
  );
};

export default Header;
