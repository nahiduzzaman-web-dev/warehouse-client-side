import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerPic from '../../images/banner/banner.jpg';
import bannerPicTwo from '../../images/banner/banner-2.jpg';
import bannerPicThree from '../../images/banner/banner-3.jpg';
import bannerPicFour from '../../images/banner/banner-4.jpg';
import bannerPicFive from '../../images/banner/banner-5.jpg';
import Register from '../Register/Register';
import './Banner.css';
import { Link } from 'react-router-dom';
import { TiLocationArrow } from 'react-icons/ti';

const Banner = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className='col-md-6 col-12'>
                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid slider-image"
                                    src={bannerPic}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid slider-image"
                                    src={bannerPicTwo}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid slider-image"
                                    src={bannerPicThree}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid slider-image"
                                    src={bannerPicFour}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid slider-image"
                                    src={bannerPicFive}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='mt-5'>
                        <p>
                            Store easily your medicine. So don't be late to QUOTE and store your Medicine. So please
                            go to right side in this page and fill that form and you will be registered easily.
                        </p>
                        <button className='be-quote'>
                            <Link to='/inventory'>Why be you Quote <TiLocationArrow className='fs-4' /></Link>
                        </button>
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className='quote-section'>
                        <div className='text-center w-75 ms-auto quote-banner'>
                            <div>
                                <h3>REQUEST A QUICK QUOTE</h3>
                                <p>
                                    We love to here and ready to stoke lot off Medicine.
                                    This is Clason Warehouse. So You should quick qoute to enter.

                                </p>
                            </div>
                            <Register></Register>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;