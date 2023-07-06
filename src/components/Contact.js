import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Contact = () => {
    return(
        <section id="contact" className="contact">
            <Container fluid={true} className="container-fluid">  
                <Row className="row my-4">
                    <h6 className="text-center text-primary fw-bold m-2">Practice Advice</h6>
                    <h2 className="title text-center h1 fw-bold m-2">Featured Products</h2>
                    <p className="text-center text-secondary m-2">Problems trying to resolve the conflick between<br/>
                    the two major real ms of classical physics:
                     Newtonian mechanics</p>
                </Row>
                <Row className="row">
                   <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email" className="email"  />
                            <Button variant="primary" type="submit" className="submit">
                            Subscribe
                            </Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </section>
    )
}




