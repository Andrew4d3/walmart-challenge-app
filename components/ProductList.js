import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
   return (
      <Row
         style={{
            display: "inline-flex",
            flexWrap: "wrap",
            paddingBottom: "5rem",
         }}
      >
         {products.map((product) => (
            <ProductItem key={product.id} product={product} />
         ))}
      </Row>
   );
}
