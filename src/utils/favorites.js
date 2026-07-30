// Simple localStorage-backed favorites list, storing worker ids.
export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function isFavorite(workerId) {
  return getFavorites().includes(workerId);
}

export function toggleFavorite(workerId) {
  const current = getFavorites();
  const updated = current.includes(workerId)
    ? current.filter((id) => id !== workerId)
    : [...current, workerId];
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}