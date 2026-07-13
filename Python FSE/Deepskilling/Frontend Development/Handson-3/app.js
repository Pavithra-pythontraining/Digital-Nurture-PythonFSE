import { courses } from "./data.js";

// Destructuring
courses.forEach(course => {
    const { name, credits } = course;
    console.log(name, credits);
});

// map()
const courseNames = courses.map(course =>
    `${course.code} - ${course.name} (${course.credits} Credits)`
);

console.log(courseNames);

// filter()
const filteredCourses = courses.filter(course => course.credits >= 4);

console.log(filteredCourses);

// reduce()
const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log(totalCredits);

// Select DOM Elements
const grid = document.querySelector(".course-grid");
const total = document.querySelector("#total-credits");
const search = document.querySelector("#search-courses");
const sortBtn = document.querySelector("#sort-btn");

// Function to Render Courses
function renderCourses(courseList) {

    grid.innerHTML = "";

    courseList.forEach(course => {

        const article = document.createElement("article");

        article.className = "course-card";

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.code}</p>
            <p>Grade : ${course.grade}</p>
            <span>Credits : ${course.credits}</span>
        `;

        grid.appendChild(article);

    });

    total.textContent = `Total Credits : ${courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    )}`;

}

// Display all courses initially
renderCourses(courses);

// Search Courses
search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = courses.filter(course =>
        course.name.toLowerCase().includes(value)
    );

    renderCourses(filtered);

});

// Sort by Credits
sortBtn.addEventListener("click", () => {

    const sorted = [...courses].sort(
        (a, b) => b.credits - a.credits
    );

    renderCourses(sorted);

});

// Event Delegation (Click on Course Card)
grid.addEventListener("click", (event) => {

    const card = event.target.closest(".course-card");

    if (!card) return;

    const courseName = card.querySelector("h3").textContent;

    const selectedCourse = courses.find(
        course => course.name === courseName
    );

    document.querySelector("#selected-course").innerHTML = `
        <h3>Selected Course</h3>
        <p><strong>Name:</strong> ${selectedCourse.name}</p>
        <p><strong>Code:</strong> ${selectedCourse.code}</p>
        <p><strong>Credits:</strong> ${selectedCourse.credits}</p>
        <p><strong>Grade:</strong> ${selectedCourse.grade}</p>
    `;

});