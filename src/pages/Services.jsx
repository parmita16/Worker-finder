import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Hammer, Wrench, Zap, Footprints, PaintBucket, HardHat, Scissors, Car, SearchX,
} from "lucide-react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import WorkerCard from "../components/WorkerCard";
import workers from "../data/workers";

// same trade list as Home, kept in one place would be even better -
// but duplicating here keeps Day 3 self-contained
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

function Services() {
  const [showAuth, setShowAuth] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTrade, setSelectedTrade] = useState(null);

  // if the user arrived via /services?trade=Plumber (from Home page tiles),
  // pre-select that trade on load
  useEffect(() => {
    const tradeFromUrl = searchParams.get("trade");
    if (tradeFromUrl) setSelectedTrade(tradeFromUrl);
  }, [searchParams]);

  const handleSelectTrade = (name) => {
    setSelectedTrade(name);
    setSearchParams({ trade: name }); // keeps the URL shareable/bookmarkable
  };

  const filteredWorkers = selectedTrade
    ? workers.filter((w) => w.trade === selectedTrade)
    : [];

  return (
    <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
      <Navbar onLoginClick={() => setShowAuth(true)} />

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-10 text-center">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-amber mb-5">
          Services
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
          What do you need help with?
        </h1>
        <p className="mt-4 text-navy/70 dark:text-sky-light/70 max-w-lg mx-auto">
          Pick a trade to see verified workers near you.
        </p>
      </section>

      {/* TRADE PICKER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {trades.map(({ name, icon: Icon }) => {
            const isActive = selectedTrade === name;
            return (
              <button
                key={name}
                onClick={() => handleSelectTrade(name)}
                className={`ticket-edge relative rounded-xl p-5 flex flex-col items-center gap-2.5 transition-all duration-200 ${
                  isActive
                    ? "bg-sky text-white shadow-md"
                    : "bg-white dark:bg-navy hover:bg-sky-light dark:hover:bg-white/5"
                }`}
              >
                <Icon size={24} className={isActive ? "text-white" : "text-sky-deep dark:text-sky"} />
                <span className="text-sm font-semibold">{name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        {!selectedTrade && (
          <div className="text-center py-16 text-navy/50 dark:text-sky-light/50">
            <p className="font-display text-lg">Choose a trade above to see workers.</p>
          </div>
        )}

        {selectedTrade && filteredWorkers.length === 0 && (
          <div className="text-center py-16">
            <SearchX size={32} className="mx-auto text-navy/30 dark:text-sky-light/30 mb-4" />
            <p className="font-display text-lg">
              No {selectedTrade.toLowerCase()}s listed yet.
            </p>
            <p className="text-sm text-navy/50 dark:text-sky-light/50 mt-1">
              Try another trade, or check back soon.
            </p>
          </div>
        )}

        {selectedTrade && filteredWorkers.length > 0 && (
          <>
            <p className="text-sm text-navy/60 dark:text-sky-light/60 mb-6">
              {filteredWorkers.length} {selectedTrade.toLowerCase()}
              {filteredWorkers.length > 1 ? "s" : ""} found
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkers.map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>
          </>
        )}
      </section>

      <footer className="border-t border-sky-deep/10 dark:border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy/60 dark:text-sky-light/60">
          <span className="font-display text-lg font-semibold text-sky-deep dark:text-sky-light">
            Sewa
          </span>
          <p>© 2026 Sewa. Built with care, one trade at a time.<br></br> With pure passion by Parmii.Swann!!</p>
        </div>
      </footer>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default Services;