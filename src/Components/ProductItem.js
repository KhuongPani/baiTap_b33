import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={item.image} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          {/* <Card.Text>{item.shortDescription}</Card.Text> */}
          <Card.Text><strong>Price:</strong> ${item.price}</Card.Text>
          <Button 
            variant="dark" 
            onClick={() => setStateModal(item)}
          >
            add to carts
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
