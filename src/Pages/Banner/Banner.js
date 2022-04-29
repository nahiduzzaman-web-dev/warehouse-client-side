import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerPic from '../../images/banner/banner-min.jpg';
import bannerPicTwo from '../../images/banner/banner-2-min.jpg';
import bannerPicThree from '../../images/banner/banner-3-min.jpg';
import bannerPicFour from '../../images/banner/banner-4-min.jpg';

const Banner = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className='col-md-6 col-12'>
                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={bannerPic}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={bannerPicTwo}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={bannerPicThree}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={bannerPicFour}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>

                <div className="col-md-6 col-12">
                    <div>
                        <div>
                            <h2>REQUEST A QUICK QUOTE</h2>
                            <p>
                                We love to here and ready to stoke lot off Medicine.
                                This is Clason Warehouse. So You should quick qoute to enter.

                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;