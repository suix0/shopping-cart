import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect } from "vitest";
import CheckoutModal from "../layouts/modal/CheckoutModal";
import ProductCard from "../components/product/ProductCard";

vi.mock("../components/product/ProductCard", () => {
  return {
    default: ({ product, clickHandler, id }) => (
      <div onClick={clickHandler} data-testid={id}>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.rating.count}</p>
        <p>{product.rating.rate}</p>
      </div>
    ),
  };
});

vi.mock("../layouts/modal/CheckoutModal", () => {
  return {
    default: ({ product, isVisible }) => {
      if (isVisible) {
        return (
          <div>
            <p>Mocking modal success</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.rating.count}</p>
            <p>{product.rating.rate}</p>
          </div>
        );
      }
      return null;
    },
  };
});

const product = {
  id: 2,
  title: "Mock Product",
  description: "for testing purposes only",
  price: 15.99,
  category: "men's category",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  rating: {
    count: 500,
    rate: 4.7,
  },
};

const handleClick = vi.fn();

// Test a product card to see if clicking it will
// Open a modal that will show its details
describe("product modal information test", () => {
  it("renders mocked product with a mock of the product card", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("Mock Product")).toBeInTheDocument();
    expect(screen.getByText("for testing purposes only")).toBeInTheDocument();
  });

  it("should display product based on id of the product clicked ", async () => {
    const user = userEvent.setup();

    render(
      <>
        <ProductCard product={product} onClick={handleClick} id={product.id} />
        <CheckoutModal product={product} isVisible={false}></CheckoutModal>
      </>
    );

    const productCard = screen.getByTestId("2");
    await user.click(productCard);

    render(<CheckoutModal product={product} isVisible={true} />);

    expect(screen.getByText("Mocking modal success")).toBeInTheDocument();
    screen
      .getAllByText("Mock Product")
      .forEach((text) => expect(text).toBeInTheDocument());
    // I dont know if i did testing correctly but I did what i could t_t
  });
});
