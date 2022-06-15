import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  CardGroup,
  Button,
  Image,
  Modal,
} from "react-bootstrap";

const Cardshow = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const items = item;
  useEffect(() => {}, [items]);
  return (
    <div>
      <div className="my-5">
      <h1 className="heading">My Cards</h1>
      </div>
      <CardGroup>
        {item?.map((x, index) => {
          return (
            <div key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                   <div className="menu1">
                    
                   <Card style={{ width: "20rem" ,marginLeft:"100%" }} className="d-flex"  >
                      <Card.Img variant="top" src={x.imageUrl} />
                      <Card.Body>
                        <Card.Title>{x.owner}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>
                          Go somewhere
                        </Button>
                      </Card.Body>
                    </Card>
                    
                   </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cardshow;
