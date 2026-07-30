import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light px-5 text-center">
      <p className="font-display text-6xl font-semibold text-sky/40">404</p>
      <h1 className="font-display text-2xl font-semibold mt-4">Page not found</h1>
      <p className="mt-2 text-navy/60 dark:text-sky-light/60">
        This page doesn't exist — but plenty of workers do.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-full bg-sky text-white font-semibold hover:bg-sky-deep transition-all"
      >
        Back to home
      </Link>
    </div>
  );
}
export default NotFound;
