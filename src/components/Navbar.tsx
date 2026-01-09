import { NavLink, Link } from "react-router-dom";

const closeNavbar = () => {
  const navbar = document.getElementById("mainNavbar");
  if (navbar?.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom m-2"
      style={{ backgroundColor: "var(--lwl-white)" }}
    >
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbar-brand fw-semibold" onClick={closeNavbar}>
          Looped With Love
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <NavLink
                to="/"
                end
                className="nav-link nav-link-custom"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item mx-4">
              <NavLink
                to="/gallery"
                className="nav-link nav-link-custom"
                onClick={closeNavbar}
              >
                Gallery
              </NavLink>
            </li>

            <li className="nav-item mx-4">
              <NavLink
                to="/about"
                className="nav-link nav-link-custom"
                onClick={closeNavbar}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
