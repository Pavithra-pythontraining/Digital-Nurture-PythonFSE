import { createContext, useState } from "react";

export const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    function enrollCourse(course) {

        setEnrolledCourses(previousCourses => [
            ...previousCourses,
            course
        ]);

    }

    return (

        <EnrollmentContext.Provider
            value={{
                enrolledCourses,
                enrollCourse
            }}
        >

            {children}

        </EnrollmentContext.Provider>

    );

}