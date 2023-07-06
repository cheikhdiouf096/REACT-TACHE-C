import { Container, Row, Col, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import emoji from '../assets/img/emoji-neutral.svg';
import check from '../assets/img/check2-all.svg';
import card from '../assets/img/credit-card.svg';



export const Banner = () => {
    return(
        <section>
        <Container id="home" className="banner">
            <Row className="row"><h3 className="text-primary">Welcome</h3></Row>
            <Row className="row pb-3"><span className="text-white display-2 fw-bold">Selling on the <br/> internet like a pro</span></Row>
            <Row className="row"><p className="text-white fs-3">We know how large objects will act, but thing on a <br/>
        small scale just do not act that way</p></Row>
            <Row className="row">
                <div><Button variant="primary" className="m-1" size="lg">GET QUOTE NOW</Button>
                <Button variant="outline-primary" className="m-1" size="lg">LEARN MORE</Button></div>
            </Row>
            <Row className="row4">
                <CardGroup className="">
                    <Col xs={12} sm={12} md={6} lg={4} >
                        <Card style={{ width: '20rem' }} className="card1 m-3 p-4">
                        <div className="div-icon b1"><img id="b1" src={emoji} alt="icon"  className="w-40 h-50 " /></div>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title text-start fw-bold">Training Courses</Card.Title>
                            <Card.Text className="card-text text-start text-secondary">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content...
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                        
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ width: '20rem' }} className="card2 m-3 p-4">
                            <div className="div-icon b2"><img id="b2" src={check} alt="icon"  className="w-40 h-50" /></div>
                            <Card.Body className="card-body">
                                <Card.Title className="card-title text-start fw-bold">Training Courses</Card.Title>
                                <Card.Text className="card-text text-start text-secondary">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content...
                                </Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                    
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ width: '20rem' }} className="card3 m-3 p-4">
                            <div className="div-icon b3"><img id="b3" src={card} alt="icon"  className="w-40 h-50"/></div>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title text-start fw-bold">Training Courses</Card.Title>
                            <Card.Text className="card-text text-start text-secondary">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content...
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </CardGroup>
            </Row>
        </Container>
        </section>
    )
}

