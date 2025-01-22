import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Main = ({ products, modal, setModal }) => {
  /* disable scrolling when opening modal
  it was nice to discover that it was ok to manipulate the body
  as we only do stuffs to the #root with React
  and the body is outside of that */

  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={`mx-72 my-20 flex gap-10 flex relative ${
        modal && "overflow-y-hidden"
      }`}
    >
      <Outlet
        context={{ products: products, modal: modal, setModal: setModal }}
      ></Outlet>
    </div>
  );
};

Main.propTypes = {
  products: PropTypes.array,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};

export default Main;
