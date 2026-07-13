import "./Courses.css";
function Courses() {
    return (
        <section id="courses">
            <h2>Available Courses</h2>

            <input
                type="text"
                placeholder="Search Courses"
            />

            <button>Sort By Credits</button>

            <div className="course-grid">
                <div className="course-card">
                    <h3>Python Programming</h3>
                    <p>CS101</p>
                    <p>Grade: A</p>
                    <span>Credits: 4</span>
                </div>

                <div className="course-card">
                    <h3>Database Systems</h3>
                    <p>CS102</p>
                    <p>Grade: A+</p>
                    <span>Credits: 3</span>
                </div>
            </div>
        </section>
    );
}

export default Courses;