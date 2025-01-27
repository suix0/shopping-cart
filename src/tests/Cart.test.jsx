import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, afterAll } from "vitest";
import ProductCheckout from "../components/product/ProductCheckout";

// setup props
const cartProducts = {
  product: {
    id: 1,
    title: "Mock 1",
    price: 15.99,
  },
  quantity: 5,
  id: crypto.randomUUID(),
};

const setProductQuantity = vi.fn((e) => {
  if (e.target.textContent === "+") {
    cartProducts.quantity += 1;
  } else if (e.target.textContent === "-") {
    cartProducts.quantity -= 1;
  }
});

describe("product checkout", () => {
  afterAll(() => {
    cleanup();
  });

  it("renders product checkout", () => {
    const { container } = render(
      <ProductCheckout cartProducts={cartProducts} />
    );

    expect(container).toMatchSnapshot();
  });

  // Test whether total price of a product updates relative to quantity
  it("increases quantity should change total price of product accordingly", async () => {
    const user = userEvent.setup();

    const { rerender } = render(
      <ProductCheckout
        cartProducts={cartProducts}
        setProductQuantity={setProductQuantity}
      />
    );

    const increaseButton = screen.getByRole("button", { name: "+" });

    await user.click(increaseButton);

    rerender(
      <ProductCheckout
        cartProducts={cartProducts}
        setProductQuantity={setProductQuantity}
      />
    );

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("6");
    expect(screen.getByText("$95.94")).toBeInTheDocument(); // price * updated quantity
  });

  // Test whether total price of a product updates relative to quantity
  it("decreases quantity should change total price of product accordingly", async () => {
    const user = userEvent.setup();

    const { rerender } = render(
      <ProductCheckout
        cartProducts={cartProducts}
        setProductQuantity={setProductQuantity}
      />
    );

    const decreaseButton = screen.getByRole("button", { name: "-" });

    await user.click(decreaseButton);

    rerender(
      <ProductCheckout
        cartProducts={cartProducts}
        setProductQuantity={setProductQuantity}
      />
    );

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("5");
    expect(screen.getByText("$79.95")).toBeInTheDocument(); // price * updated quantity
  });
});
