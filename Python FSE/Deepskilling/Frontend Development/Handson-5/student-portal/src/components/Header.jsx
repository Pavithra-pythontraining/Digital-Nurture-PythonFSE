import "./Header.css";
function Header() {
    return (
        <header>
            <h2>SEC Student Portal</h2>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Grades</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;