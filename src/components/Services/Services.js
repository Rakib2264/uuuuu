import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../asset/image/Web.svg'
import graphicLogo from  '../../asset/image/Graphic.svg'
import mobileLogo from  '../../asset/image/mobile.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>

                        <Col lg={4} md={6} sm={12}>
                           <div className="serviceCard text-center">
                               <img src={webLogo}/>
                               <h2 className="serviceName">Web Development</h2>
                               <p className="serviceDescription">I design and devlop static and dynamic web site as per your requirements as we belive,"Web is Woorld's next Home"</p>

                           </div>

                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo} />
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">I design and devlop static and dynamic web site as per your requirements as we belive,"Web is Woorld's next Home"</p>

                            </div>


                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo} />
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">I design and devlop static and dynamic web site as per your requirements as we belive,"Web is Woorld's next Home"</p>

                            </div>


                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Services;