import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from 'recharts';

class AnalysisJs extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Kotlin', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65}

            ]
        }

    }


    render() {

        var blue="rgba(0,115,330,0.8)";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                       <Col style={{height:'300px'}} lg={6} md={12} sm={12}>

                           <ResponsiveContainer>


                               <BarChart width={100} height={300} data={this.state.data}>
                                   <XAxis dataKey="Technology"/>
                                   <Tooltip datakey="Technology"/>
                                   <Bar dataKey="Projects" fill={blue}>

                                   </Bar>
                               </BarChart>


                           </ResponsiveContainer>


                       </Col>
                       <Col lg={6} md={12} sm={12}>
                           <p className="des">To build android apps i use java as well as kotlin mainly. React js is used for cross platform mobilke application.
                               I used MySql datbase for relational database system.To Build NoSQL application i use mongobd .
                               Firebase database system is used where it is necessery to provide realotime datra flow faclitities.
                               To build android apps i use java as well as kotlin mainly. React js is used for cross platform mobilke application.
                               I used MySql datbase for relational database system.To Build NoSQL application i use mongobd .
                               Firebase database system is used where it is necessery to provide realotime datra flow faclitities.
                               To build android apps i use java as well as kotlin mainly. React js is used for cross platform mobilke application.
                               I used MySql datbase for relational database system.To Build NoSQL application i use mongobd .
                               Firebase database system is used where it is necessery to provide realotime datra flow faclitities.
                               To build android apps i use java as well as kotlin mainly. React js is used for cross platform mobilke application.
                               I used MySql datbase for relational database system.To Build NoSQL application i use mongobd .
                               Firebase database system is used where it is necessery to provide realotime datra flow faclitities.</p>

                       </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AnalysisJs;