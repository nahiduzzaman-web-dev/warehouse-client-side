import React from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import './Testimonials.css';
import teamMember from '../../images/testimonial/team.jpg';
import teamMemberTwo from '../../images/testimonial/team2.jpg';
import teamMemberThree from '../../images/testimonial/team-3.jpg';
import teamMemberFour from '../../images/testimonial/team4.jpg';
import teamMemberFive from '../../images/testimonial/team5.jpg';
import teamMemberSix from '../../images/testimonial/team6.jpg';
import teamMemberSeven from '../../images/testimonial/team7.jpg';
import { BsChatSquareQuoteFill } from 'react-icons/bs';

const Testimonials = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div class="section-heading">
                        <h3 className='text-center'>TESTIMONIALS</h3>
                        <div className='d-flex justify-content-center'>
                            <span class="animate-border border-black"></span>
                        </div>
                    </div>

                    <div className='my-5'>
                        <Carousel>
                            <Carousel.Item>
                                <CardGroup>
                                    <Card className='testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMember} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Taylor Swifts</Card.Title>
                                                    <p>Founder & CEO Squire Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                    <Card className='mx-3 testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberTwo} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Nahiduzzaman</Card.Title>
                                                    <p>Founder & CEO Akij Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                    <Card className='testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberThree} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Blue Butterfly</Card.Title>
                                                    <p>Founder & CEO Blue Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Carousel.Item>


                            <Carousel.Item>
                                <CardGroup>
                                    <Card className='testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberFour} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Jehn Sohn</Card.Title>
                                                    <p>Founder & CEO Squire Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                    <Card className='mx-3 testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberFive} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Krittis Ray</Card.Title>
                                                    <p>Founder & CEO Akij Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                    <Card className='testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberSix} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Blue Butterfly</Card.Title>
                                                    <p>Founder & CEO Blue Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Carousel.Item>


                            <Carousel.Item>
                                <CardGroup>
                                    <Card className='testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberSeven} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Red Rose</Card.Title>
                                                    <p>Founder & CEO Squire Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                    <Card className='mx-3 testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMemberFour} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Akash Nahid</Card.Title>
                                                    <p>Founder & CEO Akij Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                    <Card className='testimonial-card'>
                                        <Card.Body>
                                            <Card.Text>
                                                I’ve been happy with the services provided by Clason warehouse. Scooter Libby has been wonderful! He has returned my calls quickly, and he answered all my questions.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='footer-card'>
                                            <BsChatSquareQuoteFill className='quotefill' />
                                            <div className='d-flex justify-content-between member align-items-center'>
                                                <img src={teamMember} alt="" className='img-fluid ' />
                                                <div>
                                                    <Card.Title>Blue fly</Card.Title>
                                                    <p>Founder & CEO Blue Ltd.</p>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;