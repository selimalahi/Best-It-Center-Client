import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cprogramming from '../../../assets/brands/c-programmingg.jpg';
import cplus from '../../../assets/brands/c++.png';
import java from '../../../assets/brands/java.png';
import javascript from '../../../assets/brands/javascript.png';
import python from '../../../assets/brands/python.jpg';
import rlanguages from '../../../assets/brands/r-languages.jpg';
import './BrandCarousel.css';


const BrandCarousel = () => {
    return (
        <div className='carousel-container'>
            <Carousel slide={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cprogramming}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cplus}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={java}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={javascript}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={python}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={rlanguages}
                        alt="Six slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;