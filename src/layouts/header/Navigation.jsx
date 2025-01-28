import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex gap-10 justify-center text-gray-700">
      <NavLink to="/">Home</NavLink>
      <NavLink to="catalog">Catalog</NavLink>
      <NavLink to="electronics">Electronics</NavLink>
      <NavLink to="jewelery">Jewelry</NavLink>
      <NavLink to="menClothings">Men&apos;s Clothing</NavLink>
      <NavLink to="womenClothings">Women&apos;s Clothing</NavLink>
    </div>
  );
};

export default Navigation;
