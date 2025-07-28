import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <img
        style={{ width: "80%" }}
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
      />
    </div>
  );
}
