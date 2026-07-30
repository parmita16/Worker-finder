import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Briefcase,
  Phone,
  MessageCircle,
  ShieldCheck,
  Quote,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { getAllWorkers } from "../utils/getAllWorkers";
import AuthModal from "../components/AuthModal";
function WorkerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);
  const allWorkers = getAllWorkers();
  const foundWorker = allWorkers.find((w) => String(w.id) === id);
  const worker = foundWorker;
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  useEffect(() => {
    if (worker) {
      setReviews(worker.reviews || []);
    }
  }, [worker]);
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) return;
    setReviews((prev) => [
      ...prev,
      {
        ...reviewForm,
        rating: Number(reviewForm.rating),
      },
    ]);
    setReviewForm({
      name: "",
      rating: 5,
      comment: "",
    });
  };
  if (!worker) {
    return (
      <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
        <Navbar onLoginClick={() => setShowAuth(true)} />
        <div className="max-w-2xl mx-auto px-5 py-24 text-center">
          <p className="font-display text-2xl font-semibold">Worker not found</p>
          <p className="mt-3 text-navy/60 dark:text-sky-light/60">
            This worker profile doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="mt-6 px-6 py-3 rounded-full bg-sky text-white font-semibold hover:bg-sky-deep transition-all"
          >
            Back to Services
          </button>
        </div>
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </div>
    );
  }
  return (
    <div className="bg-sky-light dark:bg-navy-dark text-navy dark:text-sky-light min-h-screen">
      <Navbar onLoginClick={() => setShowAuth(true)} />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-sky-deep dark:text-sky hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back
        </button>
        {}
        <div className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <img
              src={worker.photo}
              alt={worker.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-sky-light dark:border-white/10 shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display text-2xl sm:text-3xl font-semibold">
                  {worker.name}
                </h1>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-deep dark:text-sky bg-sky-light dark:bg-white/10 px-2.5 py-1 rounded-full">
                  <ShieldCheck size={13} /> Verified
                </span>
              </div>
              <p className="text-sm font-semibold text-amber uppercase tracking-wide mt-1.5">
                {worker.trade}
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-sm">
                <Star size={16} className="text-amber fill-amber" />
                <span className="font-semibold">{worker.rating}</span>
                <span className="text-navy/50 dark:text-sky-light/50">
                  ({worker.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
          {}
          <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-sky-deep/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-light dark:bg-white/5 flex items-center justify-center shrink-0">
                <Briefcase size={18} className="text-sky-deep dark:text-sky" />
              </div>
              <div>
                <p className="text-xs text-navy/50 dark:text-sky-light/50">Experience</p>
                <p className="font-semibold text-sm">{worker.experience} years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-light dark:bg-white/5 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-sky-deep dark:text-sky" />
              </div>
              <div>
                <p className="text-xs text-navy/50 dark:text-sky-light/50">Location</p>
                <p className="font-semibold text-sm">{worker.address}</p>
              </div>
            </div>
          </div>
{}
<div className="flex flex-col sm:flex-row gap-3 mt-8">
  <a
    href={`tel:${worker.phone}`}
    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-sky text-white font-semibold shadow-md hover:bg-sky-deep hover:shadow-lg transition-all"
  >
    <Phone size={16} />
    Call {worker.phone}
  </a>
  <a
    href={`sms:${worker.phone}`}
    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-amber text-amber font-semibold hover:bg-amber hover:text-white transition-all"
  >
    <MessageCircle size={16} />
    Message
  </a>
</div> {}
</div> {}
{}
<div className="mt-10">
  <h2 className="font-display text-xl sm:text-2xl font-semibold mb-5">
    What customers are saying
  </h2>
  {reviews.length === 0 ? (
    <p className="text-sm text-navy/50 dark:text-sky-light/50 mb-6">
      No reviews yet — be the first to hire and review {worker.name.split(" ")[0]}.
    </p>
  ) : (
    <div className="space-y-4 mb-8">
      {reviews.map((review, i) => (
        <div key={i} className="bg-white dark:bg-navy rounded-xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, starIdx) => (
                <Star
                  key={starIdx}
                  size={14}
                  className={
                    starIdx < review.rating
                      ? "text-amber fill-amber"
                      : "text-navy/20 dark:text-sky-light/20"
                  }
                />
              ))}
            </div>
            <Quote size={16} className="text-sky/30 shrink-0" />
          </div>
          <p className="text-sm mt-3 text-navy/80 dark:text-sky-light/80 leading-relaxed">
            {review.comment}
          </p>
          <p className="text-xs font-semibold mt-3 text-navy/50 dark:text-sky-light/50">
            — {review.name}
          </p>
        </div>
      ))}
    </div>
  )}
  {}
  <div className="bg-white dark:bg-navy rounded-xl p-5 sm:p-6 shadow-sm">
    <h3 className="font-display font-semibold mb-4">Leave a review</h3>
    <form onSubmit={handleReviewSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your name"
        value={reviewForm.name}
        onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
        required
        className="w-full px-4 py-2.5 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
      />
      <div className="flex items-center gap-2">
        <span className="text-sm text-navy/60 dark:text-sky-light/60">Rating:</span>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            type="button"
            key={num}
            onClick={() => setReviewForm({ ...reviewForm, rating: num })}
          >
            <Star
              size={20}
              className={
                num <= reviewForm.rating
                  ? "text-amber fill-amber"
                  : "text-navy/20 dark:text-sky-light/20"
              }
            />
          </button>
        ))}
      </div>
      <textarea
        placeholder="How was the work?"
        value={reviewForm.comment}
        onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
        required
        rows={3}
        className="w-full px-4 py-2.5 rounded-lg border border-sky-deep/15 dark:border-white/15 bg-sky-light/40 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-sky resize-none"
      />
      <button
        type="submit"
        className="px-6 py-2.5 rounded-full bg-sky text-white font-semibold text-sm hover:bg-sky-deep transition-all"
      >
        Submit review
      </button>
    </form>
  </div>
</div> {}
</div> {}
<footer className="border-t border-sky-deep/10 dark:border-white/10 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy/60 dark:text-sky-light/60">
          <span className="font-display text-lg font-semibold text-sky-deep dark:text-sky-light">
            Sewa
          </span>
          <p>© 2026 Sewa. Built with care, one trade at a time.</p>
        </div>
      </footer>
           {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default WorkerDetails;
