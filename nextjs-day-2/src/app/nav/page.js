"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Task Manage
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/taskform">
                  Add Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Show Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="signup">
                  Register
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
