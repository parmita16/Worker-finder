import { useState } from "react";
import {
  ShieldCheck, Star, HandCoins, Users, Target, Heart, ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
function About() {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
      <Navbar onLoginClick={() => setShowAuth(true)} />
      {}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-14 sm:pb-16 text-center">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-amber mb-5">
          About Sewa
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight max-w-2xl mx-auto">
          Built for the people who fix, build, and keep things running.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-navy/70 dark:text-sky-light/70 max-w-xl mx-auto">
          Sewa is a directory that puts skilled local tradespeople and the
          people who need them in the same place, nothing more complicated
          than that.Sewa connects customers with reliable service providers
          and helps workers find genuine customers.
        </p>
      </section>
      {}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-sm p-8 sm:p-12">
          <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-4">
            The problem
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-snug">
            Finding a plumber shouldn't depend on luck.
          </h2>
          <p className="mt-5 text-navy/70 dark:text-sky-light/70 leading-relaxed">
            Ask around and you'll notice a pattern!! Everyone finds their
            electrician, carpenter, or cobbler through a neighbor's
            recommendation, an old phone number, or trial and error. Skilled
            workers rarely get the visibility their work deserves, and
            customers rarely get to see proof of quality before they hire.
          </p>
          <p className="mt-4 text-navy/70 dark:text-sky-light/70 leading-relaxed">
            Sewa exists to close that gap, a simple, honest place where a
            worker's experience and reputation are visible upfront, and
            where hiring someone doesn't require asking five people first.
          </p>
        </div>
      </section>
      {}
      <section className="bg-white dark:bg-navy py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-4">
              What we stand for
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Three things Sewa won't compromise on.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              [ShieldCheck, "Trust first", "Every worker profile is meant to be verifiable i.e. real names, real experience, real contact details."],
              [Star, "Earned reputation", "Reviews come only from real jobs. No worker can buy their way to the top of a list."],
              [HandCoins, "Fair access", "No hidden fees, no bidding wars. Workers get direct access to customers, not a middleman's cut."],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="bg-sky-light dark:bg-navy-dark rounded-2xl p-7 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <Icon size={24} className="text-sky-deep dark:text-sky mb-4" />
                <p className="font-semibold">{title}</p>
                <p className="text-sm mt-2 text-navy/60 dark:text-sky-light/60 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-sm p-8">
            <Users size={22} className="text-sky-deep dark:text-sky mb-4" />
            <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-2">
              For customers
            </p>
            <h3 className="font-display text-xl font-semibold mb-3">
              See who's coming before they arrive.
            </h3>
            <p className="text-sm text-navy/70 dark:text-sky-light/70 leading-relaxed">
              Browse workers by trade, check their experience and past
              reviews, and reach out directly, no back-and-forth with an
              agency, no guessing.
            </p>
          </div>
          <div className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-sm p-8">
            <Target size={22} className="text-amber mb-4" />
            <p className="text-xs tracking-widest uppercase font-semibold text-amber mb-2">
              For workers
            </p>
            <h3 className="font-display text-xl font-semibold mb-3">
              Let your work speak for itself.
            </h3>
            <p className="text-sm text-navy/70 dark:text-sky-light/70 leading-relaxed">
              List your trade, experience, and contact details. Customers
              find you directly, and every good job adds to a review history
              that's genuinely yours.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="bg-navy dark:bg-black py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-5 text-center text-white">
          <Heart size={24} className="mx-auto text-amber mb-5" />
          <p className="font-display text-xl sm:text-2xl leading-relaxed">
            Sewa is a student project, built one feature at a time but the
            idea behind it is simple and real: skilled work deserves to be
            easy to find.
          </p>
        </div>
      </section>
      {}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          See it in action.
        </h2>
        <p className="mt-4 text-navy/60 dark:text-sky-light/60">
          Browse the trades Sewa covers, or get started right away.
        </p>
        <button
          onClick={() => setShowAuth(true)}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky text-white font-semibold shadow-lg shadow-sky/30 hover:bg-sky-deep transition-all"
        >
          Get started <ArrowRight size={18} />
        </button>
      </section>
      <footer className="border-t border-sky-deep/10 dark:border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy/60 dark:text-sky-light/60">
          <span className="font-display text-lg font-semibold text-sky-deep dark:text-sky-light">
            Sewa
          </span>
          <p>© 2026 Sewa. Built with care, one trade at a time.<br></br>With pure passion by Parmii.Swann!!</p>
        </div>
      </footer>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}
export default About;
