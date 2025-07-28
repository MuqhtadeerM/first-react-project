import { Link, NavLink, Outlet } from "react-router";

export default function College() {
  return(
    <div className="college" style={{textAlign: 'center'}}>
      <h1>College Page</h1>
      <h2><Link to="/">Go Back to Home</Link></h2>
      <NavLink className="link" to="">Students</NavLink>
      <NavLink className="link" to="departments">Departments</NavLink>
      <NavLink className="link" to="details">College Details</NavLink>

      
      
      
      {/* when we using nested items the Outlet is use to access the child element in router */}
      <Outlet />
    </div>
  )
}