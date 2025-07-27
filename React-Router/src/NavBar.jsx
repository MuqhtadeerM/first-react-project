import { Link } from "react-router";
export default function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Login">Login</Link>
    </>
  );
}
