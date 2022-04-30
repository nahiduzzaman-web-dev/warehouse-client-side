import React from 'react';
import './Footer.css';
import { FaLocationArrow } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="heading-footer footer-headline-clr pt2">Find us</h5>


                        <p className="find-details-mb">
                            We love to here and ready to stoke lot off Medicine. This is Clason Warehouse. So You should quick qoute to enter.
                            We love to here and ready to stoke lot off Medicine. This is Clason Warehouse. So You should quick qoute to enter.
                        </p>
                        <p>
                            <FaLocationArrow className='me-2' />
                            Rupnagor, Mirpur-2, Dhaka
                        </p>
                        <p>
                            <AiFillPhone className='me-2' />
                            +880-1303384414
                        </p>
                        <p>
                            <MdEmail className='me-2' />
                            info@clason.com
                        </p>


                    </div>


                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="heading-footer footer-headline-clr pt2">Quick links</h5>


                        <ul className="footer_ul_amrc">
                            <li>
                                <a href="http://www.squarepharma.com.bd/product-details.php?pid=202">Flexi®</a>
                            </li>
                            <li>
                                <a href="https://medex.com.bd/brands/7695/3-c-200mg">3-C Capsule</a>
                            </li>
                            <li>
                                <a href="https://medex.com.bd/brands/17301/5-fu-phares-25mg">5 FU PhaRes</a>
                            </li>
                            <li>
                                <a href="http://www.squarepharma.com.bd/product-details.php?pid=577">Alacot® DS Eye Drops</a>
                            </li>
                            <li>
                                <a href="http://www.squarepharma.com.bd/product-details.php?pid=200">Esloric®</a>
                            </li>
                            <li><a href="https://medex.com.bd/brands/4006/a-cof-10mg">A-Cof Syrup</a></li>
                        </ul>

                    </div>


                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="heading-footer footer-headline-clr pt2">Quick links</h5>

                        <ul className="footer_ul_amrc">
                            <li>
                                <a href="https://medex.com.bd/brands/4006/a-cof-10mg">A-Cof Syrup</a>
                            </li>
                            <li>
                                <a href="http://www.squarepharma.com.bd/product-details.php?pid=577">Alacot® DS Eye Drops</a>
                            </li>
                            <li>
                                <a href="http://www.squarepharma.com.bd/product-details.php?pid=202">Flexi®</a>
                            </li>
                            <li>
                                <a href="https://medex.com.bd/brands/7695/3-c-200mg">3-C Capsule</a>
                            </li>
                            <li>
                                <a href="https://medex.com.bd/brands/17301/5-fu-phares-25mg">5 FU PhaRes</a>
                            </li>
                            <li>
                                <a href="http://www.squarepharma.com.bd/product-details.php?pid=200">Esloric®</a>
                            </li>

                        </ul>

                    </div>


                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="heading-footer footer-headline-clr pt2">Follow us</h5>



                        <ul className="social_footer_ul footer_ul2_amrc">
                            <li>
                                <a target="_blank" rel='noreferrer' href="https://web.facebook.com/nahiduzzaman28"> <BsFacebook /> </a>
                            </li>
                            <li>
                                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/nahiduzzaman0/"><ImLinkedin /></a>
                            </li>
                            <li>
                                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/akashnahid0"><AiFillInstagram /></a>
                            </li>
                            <li>
                                <a target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UCfSCklo94X_Z8T_pTB2IsOA"><SiYoutubemusic /></a>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>


            <div className="container">
                <ul className="foote_bottom_ul_amrc">
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/inventory'>Inventory</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/about'>About</Link>
                    </li>

                </ul>

                <p className="text-center">	&copy; Copyright {(new Date().getFullYear())} | Designed With by <a target="_blank" rel='noreferrer' href="https://web.facebook.com/nahiduzzaman28">Clason Medicine Warehouse</a></p>

                <ul className="social_footer_ul">
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://web.facebook.com/nahiduzzaman28"> <BsFacebook /> </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/nahiduzzaman0/"><ImLinkedin /></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://www.instagram.com/akashnahid0"><AiFillInstagram /></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UCfSCklo94X_Z8T_pTB2IsOA"><SiYoutubemusic /></a>
                    </li>
                </ul>

            </div>

        </footer>
    );
};

export default Footer;