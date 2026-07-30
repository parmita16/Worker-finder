import mockWorkers from "../data/workers";
export function getAllWorkers() {
  const registered = JSON.parse(localStorage.getItem("workerListings")) || [];
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
