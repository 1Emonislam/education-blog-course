import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Applay from '../Applay/Applay';
import Catagories from '../Catagories/Catagories';
import HomeCourse from '../HomeCourse/HomeCourse';
import Slider from '../Slider/Slider';

const Home = () => {
    const [courses] = useCourses();

    return (
        <div>
            <Slider></Slider>
            <Catagories></Catagories>
            {/*====== ABOUT PART START ======*/}
            <section id="about-part" className="pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                                <h5>About us</h5>
                                <h2>Welcome to Edubin </h2>
                            </div> {/* section title */}
                            <div className="about-cont">
                                <p>Here you will find our latest free materials to support you outside of the Kognity platform. Get access to teaching tips written by subject experts in our guides or on our blog, view our free webinar library, or find help getting started on our platform.</p>
                                <span href="#" className="main-btn mt-55">Learn More</span>
                            </div>
                        </div> {/* about cont */}
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-event mt-50">
                                <div className="event-title">
                                    <h3>Upcoming events</h3>
                                </div> {/* event title */}
                                <ul>
                                    <li>
                                        <div className="singel-event">
                                            <span><i className="fa fa-calendar" /> 2 June 2021</span>
                                            <a href="events-singel.html"><h4>Campus clean workshop</h4></a>
                                            <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                            <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="singel-event">
                                            <span><i className="fa fa-calendar" /> 5 November 2021</span>
                                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                            <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                            <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="singel-event">
                                            <span><i className="fa fa-calendar" /> 2 December 2021</span>
                                            <a href="events-singel.html"><h4>Enviroement conference</h4></a>
                                            <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                            <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                        </div>
                                    </li>
                                </ul>
                            </div> {/* about event */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
                <div className="about-bg">
                    <img src="images/about/bg-1.png" alt="About" />
                </div>
            </section>
            {/*====== ABOUT PART ENDS ======*/}
            <Applay></Applay>

            {/*====== Popular Courses ======*/}

            <Container>
                <h2 className="text-center"> Popular Courses</h2>
                <Row xs={1} md={2} lg={4} xxl={4} className="g-4">

                    {
                        courses.slice(0, 4).map(course => <HomeCourse key={course.id} course={course}></HomeCourse>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;