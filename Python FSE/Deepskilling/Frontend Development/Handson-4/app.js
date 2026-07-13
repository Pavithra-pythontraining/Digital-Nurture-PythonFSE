import { courses } from "./data.js";

// =======================
// ES6 Destructuring
// =======================
courses.forEach(course => {
    const { name, credits } = course;
    console.log(name, credits);
});

// =======================
// map()
// =======================
const courseNames = courses.map(course =>
    `${course.code} - ${course.name} (${course.credits} Credits)`
);

console.log(courseNames);

// =======================
// filter()
// =======================
const filteredCourses = courses.filter(course => course.credits >= 4);
console.log(filteredCourses);

// =======================
// reduce()
// =======================
const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log(totalCredits);

// =======================
// DOM Elements
// =======================
const grid = document.querySelector(".course-grid");
const total = document.querySelector("#total-credits");
const search = document.querySelector("#search-courses");
const sortBtn = document.querySelector("#sort-btn");

// =======================
// Render Courses
// =======================
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

// Initial Display
renderCourses(courses);

// =======================
// Search
// =======================
search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = courses.filter(course =>
        course.name.toLowerCase().includes(value)
    );

    renderCourses(filtered);

});

// =======================
// Sort
// =======================
sortBtn.addEventListener("click", () => {

    const sorted = [...courses].sort(
        (a, b) => b.credits - a.credits
    );

    renderCourses(sorted);

});

// =======================
// Event Delegation
// =======================
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

// =======================
// Promise Example
// =======================
function fetchUser(id) {

    fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => response.json())
        .then(data => {
            console.log(data.name);
        });

}

fetchUser(1);

// =======================
// Async/Await Example
// =======================
async function fetchUserAsync(id) {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );

        const data = await response.json();

        console.log(data.name);

    }

    catch (error) {

        console.log(error);

    }

}

fetchUserAsync(2);

// =======================
// Promise with Delay
// =======================
function fetchAllCourses() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(courses);

        }, 1000);

    });

}

fetchAllCourses().then(data => {

    console.log(data);

});

// =======================
// Notification Section
// =======================
const loading = document.querySelector("#loading");
const notificationList = document.querySelector("#notification-list");

// =======================
// Generic Fetch Function
// =======================
async function apiFetch(url) {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("API Error");

    }

    return response.json();

}

// =======================
// Load Notifications
// =======================
async function loadPosts() {

    loading.style.display = "block";

    document.querySelector("#error-message").textContent = "";

    document.querySelector("#retry-btn").style.display = "none";

    try {

        const posts = await apiFetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        loading.style.display = "none";

        notificationList.innerHTML = "";

        posts.forEach(post => {

            notificationList.innerHTML += `
                <div class="notification-card">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;

        });

    }

    catch (error) {

        loading.style.display = "none";

        document.querySelector("#error-message").textContent = error.message;

        document.querySelector("#retry-btn").style.display = "block";

    }

}

loadPosts();

// =======================
// Retry Button
// =======================
document.querySelector("#retry-btn")
.addEventListener("click", () => {

    loadPosts();

});

// =======================
// Axios Interceptor
// =======================
axios.interceptors.request.use(config => {

    console.log("API Call Started :", config.url);

    return config;

});

// =======================
// Axios Example
// =======================
axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
        params: {
            userId: 1
        }
    }
)
.then(response => {

    console.log(response.data);

})
.catch(error => {

    console.log(error);

});

// =======================
// Fetch vs Axios
// =======================

// Fetch:
// - Built into JavaScript
// - Requires response.json()
// - Manual error handling

// Axios:
// - External library
// - Automatically parses JSON
// - Better error handling
// - Supports interceptors