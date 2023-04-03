import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mqkoldaq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <h1 className="text-center">Get In Touch</h1>
      <Container fluid="md">
    <form onSubmit={handleSubmit}>

      
          <Row >
            <Col md={{ span: 3, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="username" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  required
                />
                
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" name="Company Name" placeholder="Company Name" required />
              </Form.Group>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Group className="mb-3 " style={{ height: "50%" }}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  style={{ height: "100%" }}
                  required
                />
                <button variant="success" className="m-2 " type="submit" disabled={state.submitting} style={{backgroundColor: "#C2FBD7",
borderRadius: "10px",

boxShadow: "rgba(25, 25, 25, 0.04)",
color: "#008000",
cursor: "pointer",
display: "inline-block",
fontFamily: "Arial",
fontSize: "1em",
height: "35px",
padding: "0 25px",
transition: "all 200ms"




}}>
        Submit
      </button>
              </Form.Group>
            </Col>
          </Row>
        
      
    </form>
    </Container>
    </div>
  );
}

const ContactForm1 = () => {
  const [state, handleSubmit] = useForm("mqkoldaq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <h1 className="text-center">Get In Touch</h1>
      <Container fluid="md">
        <form  onSubmit={handleSubmit}>

        <Form id="my-form" >
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="username" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@example.com"
                  required
                />
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Company Name" required />
              </Form.Group>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Group className="mb-3 " style={{ height: "50%" }}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100%" }}
                  required
                />
                 <Button type="submit" className="float-end m-2" variant="secondary" size="md" active >
        Submit
      </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        </form>

      </Container>
    </div>
  );
};

export default ContactForm;
