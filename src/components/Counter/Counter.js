import React from 'react';

const Counter = () => {
    return (
        <div>

            {/*====== COUNTER PART START ======*/}
            <div id="counter-part" className="bg_cover pt-65 pb-110" data-overlay={8} style={{ backgroundImage: 'url(images/bg-2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">30,000</span>+</span>
                                <p>Students enrolled</p>
                            </div> {/* singel counter */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">41,000</span>+</span>
                                <p>Courses Uploaded</p>
                            </div> {/* singel counter */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">11,000</span>+</span>
                                <p>People certifie</p>
                            </div> {/* singel counter */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="singel-counter text-center mt-40">
                                <span><span className="counter">39,000</span>+</span>
                                <p>Global Teachers</p>
                            </div> {/* singel counter */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </div>
            {/*====== COUNTER PART ENDS ======*/}
        </div>
    );
};

export default Counter;