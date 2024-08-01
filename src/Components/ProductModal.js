import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} className="img-fluid mb-3" alt={product.name} />
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Short Description:</strong> {product.shortDescription}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
