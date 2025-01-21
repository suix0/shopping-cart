import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Main = ({ products }) => {
  return (
    <div className="mx-72 my-20 flex gap-10">
      <Outlet context={products}></Outlet>
    </div>
  );
};

Main.propTypes = {
  products: PropTypes.array,
};

export default Main;
