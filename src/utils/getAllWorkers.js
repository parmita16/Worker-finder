// Combines the static mock workers with any workers who registered
// through the WorkerRegister form and saved to localStorage.
import mockWorkers from "../data/workers";

export function getAllWorkers() {
  const registered = JSON.parse(localStorage.getItem("workerListings")) || [];

  // registered workers are missing some fields mockWorkers has by default
  // (rating, reviews, etc.) - fill those in so WorkerCard/WorkerDetails don't break
  const normalizedRegistered = registered.map((w) => ({
    id: w.id,
    name: w.name,
    trade: w.trade,
    experience: Number(w.experience) || 0,
    address: w.address,
    phone: w.phone,
    photo: w.photoPreview || "https://i.pravatar.cc/150?img=1",
    rating: 0,
    reviewCount: 0,
    reviews: [],
  }));

  return [...mockWorkers, ...normalizedRegistered];
}