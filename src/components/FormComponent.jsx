import React from "react";
import { Row, Col } from 'react-bootstrap';
import { MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';


function FormComponent({name, setName, email, setEmail, message, setMessage, acceptsMarketingEmails, setAcceptsMarketingEmails, handleSubmit}) {
    return (
        <form className="contact__form w-100" onSubmit={handleSubmit}>
            <Row>
                <Col lg="6" className="form-group">
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Col>
                <Col lg="6" className="form-group">
                    <input
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Col>
            </Row>
            <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <br />
            <MDBCheckbox 
                name='flexCheck'
                value=''
                id='flexCheckChecked'
                label='Check to receive promotional emails'
                checked={acceptsMarketingEmails}
                onChange={() => setAcceptsMarketingEmails(!acceptsMarketingEmails)}
            />
            <br />
            <br />
            <Row>
                <Col lg="12" className="form-group">
                    <MDBBtn 
                        isPrimary={true} 
                        className="btn ac_btn" 
                        type="submit" 
                        color='dark' 
                        rippleColor='light' 
                        outline
                        >Submit
                    </MDBBtn>
                </Col>
            </Row>
        </form>
    );
}

export default FormComponent;
