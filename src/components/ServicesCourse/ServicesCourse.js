
import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';

const ServicesCourse = () => {
    const [courses] = useCourses();
    const [searchDisplay, setSearchDisplay] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        if (courses.length) {
            const searchFilter = courses.filter(course => course.title.toLowerCase().includes(searchText.toLowerCase()));
            setSearchDisplay(courses);
            setSearchDisplay(searchFilter)
        }
    }, [courses, searchText])

    const handleSearch = event => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>

            {/*====== COURSES PART START ======*/}
            <section id="courses-part" className="pt-120 pb-120 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="courses-top-search">
                                <ul className="nav float-left" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link className="active" id="courses-grid-tab" data-toggle="tab" to="#courses-grid" role="tab" aria-controls="courses-grid" aria-selected="true"><i className="fa fa-th-large" /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id="courses-list-tab" data-toggle="tab" to="#courses-list" role="tab" aria-controls="courses-list" aria-selected="false"><i className="fa fa-th-list" /></Link>
                                    </li>
                                    <li className="nav-item">Showning: {courses?.length} Results Showing:{searchDisplay?.length}</li>
                                </ul> {/* nav */}
                                <div className="courses-search float-right">
                                    <form action="#">
                                        <input onChange={handleSearch} type="text" placeholder="Search" />
                                        <button type="button"><i className="fa fa-search" /></button>
                                    </form>
                                </div> {/* courses search */}
                            </div> {/* courses top search */}
                        </div>
                    </div> {/* row */}
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="courses-grid" role="tabpanel" aria-labelledby="courses-grid-tab">
                            {
                                courses?.length === 0 ? <Container className="text-center my-5 spiner-show"> <Spinner animation="border" /></Container> :
                                    <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
                                        {
                                            searchDisplay.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                                        }
                                    </Row>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesCourse;