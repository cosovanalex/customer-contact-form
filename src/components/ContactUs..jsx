import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { paragraphs } from "./CompanyDescription";
import FormComponent from './FormComponent';
import ThankYouModal from './ThankYouModal';


export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [acceptsMarketingEmails, setAcceptsMarketingEmails] = useState(true);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setAcceptsMarketingEmails(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send off the data to an API.
        // For the sake of this example, we'll just show the Thank You modal.
        setShowThankYouModal(true);
    };

    const handleClose = () => {
        setShowThankYouModal(false);
        resetForm();
    };

    return (
        <Container className="container">
            <Row className="mb-2 mt-3">
                <Col lg="8">
                    <h1 className="title display-4 mb-1">
                        Lily and Fox
                    </h1>
                </Col>
            </Row>

            <Row className="sec_sp">
                <Col lg = "5" className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address className="address">
                        <strong>Email : help@lilyandfox.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone : +1 800 298 8058</strong>
                        </p>
                    </address>
                    <p>
                        <div className="company-description">
                            {paragraphs}
                        </div>
                    </p>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                    <FormComponent 
                        name={name} 
                        setName={setName} 
                        email={email} 
                        setEmail={setEmail} 
                        message={message} 
                        setMessage={setMessage} 
                        acceptsMarketingEmails={acceptsMarketingEmails} 
                        setAcceptsMarketingEmails={setAcceptsMarketingEmails} 
                        handleSubmit={handleSubmit} 
                    />
                </Col>
            </Row>
            <ThankYouModal 
                showThankYouModal={showThankYouModal} 
                handleClose={handleClose} 
                name={name}
            />
        </Container>
    );
}
