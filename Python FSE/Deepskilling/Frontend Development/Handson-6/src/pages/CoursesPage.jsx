import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addFavorite } from "../redux/courseSlice";

const courses = [
    {
        id: 1,
        name: "Python Programming",
        code: "CS101",
        credits: 4
    },
    {
        id: 2,
        name: "Database Systems",
        code: "CS102",
        credits: 3
    },
    {
        id: 3,
        name: "Cloud Computing",
        code: "CS103",
        credits: 4
    }
];

function CoursesPage() {

    const dispatch = useDispatch();

    return (

        <div className="page">

            <h1>Available Courses</h1>

            {
                courses.map(course => (

                    <div
                        className="course-card"
                        key={course.id}
                    >

                        <h3>{course.name}</h3>

                        <p>Code : {course.code}</p>

                        <p>Credits : {course.credits}</p>

                        <Link to={`/courses/${course.id}`}>
                            View Details
                        </Link>

                        <br />
                        <br />

                        <button
                            onClick={() => dispatch(addFavorite(course))}
                        >
                            Add To Favorites
                        </button>

                    </div>

                ))
            }

        </div>

    );

}

export default CoursesPage;