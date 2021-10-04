import React from 'react';
import { Card } from 'react-bootstrap';

const HomeCourse = (props) => {
    const { img, author, title, price } = props.course;
    return (
        <div>
            <Card style={{ width: '18rem', margin: '20px -20px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 40)}...</Card.Title>
                    <strong>Price: ${price}</strong>
                    <Card.Text>
                        {author}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div >

    );
};

export default HomeCourse;