// only the relevant bits changed - swap scrollTo("trades") for a real link

import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar({ onLoginClick }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // "How it works" still only exists as a section on the home page
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

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-navy-dark/80 border-b border-sky-deep/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold text-sky-deep dark:text-sky-light">
          Sewa
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-navy dark:text-sky-light/90">
          <Link to="/about" className="hover:text-sky transition-colors">About</Link>
          <Link to="/services" className="hover:text-sky transition-colors">Services</Link>
          <button onClick={() => scrollTo("how")} className="hover:text-sky transition-colors">How it works</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full border border-sky-deep/15 dark:border-white/15 text-sky-deep dark:text-sky-light hover:bg-sky-light dark:hover:bg-white/10 transition-colors"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={onLoginClick}
            className="px-5 py-2 rounded-full bg-sky text-white font-semibold text-sm shadow-sm hover:bg-sky-deep hover:shadow-md transition-all"
          >
            Log in
          </button>
        </div>

        <button className="md:hidden text-navy dark:text-sky-light" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4 bg-white dark:bg-navy-dark border-t border-sky-deep/10 dark:border-white/10">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-left text-navy dark:text-sky-light">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-left text-navy dark:text-sky-light">Services</Link>
          <button onClick={() => scrollTo("how")} className="text-left text-navy dark:text-sky-light">How it works</button>
          <div className="flex items-center gap-3 pt-2">
            <button onClick={toggleTheme} className="p-2 rounded-full border border-sky-deep/15 dark:border-white/15 text-sky-deep dark:text-sky-light">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => { setMenuOpen(false); onLoginClick(); }}
              className="flex-1 px-5 py-2 rounded-full bg-sky text-white font-semibold text-sm"
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