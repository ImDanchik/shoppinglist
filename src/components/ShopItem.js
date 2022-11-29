import { Button, Card } from "react-bootstrap";

const ShopItem = (props) => {
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={props.image} />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.text}</Card.Text>
    //     <Button variant="primary">Description</Button>
    //   </Card.Body>
    // </Card>

    <Card>
      <Card.Img style={{ width: "18rem" }} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
