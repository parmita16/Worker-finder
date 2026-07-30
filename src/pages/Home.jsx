import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Hammer, Wrench, Zap, Footprints, PaintBucket, HardHat, Scissors, Car,
  ShieldCheck, Star, MapPin, MessageCircle, Quote,
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
function Home() {
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);
  return (
    <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
      <Navbar onLoginClick={() => setShowAuth(true)} />
      {}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0B4F8A 1px, transparent 1px), linear-gradient(90deg, #0B4F8A 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 text-center">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-amber mb-5">
            सेवा · Sewa means service
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.1] max-w-3xl mx-auto">
            The hands that keep your home running.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-navy/70 dark:text-sky-light/70 max-w-xl mx-auto">
            Sewa connects you with carpenters, plumbers, electricians, and other
            skilled tradespeople you can actually trust !! All verified, reviewed,
            and a call away.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowAuth(true)}
              className="px-8 py-3.5 rounded-full bg-sky text-white font-semibold shadow-lg shadow-sky/30 hover:bg-sky-deep hover:-translate-y-0.5 transition-all"
            >
              Find a worker
            </button>
            <button
              onClick={() => setShowAuth(true)}
              className="px-8 py-3.5 rounded-full border-2 border-amber text-amber font-semibold hover:bg-amber hover:text-white hover:-translate-y-0.5 transition-all"
            >
              Register as a worker
            </button>
          </div>
            
          {/* trust strip - styled as ticket stubs */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              ["ALL", "Verified workers"],
              ["12", "Trades covered"],
              ["<24h", "Avg. response"],
            ].map(([stat, label]) => (
              <div
                key={label}
                className="ticket-edge relative bg-white dark:bg-navy rounded-lg py-5 shadow-sm"
              >
                <p className="font-display text-2xl sm:text-3xl font-semibold text-sky-deep dark:text-sky">
                  {stat}
                </p>
                <p className="text-xs sm:text-sm text-navy/60 dark:text-sky-light/60 mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY BLUE-COLLAR WORKERS MATTER */}
      <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-4">
              Why Sewa exists
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Skilled work deserves to be seen.
            </h2>
            <p className="mt-5 text-navy/70 dark:text-sky-light/70 leading-relaxed">
              Every leaking pipe fixed, every wire safely rewired, every pair
              of shoes resoled, someone's hands made that happen. These are
              the tradespeople who keep our homes standing and our lives
              running, yet finding a reliable one is still mostly word of
              mouth and luck.
            </p>
            <p className="mt-4 text-navy/70 dark:text-sky-light/70 leading-relaxed">
              Sewa gives that trust a place to live: a simple directory where
              customers can find verified workers with real reviews, and
              where workers get the visibility and steady income their skill
              has always deserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              [ShieldCheck, "Verified identity", "Every worker's details are confirmed before they're listed."],
              [Star, "Real reviews", "Ratings come only from customers who booked a real job."],
              [MapPin, "Local first", "Find people working in your own neighborhood."],
              [MessageCircle, "Direct contact", "Message or call — no middleman, no waiting."],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="bg-white dark:bg-navy rounded-2xl p-5 shadow-sm border border-sky-deep/5 dark:border-white/5 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Icon size={22} className="text-sky-deep dark:text-sky mb-3" />
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs mt-1.5 text-navy/60 dark:text-sky-light/60 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADES GRID */}
      <section id="trades" className="bg-white dark:bg-navy py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-4">
              Every trade, one place
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Whom can we find you today?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
            {trades.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => navigate(`/services?trade=${encodeURIComponent(name)}`)}
                className="ticket-edge group relative bg-sky-light dark:bg-navy-dark rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-sky hover:text-white transition-all duration-200"
              >
                <Icon size={26} className="text-sky-deep dark:text-sky group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - real sequence, numbering is earned here */}
      <section id="how" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-4">
            How it works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Three steps, no middleman.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            ["01", "Tell us what you need", "Pick a trade : plumbing, wiring, carpentry and describe the job."],
            ["02", "Get matched nearby", "See verified workers near you, with experience and real reviews."],
            ["03", "Hire and rate", "Contact them directly, get the job done, leave an honest review."],
          ].map(([num, title, desc]) => (
            <div key={num} className="relative">
              <p className="font-display text-5xl font-semibold text-sky/25 dark:text-sky/20 mb-3">
                {num}
              </p>
              <p className="font-semibold text-lg">{title}</p>
              <p className="text-sm mt-2 text-navy/60 dark:text-sky-light/60 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-navy dark:bg-black py-20 sm:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center text-white">
          <Quote size={28} className="mx-auto text-amber mb-6" />
          <p className="font-display text-xl sm:text-2xl leading-relaxed">
            "I found an electrician on Sewa within an hour of my wiring going
            out. He showed up the same evening, and I could see his past
            reviews before I even called."
          </p>
          <p className="mt-6 text-sm text-white/60">— Feint, Kathmandu</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          Ready when you are.
        </h2>
        <p className="mt-4 text-navy/60 dark:text-sky-light/60">
          Whether you need a hand today or want to offer one.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={() => setShowAuth(true)}
    className="px-8 py-3.5 rounded-full bg-sky text-white font-semibold shadow-soft-lg hover:bg-sky-deep hover:-translate-y-0.5 active:translate-y-0 transition-all"
  >
    Find a worker
  </button>
  <button
    onClick={() => navigate("/register")}
    className="px-8 py-3.5 rounded-full bg-white dark:bg-navy border-2 border-amber text-amber font-semibold shadow-soft hover:bg-amber hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all"
  >
    Register as a worker
  </button>
</div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sky-deep/10 dark:border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy/60 dark:text-sky-light/60">
          <span className="font-display text-lg font-semibold text-sky-deep dark:text-sky-light">
            Sewa
          </span>
          <p>© 2026 Sewa. Built with care, one trade at a time. <br></br> With pure passion by Parmii.Swann!!</p>
        </div>
      </footer>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default Home;