import { useContext } from "react";

import { EnrollmentContext } from "../context/EnrollmentContext";

import { useDispatch, useSelector } from "react-redux";

import { removeFavorite } from "../redux/courseSlice";

function ProfilePage() {

    const { enrolledCourses } = useContext(EnrollmentContext);

    const favorites = useSelector(
        state => state.courses.favoriteCourses
    );

    const dispatch = useDispatch();

    return (

        <div className="page">

            <h1>Student Profile</h1>

            <h2>Enrolled Courses</h2>

            {
                enrolledCourses.length === 0 ?

                    (
                        <p>No courses enrolled.</p>
                    )

                    :

                    (
                        enrolledCourses.map(course => (

                            <div
                                className="course-card"
                                key={course.id}
                            >

                                <h3>{course.name}</h3>

                            </div>

                        ))
                    )
            }

            <br />

            <h2>Favorite Courses</h2>

            {
                favorites.length === 0 ?

                    (
                        <p>No Favorite Courses</p>
                    )

                    :

                    (
                        favorites.map(course => (

                            <div
                                className="course-card"
                                key={course.id}
                            >

                                <h3>{course.name}</h3>

                                <p>{course.code}</p>

                                <button
                                    onClick={() =>
                                        dispatch(removeFavorite(course.id))
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        ))
                    )
            }

        </div>

    );

}

export default ProfilePage;