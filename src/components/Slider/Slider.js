import React from 'react';

const Slider = () => {
    return (
        <div>

            {/*====== SLIDER PART START ======*/}
            <section id="slider-part" className="slider-active">
                <div className="single-slider bg_cover pt-150" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481__340.jpg)' }} data-overlay={4}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9">
                                <div className="slider-cont">
                                    <h1 data-animation="bounceInLeft" data-delay="1s">Choose the right Place for education</h1>
                                    <p data-animation="fadeInUp" data-delay="1.3s">Kognity offers different subscription types to fit different schools’ needs. Prices vary according to the number of students that will have access to the platform. Teacher access is always free.</p>
                                    <ul>
                                        <li><span data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Applay Now</span></li>
                                        <li><span data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div> {/* row */}
                    </div> {/* container */}
                </div> {/* single slider */}
            </section>
            {/*====== SLIDER PART ENDS ======*/}
        </div>
    );
};

export default Slider;