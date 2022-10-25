import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import BrandCarousel from '../Pages/Shared/BrandCarousel/BrandCarousel';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSide from '../Pages/Shared/RightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSide></RightSide>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Main;