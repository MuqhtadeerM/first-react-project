import { Link, NavLink, Outlet } from "react-router";
import "./header.css";
export default function NavBar() {
  return (
    <div>
      <div className="header">
        <div className="Logo">
          <Link className="link" to="/">
            <h2 >Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className={({isActive})=> isActive? 'custom-active link' : 'link' } to="/">
                <h2>Home</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/login">
                <h2>Login</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/about">
                <h2>About</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/contact">
                <h2>Contact</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                <h2>College</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users">
                <h2>Users</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users/List">
                <h2>List</h2>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
