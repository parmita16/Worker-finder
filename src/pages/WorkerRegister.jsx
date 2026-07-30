import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Hammer, Wrench, Zap, Footprints, PaintBucket, HardHat, Scissors, Car,
  Upload, CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

const trades = [
  { name: "Carpenter", icon: Hammer },
  { name: "Plumber", icon: Wrench },
  { name: "Electrician", icon: Zap },
  { name: "Cobbler", icon: Footprints },
  { name: "Painter", icon: PaintBucket },
  { name: "Mason", icon: HardHat },
  { name: "Tailor", icon: Scissors },
  { name: "Mechanic", icon: Car },
];

function WorkerRegister() {
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    trade: "",
    experience: "",
    address: "",
    phone: "",
    photoPreview: null, // just a preview URL, since we have no backend to upload to
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTradeSelect = (name) => {
    setForm({ ...form, trade: name });
  };

  // reads the chosen image file and turns it into a local preview URL
  // (this is only a preview - without a backend, nothing is actually uploaded anywhere)
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setForm({ ...form, photoPreview: previewUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // save to localStorage the same way AuthModal does, under a separate
    // "workerListings" key so Day 3's mock workers.js stays untouched
    const existingListings = JSON.parse(localStorage.getItem("workerListings")) || [];
    existingListings.push({ ...form, id: Date.now() });
    localStorage.setItem("workerListings", JSON.stringify(existingListings));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
        <Navbar onLoginClick={() => setShowAuth(true)} />
        <div className="max-w-lg mx-auto px-5 py-24 text-center">
          <CheckCircle2 size={48} className="mx-auto text-sky-deep dark:text-sky mb-6" />
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">
            You're on the list!
          </h1>
          <p className="mt-4 text-navy/60 dark:text-sky-light/60">
            Thanks for registering with Sewa, {form.name.split(" ")[0] || "there"}.
            Customers looking for a {form.trade || "worker"} will be able to find you soon.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-8 px-8 py-3 rounded-full bg-sky text-white font-semibold hover:bg-sky-deep transition-all"
          >
            Back to home
          </button>
        </div>
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </div>
    );
  }

  return (
    <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
      <Navbar onLoginClick={() => setShowAuth(true)} />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-amber mb-4">
            Join Sewa
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            List yourself as a worker.
          </h1>
          <p className="mt-3 text-navy/60 dark:text-sky-light/60">
            A few details is all it takes for customers to start finding you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-sm p-6 sm:p-10 space-y-6"
        >
          {/* photo upload */}
          <div className="flex items-center gap-5">
            <label
              htmlFor="photo-upload"
              className="w-20 h-20 rounded-full bg-sky-light dark:bg-white/5 border-2 border-dashed border-sky-deep/30 dark:border-white/20 flex items-center justify-center cursor-pointer overflow-hidden shrink-0 hover:border-sky transition-colors"
            >
              {form.photoPreview ? (
                <img src={form.photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Upload size={20} className="text-sky-deep dark:text-sky" />
              )}
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <div>
              <p className="text-sm font-semibold">Profile photo</p>
              <p className="text-xs text-navy/50 dark:text-sky-light/50 mt-0.5">
                Optional, but profiles with photos get more trust
              </p>
            </div>
          </div>

          {/* name + phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-navy/60 dark:text-sky-light/60 mb-1.5 block">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Ramesh Shrestha"
                className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy/60 dark:text-sky-light/60 mb-1.5 block">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+977 98XXXXXXXX"
                className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>
          </div>

          {/* trade picker */}
          <div>
            <label className="text-xs font-semibold text-navy/60 dark:text-sky-light/60 mb-2.5 block">
              Your trade
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {trades.map(({ name, icon: Icon }) => {
                const isActive = form.trade === name;
                return (
                  <button
                    type="button"
                    key={name}
                    onClick={() => handleTradeSelect(name)}
                    className={`rounded-lg py-3 flex flex-col items-center gap-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-sky text-white"
                        : "bg-sky-light dark:bg-white/5 hover:bg-sky/20"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-white" : "text-sky-deep dark:text-sky"} />
                    {name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* experience + address */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-navy/60 dark:text-sky-light/60 mb-1.5 block">
                Years of experience
              </label>
              <input
                type="number"
                name="experience"
                min="0"
                value={form.experience}
                onChange={handleChange}
                required
                placeholder="e.g. 5"
                className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy/60 dark:text-sky-light/60 mb-1.5 block">
                Address / area
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="e.g. Baneshwor, Kathmandu"
                className="w-full px-4 py-3 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!form.trade}
            className="w-full py-3.5 rounded-full bg-sky text-white font-semibold shadow-md hover:bg-sky-deep hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {form.trade ? "Submit registration" : "Select a trade to continue"}
          </button>
        </form>
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default WorkerRegister;