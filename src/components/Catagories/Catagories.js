import React from 'react';

const Catagories = () => {
    return (
        <div>
            {/*====== CATEGORY PART START ======*/}
            <section id="category-part mb-5">
                <div className="container">
                    <div className="category pt-40 pb-80">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="category-text pt-40">
                                    <h2>Best platform to learn everything</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                                <div className="row category-slied mt-40">
                                    <div className="col-lg-4 mb-4">
                                        <span href="#">
                                            <span className="singel-category text-center color-1">
                                                <span className="icon">
                                                    <img src="https://www.pngitem.com/pimgs/m/513-5137193_earth-language-icon-png-free-transparent-png.png" alt="Icon" />
                                                </span>
                                                <span className="cont">
                                                    <span>Language</span>
                                                </span>
                                            </span> {/* singel category */}
                                        </span>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <span href="#">
                                            <span className="singel-category text-center color-2">
                                                <span className="icon">
                                                    <img src="data:image/png;base64,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" alt="Icon" />
                                                </span>
                                                <span className="cont">
                                                    <span>Business</span>
                                                </span>
                                            </span> {/* singel category */}
                                        </span>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <span href="#">
                                            <span className="singel-category text-center color-3">
                                                <span className="icon">
                                                    <img claasName="h-50" src="https://www.pngitem.com/pimgs/m/47-474932_podium-z-mwc-icon-public-speaking-microphone-clipart.png" alt="Icon" />
                                                </span>
                                                <span className="cont">
                                                    <span>Literature</span>
                                                </span>
                                            </span> {/* singel category */}
                                        </span>
                                    </div>


                                </div> {/* category slied */}
                            </div>
                        </div> {/* row */}
                    </div> {/* category */}
                </div> {/* container */}
            </section>
        </div>
    );
};

export default Catagories;