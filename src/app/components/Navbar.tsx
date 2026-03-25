import { NavLink } from "react-router";

function navLinkClassName(isActive: boolean) {
  return `transition-colors ${
    isActive
      ? "text-[color:var(--portfolio-nav-active)]"
      : "text-[color:var(--portfolio-cream)] hover:text-[color:var(--portfolio-gold)]"
  }`;
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-sm accent-line">
      <div className="section-shell">
        <div className="flex items-center justify-center gap-12 py-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) => navLinkClassName(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => navLinkClassName(isActive)}
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => navLinkClassName(isActive)}
          >
            Portfolio
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
