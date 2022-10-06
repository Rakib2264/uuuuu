import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

class Summary extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="SummaryBanner SummarySection p-0">
                    <div className="SummaryBannerOverlay">


                        <Container className="text-center">

                            <Row>

                                <Col lg={8} md={6} sm={12}>

                                    <Row className="countSection">

                                        <Col>
                                            <h1 className="countNumber">100</h1>
                                            <h4 className="countTitle">TOTAL PROJECTS</h4>
                                            <hr className="bg-white"/>

                                        </Col>

                                        <Col>
                                            <h1 className="countNumber">100</h1>
                                            <h4 className="countTitle">TOTAL PROJECTS</h4>
                                            <hr className="bg-white"/>

                                        </Col>

                                    </Row>

                                </Col>



                                <Col lg={4} md={12} sm={12} >
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How i Work</Card.Title>
                                            <Card.Text>
                                                   <p className="cardSubTitle justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirment Gathering</p>
                                                   <p className="cardSubTitle justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                                                   <p className="cardSubTitle justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coading Teasting</p>
                                                   <p className="cardSubTitle justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>

                            </Row>

                        </Container>


                    </div>

                </Container>

            </Fragment>
        );
    }
}

export default Summary;