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

            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;