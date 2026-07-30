import { useState } from "react";
import { X, Stamp } from "lucide-react";
function AuthModal({ onClose }) {
  const [role, setRole] = useState(null); 
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", phone: "", profession: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (isSignup) {
      const alreadyExists = existingUsers.find((u) => u.email === formData.email);
      if (alreadyExists) {
        setMessage("An account with this email already exists.");
        return;
      }
      existingUsers.push({ ...formData, role });
      localStorage.setItem("users", JSON.stringify(existingUsers));
      setMessage("Account created! You can log in now.");
      setIsSignup(false);
    } else {
      const foundUser = existingUsers.find(
        (u) => u.email === formData.email && u.password === formData.password && u.role === role
      );
      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setMessage(`Welcome back, ${foundUser.name}!`);
      } else {
        setMessage("Invalid email or password.");
      }
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-navy-dark/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md">
        {}
        <div className="ticket-edge text-navy dark:text-sky-light relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-2xl overflow-visible">
          <div className="ticket-notch text-white dark:text-navy-dark" />
          <div className="p-7 sm:p-8">
            <div className="flex items-start justify-between mb-1">
              <p className="text-xs tracking-widest uppercase font-semibold text-amber">
                Sewa · Service Slip
              </p>
              <button onClick={onClose} className="text-navy/50 dark:text-sky-light/60 hover:text-navy dark:hover:text-white">
                <X size={20} />
              </button>
            </div>
            {!role && (
              <>
                <h2 className="font-display text-2xl font-semibold mt-2 mb-5">
                  Who's filling this out?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setRole("customer")}
                    className="py-4 rounded-xl border-2 border-sky-deep/15 dark:border-white/15 hover:border-sky hover:bg-sky-light dark:hover:bg-white/5 font-semibold transition-all"
                  >
                    I need a worker
                  </button>
                  <button
                    onClick={() => setRole("worker")}
                    className="py-4 rounded-xl border-2 border-sky-deep/15 dark:border-white/15 hover:border-amber hover:bg-amber-light/20 font-semibold transition-all"
                  >
                    I am a worker
                  </button>
                </div>
              </>
            )}
            {role && (
              <>
                <button
                  onClick={() => { setRole(null); setMessage(""); }}
                  className="text-sm text-sky-deep dark:text-sky mb-3 hover:underline"
                >
                  ← Back
                </button>
                <h2 className="font-display text-2xl font-semibold mb-1">
                  {isSignup ? "Create account" : "Welcome back"}
                </h2>
                <p className="text-sm text-navy/60 dark:text-sky-light/60 mb-5 flex items-center gap-1">
                  <Stamp size={14} /> as a {role === "customer" ? "customer" : "worker"}
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  {isSignup && (
                    <>
                      <input
                        type="text" name="name" placeholder="Full name"
                        value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
                      />
                      <input
                        type="text" name="phone" placeholder="Phone number"
                        value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
                      />
                      {role === "worker" && (
                        <input
                          type="text" name="profession" placeholder="Trade (e.g. Carpenter, Electrician)"
                          value={formData.profession} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
                        />
                      )}
                    </>
                  )}
                  <input
                    type="email" name="email" placeholder="Email"
                    value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
                  />
                  <input
                    type="password" name="password" placeholder="Password"
                    value={formData.password} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-sky hover:bg-sky-deep text-white font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    {isSignup ? "Sign up" : "Log in"}
                  </button>
                </form>

                <p className="text-sm text-center mt-4 text-navy/70 dark:text-sky-light/70">
                  {isSignup ? "Already have an account?" : "New to Sewa?"}{" "}
                  <span
                    onClick={() => setIsSignup(!isSignup)}
                    className="text-sky-deep dark:text-sky font-semibold cursor-pointer hover:underline"
                  >
                    {isSignup ? "Log in" : "Sign up"}
                  </span>
                </p>
                {message && (
                  <p className="text-sm text-center mt-3 text-amber font-medium">{message}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthModal;
