import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
function Navbar({ onLoginClick }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/85 dark:bg-navy-dark/85 border-b border-sky-deep/8 dark:border-white/8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-2xl font-semibold text-sky-deep dark:text-sky-light tracking-tight"
        >
          Sewa
        </Link>
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link
            to="/about"
            className={`px-3.5 py-2 rounded-full transition-colors ${
              isActive("/about")
                ? "text-sky-deep dark:text-sky bg-sky-light dark:bg-white/10"
                : "text-navy/70 dark:text-sky-light/70 hover:text-sky-deep dark:hover:text-sky hover:bg-sky-light/60 dark:hover:bg-white/5"
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`px-3.5 py-2 rounded-full transition-colors ${
              isActive("/services")
                ? "text-sky-deep dark:text-sky bg-sky-light dark:bg-white/10"
                : "text-navy/70 dark:text-sky-light/70 hover:text-sky-deep dark:hover:text-sky hover:bg-sky-light/60 dark:hover:bg-white/5"
            }`}
          >
            Services
          </Link>
          <button
            onClick={() => scrollTo("how")}
            className="px-3.5 py-2 rounded-full text-navy/70 dark:text-sky-light/70 hover:text-sky-deep dark:hover:text-sky hover:bg-sky-light/60 dark:hover:bg-white/5 transition-colors"
          >
            How it works
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full border border-sky-deep/12 dark:border-white/12 text-sky-deep dark:text-sky-light hover:bg-sky-light dark:hover:bg-white/10 hover:border-sky-deep/25 dark:hover:border-white/25 transition-all"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            onClick={onLoginClick}
            className="px-5 py-2.5 rounded-full bg-sky text-white font-semibold text-sm shadow-soft hover:bg-sky-deep hover:shadow-soft-lg hover:-translate-y-px active:translate-y-0 transition-all"
          >
            Log in
          </button>
        </div>
        <button className="md:hidden text-navy dark:text-sky-light" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-1 bg-white dark:bg-navy-dark border-t border-sky-deep/8 dark:border-white/8">
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="py-3 px-2 text-navy dark:text-sky-light font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="py-3 px-2 text-navy dark:text-sky-light font-medium"
          >
            Services
          </Link>
          <button
            onClick={() => scrollTo("how")}
            className="py-3 px-2 text-left text-navy dark:text-sky-light font-medium"
          >
            How it works
          </button>
          <div className="flex items-center gap-3 pt-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-sky-deep/12 dark:border-white/12 text-sky-deep dark:text-sky-light"
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button
              onClick={() => { setMenuOpen(false); onLoginClick(); }}
              className="flex-1 px-5 py-2.5 rounded-full bg-sky text-white font-semibold text-sm shadow-soft"
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
