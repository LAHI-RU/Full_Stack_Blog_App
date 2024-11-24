import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <a href="" className="logo">
        MyBlog
      </a>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
