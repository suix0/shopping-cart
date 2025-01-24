const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center mb-[10%]">
        <p className="text-4xl font-bold italic">Welcome to the Fake Store</p>{" "}
        <p className="text-3xl">
          Although the store is fake, we hope you have a good time browsing our
          products.
        </p>
        <p className="self-center text-3xl mt-10">Shop now</p>
      </div>
      <img
        src="/shopping.jpg"
        alt="Girl shopping stock image"
        className="max-w-[750px] rounded-3xl"
        loading="eager"
      />
    </>
  );
};

export default Home;
