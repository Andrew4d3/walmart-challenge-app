import { render } from "@testing-library/react";
import ProductList from "../ProductList";
import { products } from "./testData";

describe("Product List", () => {
   it("should render a list of products", () => {
      const { getAllByRole } = render(<ProductList products={products} />);

      const productItems = getAllByRole("product");
      expect(productItems.length).toBe(2);
   });
});
