import React from 'react';
import { Link } from 'react-router-dom';
const SingleCourse = (props) => {
    const { course } = props;
    const { img, author, title, price } = course;
    // console.log(course)
    return (
        <div>
            <div className="singel-course mt-30">
                <div className="thum">
                    <div className="image">
                        <img src={img} alt="Course" />
                    </div>
                    <div className="price">
                        <span>${price}</span>
                    </div>
                </div>
                <div className="cont">
                    <Link to=""><h4>{title}</h4></Link>
                    <div className="course-teacher">
                        <div className="thum">
                            <strong>{author}</strong>
                        </div>
                        <div className="name">
                            <Link to="#"><h6>{author}</h6></Link>
                        </div>
                    </div>
                </div>
            </div> {/* singel course */}
        </div>
    );
};

export default SingleCourse;