import React from "react";
import { Modal, Button } from 'react-bootstrap';


function ThankYouModal({ showThankYouModal, handleClose, name }) {
    return (
        <Modal show={showThankYouModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thank you!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank you for your submission, {name}!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ThankYouModal;
