import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <section id="testimonial" className="bg_cover pt-115 pb-120" data-overlay={8} style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvF8rce4ppCVVPX5Qy7MSVyE2RuLIm1GTww&usqp=CAU)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-40">
                                <h5>Testimonial</h5>
                                <h2>What they say</h2>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row testimonial-slied mt-40">
                        <div className="col-lg-6">
                            <div className="singel-testimonial">
                                <div className="testimonial-thum">
                                    <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf8JQ03uImWos_jnR9cRqivwYsP8q6bWbAg&usqp=CAU" alt="Testimonial" />
                                    <div className="quote">
                                        <i className="fa fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-cont">
                                    <p>We believe all students should have access to modern and engaging learning experiences of the highest quality.</p>
                                    <h6>Rubina Helen</h6>
                                    <span>Bsc, Engineering</span>
                                </div>
                            </div> {/* singel testimonial */}
                        </div>
                        <div className="col-lg-6">
                            <div className="singel-testimonial">
                                <div className="testimonial-thum">
                                    <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn361mcfxr1TxFBXw0kM3tRNKpmmzoaNMjA&usqp=CAU" alt="Testimonial" />
                                    <div className="quote">
                                        <i className="fa fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-cont">
                                    <p> every student should be supported to achieve their highest goals, with access to the teaching, </p>
                                    <h6>Salman</h6>
                                    <span>Engineering</span>
                                </div>
                            </div> {/* singel testimonial */}
                        </div>
                        <div className="col-lg-6">
                            <div className="singel-testimonial">
                                <div className="testimonial-thum">
                                    <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJq5w7X7SH_PQvko0pRFFMRL_EB3E1BW_xqA&usqp=CAU" alt="Testimonial" />
                                    <div className="quote">
                                        <i className="fa fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-cont">
                                    <p> learning and assessment opportunities they so richly deserve. No matter their background</p>
                                    <h6>Kelton Derge</h6>
                                    <span>Application, Engineering</span>
                                </div>
                            </div> {/* singel testimonial */}
                        </div>
                    </div> {/* testimonial slied */}
                </div> {/* container */}
            </section>
            {/*====== TEASTIMONIAL PART ENDS ======*/}
        </div>
    );
};

export default Testimonial;