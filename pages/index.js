import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
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

export default function Home() {
   const [results, setResults] = useState(initialSearchState);
   const [isLoading, setIsLoading] = useState(false);

   return (
      <Container fluid>
         <SearchBox sendResults={setResults} setIsLoading={setIsLoading} />
         <Row style={{ marginTop: "3em", padding: "1em" }}>Resultados:</Row>
         <Spinner
            style={{
               position: "fixed",
               left: "50%",
               top: "50%",
               zIndex: 9999,
               display: isLoading ? "initial" : "none",
            }}
            animation="border"
            variant="primary"
         />
         <ProductList products={results.products} />
         <PaginationControls
            results={results}
            sendResults={setResults}
            setIsLoading={setIsLoading}
         />
      </Container>
   );
}
