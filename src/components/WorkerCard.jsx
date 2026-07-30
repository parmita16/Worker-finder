import { useState } from "react";
import { Star, MapPin, Briefcase, Phone, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../utils/favorites";

function WorkerCard({ worker }) {
  const navigate = useNavigate();
  const [favorited, setFavorited] = useState(isFavorite(worker.id));

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(worker.id);
    setFavorited(!favorited);
  };

  return (
    <div
      className="ticket-edge relative bg-white dark:bg-navy rounded-t-2xl rounded-b-md shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 p-6 cursor-pointer border border-sky-deep/[0.04] dark:border-white/[0.04]"
      onClick={() => navigate(`/worker/${worker.id}`)}
    >
      <button
        onClick={handleFavoriteClick}
        aria-label="Toggle favorite"
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-sky-light dark:hover:bg-white/10 transition-colors"
      >
        <Heart
          size={18}
          className={favorited ? "text-amber fill-amber" : "text-navy/25 dark:text-sky-light/25"}
        />
      </button>

      <div className="flex items-center gap-4">
        <img
          src={worker.photo}
          alt={worker.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-sky-light dark:ring-white/10 ring-offset-2 ring-offset-white dark:ring-offset-navy"
        />
        <div className="min-w-0 pr-6">
          <p className="font-display font-semibold text-lg leading-tight truncate">
            {worker.name}
          </p>
          <p className="text-[11px] font-bold text-amber uppercase tracking-wider mt-1">
            {worker.trade}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm">
        <Star size={15} className="text-amber fill-amber" />
        <span className="font-semibold">{worker.rating || "New"}</span>
        {worker.reviewCount > 0 && (
          <span className="text-navy/45 dark:text-sky-light/45">
            · {worker.reviewCount} reviews
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2 text-sm text-navy/65 dark:text-sky-light/65">
        <p className="flex items-center gap-2.5">
          <Briefcase size={14} className="text-sky-deep dark:text-sky shrink-0" />
          {worker.experience} years experience
        </p>
        <p className="flex items-center gap-2.5">
          <MapPin size={14} className="text-sky-deep dark:text-sky shrink-0" />
          <span className="truncate">{worker.address}</span>
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = `tel:${worker.phone}`;
        }}
        className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-light dark:bg-white/[0.06] text-sky-deep dark:text-sky font-semibold text-sm hover:bg-sky hover:text-white transition-colors"
      >
        <Phone size={15} /> Contact
      </button>
    </div>
  );
}

export default WorkerCard;