import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { getProductById, getProductByQuery } from "../common/api";
import React from "react";

const DELAY_TIME = 1000;

export const componentHandlerFactory = ({ sendResults, setIsLoading }) => {
   const self = {};

   self.delayHandler = (fn, delay = DELAY_TIME, timer = null) => (event) => {
      const { target } = event;
      setIsLoading(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
         fn(target);
      }, delay);
   };

   self.handleUniqueProduct = (searchValue) => (err, resp) => {
      setIsLoading(false);
      if (err && err.status == 404) {
         sendResults({
            searchValue,
            totalPages: 0,
            totalResults: 0,
            currentPage: 0,
            products: [],
         });
         return console.log(err);
      } else if (err) {
         return console.log(err);
      }

      sendResults({
         searchValue,
         totalPages: 1,
         totalResults: 1,
         currentPage: 1,
         products: [resp],
      });
   };

   self.handleListOfProducts = (searchValue) => (err, resp) => {
      setIsLoading(false);
      if (err) {
         return console.log(err);
      }

      sendResults({ searchValue, ...resp });
   };

   self.searchHandler = (target) => {
      const { value: searchValue } = target;

      if (/^\d+$/.test(searchValue)) {
         // If it's a number
         getProductById(searchValue, self.handleUniqueProduct(searchValue));
      } else if (searchValue.length >= 3) {
         // Any string
         getProductByQuery(
            { search: searchValue },
            self.handleListOfProducts(searchValue)
         );
      } else {
         setIsLoading(false);
      }
   };

   return self;
};

export default React.memo(function SearchBox(props) {
   const componentHandler = componentHandlerFactory(props);

   const delaySearch = componentHandler.delayHandler(
      componentHandler.searchHandler
   );

   return (
      <Navbar bg="primary" variant="dark" fixed="top">
         <Navbar.Brand href="#home">Lider</Navbar.Brand>
         <Form inline onSubmit={(e) => e.preventDefault()}>
            <FormControl
               type="text"
               placeholder="Buscar"
               className="mr-sm-2"
               onChange={delaySearch}
            />
         </Form>
      </Navbar>
   );
});
