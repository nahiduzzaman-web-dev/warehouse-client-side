import React from 'react';
import { Card } from 'react-bootstrap';
import ibnaSina from '../../images/company/ibn-sina.jpg';
import square from '../../images/company/square-pharma.jpg';
import aci from '../../images/company/aci-limited.jpg';
import acme from '../../images/company/acme.jpg';
import popular from '../../images/company/popular.jpg';
import jayson from '../../images/company/jayson.jpg';
import skf from '../../images/company/skf.png';
import beximco from '../../images/company/beximco.png';
import './Company.css';

const Company = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div class="section-heading">
                        <h3 className='text-center'>TOUCH IN PHARMA COMPANY</h3>
                        <div className='d-flex justify-content-center'>
                            <span class="animate-border border-black"></span>
                        </div>
                    </div>

                    <div className='company-list my-5'>
                        <div className="company-name">
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={ibnaSina} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>

                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={square} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={aci} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={acme} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={popular} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={jayson} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={skf} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-dark text-white card-design">
                                    <Card.Img src={beximco} alt="Card image" className='img-fluid' />
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Company;