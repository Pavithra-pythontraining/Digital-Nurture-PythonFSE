import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadCourses,
  selectCourses,
  selectCoursesLoading,
  selectCoursesError,
} from "../redux/courseSlice";

function Courses() {

  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);

  const loading = useSelector(selectCoursesLoading);

  const error = useSelector(selectCoursesError);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Courses;