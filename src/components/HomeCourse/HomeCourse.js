import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const HomeCourse = (props) => {
    const { id, img, author, title, price } = props.course;
    return (
        <div className="text-center lg-pb-5">
            <Card style={{ width: '260px', margin: '0 auto' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><Link to={`/course/${id}`}> <h5 className="title-course">{title.slice(0, 38)}...</h5> </Link></Card.Title>
                    <strong className="">Price: ${price}</strong>
                    <Card.Text>
                        <NavLink to="#"> {author}</NavLink>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >

    );
};

export default HomeCourse;