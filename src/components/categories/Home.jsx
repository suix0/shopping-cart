import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { windowDimensions } = useOutletContext();

  return (
    <>
      {windowDimensions.width <= 1300 ? (
        <div className="flex flex-col items-center relative lg:mx-72 my-auto gap-10">
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src="/shopping.jpg"
              alt="Girl shopping stock image"
              className="2xl:max-w-[650px] max-w-[550px] 2xl:h-[500px] md:w-[550px] xs:w-[320px] lg:h-max object-cover rounded-3xl"
              loading="eager"
            />
            <p className="text-3xl font-bold italic">
              Welcome to the Fake Store
            </p>{" "}
            <p className="text-2xl text-center">
              Although the store is fake, we hope you have a good time browsing
              the products.
            </p>
            <NavLink
              className="self-center text-2xl underline italic"
              to="/catalog"
            >
              Shop now
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center relative mx-72 my-auto gap-10">
          <div className="flex flex-col gap-4 justify-center">
            <p className="text-3xl font-bold italic">
              Welcome to the Fake Store
            </p>{" "}
            <p className="text-2xl">
              Although the store is fake, we hope you have a good time browsing
              the products.
            </p>
            <NavLink
              className="self-center text-2xl mt-10 underline italic"
              to="/catalog"
            >
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
      )}
    </>
  );
};

export default Home;
