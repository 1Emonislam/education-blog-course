import React from 'react';
import { Link } from 'react-router-dom';

const Applay = () => {
    return (
        <div>

            <section id="apply-aprt" className="pb-120 mt5">
                <div className="container">
                    <div className="apply">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="apply-cont apply-color-1">
                                    <h3>Apply for fall 2022</h3>
                                    <p>Kognity offers different subscription types to fit different schools’ needs. Prices vary according to the number of students that will have access to the platform.</p>
                                    <Link to="" className="main-btn">Apply Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="apply-cont apply-color-2">
                                    <h3>Apply for scholarship</h3>
                                    <p>We will find the best solution for you! Kognity works with schools in over 110 countries. Get in touch with us to see how we can make it work for your school!</p>
                                    <Link to="" className="main-btn">Apply Now</Link>
                                </div> {/* apply cont */}
                            </div>
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section> {/* section */}
            {/* ====== APPLY PART ENDS ====== */}
        </div>
    );
};

export default Applay;