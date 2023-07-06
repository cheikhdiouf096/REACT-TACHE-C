import { Container, Row, Col } from "react-bootstrap"
import bussiness1 from "../assets/img/bussiness1.jpg"
import stat1 from "../assets/img/stat1.jpg"
import stat2 from "../assets/img/stat2.jpg"


export const Products = () => {
    return(
        <section id="products" className="products">
            <Container fluid={true} className="container-fluid">
            <Row>
                <Col sm={12} md={12} lg={6} className="">
                    <h2 className="title text-start h1 fw-bold m-5">Package that are <br/> aprodable</h2>
                    <p className="text-start text-secondary m-5">Problems trying to resolve the conflick between<br/>
                    the two major real ms of classical physics:
                     Newtonian mechanics</p>
                    <p className="text-start m-5"><a href="#" className="link-primary fw-bold">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg></a></p>
                </Col>
                <Col sm={12} md={12} lg={6} >
                    <Row>
                        <Col sm={12} lg={4}><img src={stat1} className="stat1" width={150} height={150}/></Col>
                    </Row>
                    <Row>
                    <Col sm={12} lg={12} ><img src={bussiness1} className="" /></Col>
                    </Row>
                    <Row >
                    <Col sm={12} lg={9} ><img src={stat2} className="stat2 w-100 h-50" /></Col>
                    </Row>
                </Col>
                
            </Row>
            </Container>
        </section>
    )
}