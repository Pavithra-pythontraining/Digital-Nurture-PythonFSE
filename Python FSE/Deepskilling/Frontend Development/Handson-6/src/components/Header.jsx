import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <h2>SEC Student Portal</h2>

      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;      