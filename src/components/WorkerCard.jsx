import { Star, MapPin, Briefcase, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WorkerCard({ worker }) {
  const navigate = useNavigate();

  return (
    <div
      // ticket-edge keeps the same signature motif from Day 1/2
      className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 cursor-pointer"
      onClick={() => navigate(`/worker/${worker.id}`)}
    >
      <div className="flex items-center gap-4">
        <img
          src={worker.photo}
          alt={worker.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-sky-light dark:border-white/10"
        />
        <div className="min-w-0">
          <p className="font-display font-semibold text-lg truncate">{worker.name}</p>
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">
            {worker.trade}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm">
        <Star size={15} className="text-amber fill-amber" />
        <span className="font-semibold">{worker.rating}</span>
        <span className="text-navy/50 dark:text-sky-light/50">
          ({worker.reviewCount} reviews)
        </span>
      </div>

      <div className="mt-3 space-y-1.5 text-sm text-navy/70 dark:text-sky-light/70">
        <p className="flex items-center gap-2">
          <Briefcase size={14} className="text-sky-deep dark:text-sky shrink-0" />
          {worker.experience} years experience
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={14} className="text-sky-deep dark:text-sky shrink-0" />
          {worker.address}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation(); // don't trigger card navigation
          window.location.href = `tel:${worker.phone}`;
        }}
        className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-light dark:bg-white/5 text-sky-deep dark:text-sky font-semibold text-sm hover:bg-sky hover:text-white transition-all"
      >
        <Phone size={15} /> Contact
      </button>
    </div>
  );
}

export default WorkerCard;