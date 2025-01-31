import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between items-center relative mx-72 my-auto gap-10">
      <div className="flex flex-col gap-4 justify-center">
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
        className="2xl:max-w-[650px] lg:max-w-[450px] 2xl:h-[500px] lg:h-max object-cover rounded-3xl "
        loading="eager"
      />
    </div>
  );
};

export default Home;
