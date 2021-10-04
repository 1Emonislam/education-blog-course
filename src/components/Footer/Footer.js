import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            {/* <!--====== FOOTER PART START ======--> */}

            <footer id="footer-part">
                <div className="footer-top pt-40 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-about mt-40">
                                    <div className="logo">
                                        <i class="fas fa-university"></i>
                                    </div>
                                    <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include.</p>
                                    <div className="mt-20 d-flex " id="footer-social">
                                        <li><NavLink to="#"><i className="fab fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fab fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fab fa-google-plus"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fab fa-instagram"></i></NavLink></li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-link mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>Sitemap</h6>
                                    </div>
                                    <div className="lg-d-flex">
                                        <ul>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Home</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>About us</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Courses</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>News</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Event</NavLink></li>
                                        </ul>
                                        <ul>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Gallery</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Shop</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Teachers</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Portfolio</NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-angle-right"></i>Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-link support mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>Support</h6>
                                    </div>
                                    <ul>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>FAQS</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>Privacy</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>Policy</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>Support</NavLink></li>
                                        <li><NavLink to="/about"><i className="fa fa-angle-right"></i>About</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-address mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>Contact Us</h6>
                                    </div>
                                    <ul>
                                        <li className="d-flex">
                                            <div className="icon">
                                                <i className="fa fa-home"></i>
                                            </div>
                                            <div className="cont">
                                                <p>Narail Kalia Upazila 7020 area Bangladesh</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="cont">
                                                <p>+3 123 456 789</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="icon">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                            <div className="cont">
                                                <p>info@yourmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright pt-10 pb-25">
                    <div className="container">
                        <div className="row">
                            <div className="copyright text-md-right text-center pt-15">
                                &copy; All Right Reserved 2021
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!--====== FOOTER PART ENDS ======--> */}
        </div>
    );
};

export default Footer;