import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import whiteLogo from '../../asset/image/logo gray.PNG'
import BlueLogo from '../../asset/image/red.PNG'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
        }
    }

    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo:[BlueLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})

        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle' , navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})

        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}> <img src={this.state.navBarLogo} /> Rakib Khan</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;