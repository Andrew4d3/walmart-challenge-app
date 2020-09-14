import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { getProductById, getProductByQuery } from "../common/api";

const DELAY_TIME = 1000;

export const componentHandlerFactory = ({ sendResults }) => {
   const self = {};

   self.delayHandler = (fn, delay = DELAY_TIME, timer = null) => (event) => {
      const { target } = event;
      clearTimeout(timer);
      timer = setTimeout(() => {
         fn(target);
      }, delay);
   };

   self.handleUniqueProduct = (searchValue) => (err, resp) => {
      if (err) {
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
         //self.queryBySearchTerms(searchValue);
         getProductByQuery(
            { search: searchValue },
            self.handleListOfProducts(searchValue)
         );
      }
   };

   return self;
};

export default function SearchBox(props) {
   const componentHandler = componentHandlerFactory(props);
   const delaySearch = componentHandler.delayHandler(
      componentHandler.searchHandler
   );

   return (
      <Navbar bg="primary" variant="dark" fixed="top">
         <Navbar.Brand href="#home">Lider</Navbar.Brand>
         <Form inline>
            <FormControl
               type="text"
               placeholder="Buscar"
               className="mr-sm-2"
               onChange={delaySearch}
            />
         </Form>
      </Navbar>
   );
}
