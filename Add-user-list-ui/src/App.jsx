import "./App.css";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import UserList from "./UserList";
import { NavLink, Route, Routes } from "react-router";

export default function App() {
  return (
    <div>
      {/* <h2>Making the routes and pages for addd users and user list ui</h2> */}

      <ul className="nav-list">
        <li>
          {/* this is the navigation added to the edit page and the update page */}
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />

        {/* this is the edit page route defined here */}
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}
