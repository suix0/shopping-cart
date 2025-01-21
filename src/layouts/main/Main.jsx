const Main = () => {
  return (
    <div className="mx-72 my-20 flex gap-10">
      <div className="flex flex-col gap-10">
        <p className="text-4xl font-bold italic">Welcome to the Fake Store</p>{" "}
        <p className="text-2xl">
          Although the store is fake, we hope you have a good time browsing our
          products.
        </p>
        <p className="self-center text-2xl">Shop now</p>
      </div>
      <img
        src="../src/assets/shopping.jpg"
        alt="Girl shopping stock image"
        className="w-[500px] rounded-3xl"
      />
    </div>
  );
};

export default Main;
