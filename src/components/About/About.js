import React from 'react';
import { NavLink } from 'react-router-dom';
import Counter from '../Counter/Counter';
const About = () => {
    return (
        <div>
            {/*====== PAGE BANNER PART START ======*/}
            <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{ backgroundImage: 'url(images/page-banner-1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner-cont">
                                <h2>About Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/home">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>  {/* page banner cont */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
            {/*====== PAGE BANNER PART ENDS ======*/}
            {/*====== ABOUT PART START ======*/}
            <section id="about-page" className="pt-70 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                                <h5>About us</h5>
                                <h2>Welcome to Edubin </h2>
                            </div> {/* section title */}
                            <div className="about-cont">
                                <p>Kognity is an award-winning digital publisher which combines the power of technology and textbooks to create a vastly elevated learning experience. <br /> <br />
                                    Founded in Sweden, Kognity was designed to redefine the traditional textbook and supercharge the learning process as we know it.
                                </p>
                            </div>
                        </div> {/* about cont */}
                        <div className="col-lg-7">
                            <div className="about-image mt-50">
                                <img src="https://previews.123rf.com/images/dolgachov/dolgachov1512/dolgachov151202040/49162387-education-people-friendship-and-learning-concept-group-of-happy-international-high-school-students-o.jpg" alt="About" />
                            </div>  {/* about imag */}
                        </div>
                    </div> {/* row */}
                    <div className="about-items pt-60">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="about-singel-items mt-30">
                                    <span>01</span>
                                    <h4>Why Choose us</h4>
                                    <p> It all began with two students who wanted to create the types of exciting and dynamic interactive learning resources they’d always wanted to experience in their own classrooms. Resolving to create a modern textbook to fulfil the needs of the modern learner, the result was Kognity.</p>
                                </div> {/* about singel */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="about-singel-items mt-30">
                                    <span>02</span>
                                    <h4>Our Mission</h4>
                                    <p>Today, Kognity is loved by thousands of students, in hundreds of schools, in over 100 countries.</p>
                                </div> {/* about singel */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="about-singel-items mt-30">
                                    <span>03</span>
                                    <h4>Our vission</h4>
                                    <p>We exist to radically improve learning for the world’s 1.5 billion school students.</p>
                                </div> {/* about singel */}
                            </div>
                        </div> {/* row */}
                    </div> {/* about items */}
                </div> {/* container */}
            </section>
            {/*====== ABOUT PART ENDS ======*/}

            <Counter></Counter>



        </div>
    );
};

export default About;