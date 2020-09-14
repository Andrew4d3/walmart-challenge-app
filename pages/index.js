import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import ProductList from "../components/ProductList";
import PaginationControls from "../components/PaginationControls";

const initialSearchState = {
   searchValue: "",
   totalPages: 0,
   totalResults: 0,
   currentPage: 0,
   products: [],
};

export const componentHandlerFactory = (setResults) => {
   const self = {};

   self.sendResults = (results) => {
      setResults(results);
   };

   return self;
};

export default function Home() {
   const [results, setResults] = useState(initialSearchState);
   const componentHandler = componentHandlerFactory(setResults);

   return (
      <Container fluid>
         <SearchBox sendResults={componentHandler.sendResults} />
         <Row style={{ marginTop: "3em", padding: "1em" }}>Resultados:</Row>
         <ProductList products={results.products} />
         <PaginationControls
            results={results}
            sendResults={componentHandler.sendResults}
         />
      </Container>
   );
}
