import Pagination from "react-bootstrap/Pagination";
import { getProductByQuery } from "../common/api";

export const paginationHandlerFactory = ({
   results,
   sendResults,
   setIsLoading,
}) => {
   const { searchValue } = results;
   const self = {};

   self.handleListOfProducts = (err, resp) => {
      setIsLoading(false);
      if (err) {
         return console.log(err);
      }

      sendResults({ searchValue, ...resp });
   };

   self.loadPage = (page) => () => {
      if (results.currentPage !== page) {
         setIsLoading(true);
         getProductByQuery(
            { search: searchValue, page },
            self.handleListOfProducts
         );
      }
   };

   return self;
};

export const getItems = (paginationHandler) => ({
   totalPages,
   currentPage,
}) => {
   const items = [];

   for (let number = 1; number <= totalPages; number++) {
      items.push(
         <Pagination.Item
            role="page-btn"
            key={number}
            active={number === currentPage}
            onClick={paginationHandler.loadPage(number)}
         >
            {number}
         </Pagination.Item>
      );
   }

   return items;
};

export default function PaginationControls(props) {
   const paginationHandler = paginationHandlerFactory(props);
   const items = getItems(paginationHandler)(props.results);

   return props.results.totalPages < 2 ? null : (
      <div
         style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
         }}
      >
         <Pagination style={{ display: "inline-flex" }}>{items}</Pagination>
      </div>
   );
}
