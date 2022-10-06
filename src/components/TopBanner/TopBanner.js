import React, {Component, Fragment} from 'react';

import {Button, Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixdBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContant">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                                    <h1 className="topSubTitle">Mobile & Web Application</h1>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>

                        </Container>

                    </div>

                </Container>


            </Fragment>
        );
    }
}

export default TopBanner;