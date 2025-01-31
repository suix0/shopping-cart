import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between items-center relative mx-72 my-auto gap-10">
      <div className="flex flex-col gap-10 justify-center">
        <p className="text-3xl font-bold italic">Welcome to the Fake Store</p>{" "}
        <p className="text-2xl">
          Although the store is fake, we hope you have a good time browsing the
          products.
        </p>
        <NavLink className="self-center text-2xl mt-10" to="/catalog">
          Shop now
        </NavLink>
      </div>
      <img
        src="/shopping.jpg"
        alt="Girl shopping stock image"
        className="max-w-[650px] h-[500px] rounded-3xl"
        loading="eager"
      />
    </div>
  );
};

export default Home;
