import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

// TODO Discount price

export default function ProductItem({ product }) {
   return (
      <Card
         style={{
            width: "17rem",
            margin: "1em",
            maxHeight: "30em",
         }}
      >
         <Card.Img variant="top" src={`http://${product.image}`} />
         <Card.Body>
            <Card.Title>
               <strong>{product.brand}</strong> {product.description}
            </Card.Title>
            <Card.Subtitle>${product.price}</Card.Subtitle>
            <Card.Text>
               <Badge variant="secondary">despacho</Badge>{" "}
               <Badge variant="secondary">retiro</Badge>
            </Card.Text>
         </Card.Body>
         <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="primary">Agregar</Button>
         </Card.Footer>
      </Card>
   );
}
