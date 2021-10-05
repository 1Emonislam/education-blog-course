import React from 'react';
import { Container } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';

const SingleCourseDetails = (props) => {
    const { singleCourseDetails } = props;
    const { img, author, title, body } = singleCourseDetails;
    return (
        <div>
            {/*====== COURSES SINGEl PART START ======*/}
            <section id="corses-singel" className="pt-90 pb-120 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="corses-singel-left mt-30">
                                <div className="title">
                                    <h3>{title}</h3>
                                </div> {/* title */}
                                <div className="course-terms">
                                    <ul>
                                        <li>
                                            <div className="teacher-name">
                                                <div className="name">
                                                    <span>{author}</span>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div> {/* course terms */}
                                <div className="corses-singel-image pt-50">
                                    <img src={img} alt="Courses" />
                                </div> {/* corses singel image */}
                                <div className="corses-tab mt-30">
                                    <ul className="nav nav-justified" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                            <div className="overview-description">
                                                <div className="singel-description pt-40">
                                                    <h6>Course Summery</h6>
                                                    <p>{body}</p>
                                                </div>
                                            </div> {/* overview description */}
                                        </div>
                                    </div> {/* tab content */}
                                </div>
                            </div> {/* corses singel left */}
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default SingleCourseDetails;