import { render } from "@testing-library/react";
import PaginationControls from "../PaginationControls";
import { products } from "./testData";

describe("Product List", () => {
   const results = {
      totalPages: 2,
   };

   it("should render a list of products", () => {
      const { getAllByRole } = render(<PaginationControls results={results} />);

      const pageButtons = getAllByRole("page-btn");
      expect(pageButtons.length).toBe(2);
   });
});
