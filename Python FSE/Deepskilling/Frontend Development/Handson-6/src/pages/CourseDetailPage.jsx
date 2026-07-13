import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { EnrollmentContext } from "../context/EnrollmentContext";

function CourseDetailPage() {

    const { courseId } = useParams();

    const navigate = useNavigate();

    const { enrollCourse } = useContext(EnrollmentContext);

    function handleEnroll() {

        enrollCourse({

            id: courseId,

            name: "Course " + courseId

        });

        navigate("/profile");

    }

    return (

        <div className="page">

            <h1>Course Details</h1>

            <p>Course ID : {courseId}</p>

            <button onClick={handleEnroll}>

                Enroll

            </button>

        </div>

    );

}

export default CourseDetailPage;