import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex gap-10 justify-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="catalog">Catalog</NavLink>
      <a>Electronics</a>
      <a>Jewelry</a>
      <a>Men&apos;s Clothing</a>
      <a>Women&apos;s Clothing</a>
    </div>
  );
};

export default Navigation;
