import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export function formatPrice(price) {
   return Math.ceil(price).toLocaleString().replace(",", ".");
}

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
            {product.discount ? (
               <Card.Subtitle>
                  ${formatPrice(product.discount.price)}{" "}
                  <Badge pill variant="danger">
                     {product.discount.percentage}%
                  </Badge>
                  <br />
                  <s style={{ fontSize: "13px", opacity: 0.5 }}>
                     ${formatPrice(product.price)}
                  </s>
               </Card.Subtitle>
            ) : (
               <Card.Subtitle>${formatPrice(product.price)}</Card.Subtitle>
            )}
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
