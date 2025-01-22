import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Main = ({ products, modal, setModal }) => {
  return (
    <div className={`mx-72 my-20 flex gap-10 flex relative`}>
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
