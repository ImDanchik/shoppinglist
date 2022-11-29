import { Card, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const ShopItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const changeShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card className="text-center" style={{display: `flex`,alignItems:`center`, justifyContent:`center`}}>
        <Card.Img style={{ height: "60%" }} variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>₪ {props.price}</Card.Text>
          <Button onClick={changeShowModal} variant="primary">
            Description
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal}>
        <center>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{props.text}</Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-light"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </button>
        </Modal.Footer>
        </center>
      </Modal>
    </>
  );
};

export default ShopItem;
