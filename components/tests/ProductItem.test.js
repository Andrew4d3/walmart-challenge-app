import { render } from "@testing-library/react";
import ProductItem from "../ProductItem";
import { discountProduct, product } from "./testData";

describe("ProductItem", () => {
   it("should render a product with discount correctly", () => {
      const { getByText } = render(<ProductItem product={discountProduct} />);
      getByText("My brand");
      getByText("My Description");
      getByText("$498.724");
   });

   it("should render a product with discount correctly", () => {
      const { getByText } = render(<ProductItem product={discountProduct} />);
      getByText("My brand");
      getByText("My Description");
      getByText("$498.724");
      getByText("$249.362");
      getByText("50%");
   });
});
