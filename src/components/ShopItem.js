import { Card, Button } from "react-bootstrap";

const ShopItem = (props) => {
  return (
    <Card className="text-center" style={{ display: `flex`, alignItems: `center`}}>
      <Card.Img style={{ width: "18vw" }} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
