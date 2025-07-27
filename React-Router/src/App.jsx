import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}
