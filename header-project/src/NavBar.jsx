import { Link, Outlet } from "react-router";
import "./header.css";
export default function NavBar() {
  return (
    <div>
      <div className="header">
        <div>
          <Link className="link" to="/">
            <h2>Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to="/">
                <h2>Home</h2>
              </Link>
            </li>
            <li>
              <Link className="link" to="/in/user/login">
                <h2>Login</h2>
              </Link>
            </li>
            <li>
              <Link className="link" to="/in/user/about">
                <h2>About</h2>
              </Link>
            </li>
            <li>
              <Link className="link" to="/in/user/contact">
                <h2>Contact</h2>
              </Link>
            </li>
            <li>
              <Link className="link" to="/college">
                <h2>College</h2>
              </Link>
            </li>
            <li>
              <Link className="link" to="/users">
                <h2>Users</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
