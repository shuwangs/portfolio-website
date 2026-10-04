import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/me", label: "Me" },
  { to: "/blog", label: "Blog" },
  { to: "/bobo", label: "Bobo" },
];

function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="navbar-logo" to="/" aria-label="Shu.S home">
          Shu<span>.</span>S
        </Link>
        <nav className="navbar-links" aria-label="Main navigation">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              aria-current={to === "/blog" && pathname.startsWith("/blogs/") ? "page" : undefined}
              className={({ isActive }) =>
                isActive || (to === "/blog" && pathname.startsWith("/blogs/"))
                  ? "navbar-link is-active"
                  : "navbar-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
