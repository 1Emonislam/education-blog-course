import React from 'react';
import { useParams } from 'react-router';
import useCourses from '../../hooks/useCourses';
import SingleCourseDetails from '../SingleCourseDetails/SingleCourseDetails';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [courses] = useCourses();
    const storeCourse = [];
    if (courses?.length) {
        const currentFind = courses.find(course => course.id === courseId);
        storeCourse.push(currentFind)
    }
    // console.log(storeCourse)
    return (
        <div>
            {
                storeCourse.map(course => <SingleCourseDetails key={course.id} singleCourseDetails={course}></SingleCourseDetails>)
            }
        </div>
    );
};

export default CourseDetails;