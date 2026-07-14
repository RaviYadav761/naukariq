import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm shadow-slate-200 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-lg shadow-slate-300/20 transition hover:bg-slate-800"
        >
          <span className="text-xl font-bold">Naukari</span>
          <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-900">
            Q
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Contact
          </NavLink>

        </nav>

      </div>
    </header>
  );
};

export default Header;