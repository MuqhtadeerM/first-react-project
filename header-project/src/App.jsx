import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import "./App.css";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import CollegeDetails from "./CollegeDetails";
import Departments from "./Departments";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

export default function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<UserList />} />
          {/* adding coolon here is helps to open in segments like it can open at id or name or both only condition is to add the question mark at the end */}
          <Route path="/users/:id/:name?" element={<UserDetails />}/>
          
          
          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/login" element={<Login />} />
              <Route path="/in/user/contact" element={<Contact />} />
              <Route path="/in/user/about" element={<About />} />
            </Route>
          </Route>
        </Route>
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="details" element={<CollegeDetails />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />

        {/* instead of doiing all this things we can use the navigation link */}
        {/* this will navigates to the home page instead of showing the 404 error 
        when we using Navigation functionctionality of the react-router. */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
