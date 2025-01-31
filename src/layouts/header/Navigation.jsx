import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const Navigation = ({ windowDimensions }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {windowDimensions.width <= 1300 ? (
        <>
          <div
            className={`${
              !menuOpen
                ? "pointer-events-none -translate-x-[10000px] duration-1000"
                : "pointer-events-auto -translate-x-[0px]"
            } flex flex-col gap-10 text-white fixed h-full transition-all ease-out bg-secondary-clr left-0 top-0 isolate z-50 p-4 w-[90vw]`}
          >
            <img
              onClick={() => setMenuOpen(false)}
              alt="close menu button icon"
              className="w-8"
              role="close menu button"
              src="/assets/close.svg"
            ></img>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="catalog"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to="electronics"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Electronics
            </NavLink>
            <NavLink
              to="jewelery"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Jewelry
            </NavLink>
            <NavLink
              to="menClothings"
              onClick={() => setMenuOpen(false)}
              className={`${({ isActive }) =>
                isActive ? "active" : "inactive"}`}
            >
              Men&apos;s Clothing
            </NavLink>
            <NavLink
              to="womenClothings"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Women&apos;s Clothing
            </NavLink>
          </div>
          <img
            src="/assets/menu.svg"
            className="w-8"
            alt="menu icon button"
            role="menu button"
            onClick={() => setMenuOpen(true)}
          />
        </>
      ) : (
        <div className="flex gap-10 justify-center text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="catalog"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="electronics"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Electronics
          </NavLink>
          <NavLink
            to="jewelery"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Jewelry
          </NavLink>
          <NavLink
            to="menClothings"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Men&apos;s Clothing
          </NavLink>
          <NavLink
            to="womenClothings"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Women&apos;s Clothing
          </NavLink>
        </div>
      )}
    </>
  );
};

Navigation.propTypes = {
  windowDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default Navigation;
