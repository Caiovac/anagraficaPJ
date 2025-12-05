const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function fetchPersone() {
  const res = await fetch(`${API_BASE_URL}/api/persone`);
  if (!res.ok) {
    throw new Error("Errore nel recupero delle persone");
  }
  return res.json();
}

export async function fetchPersona(id) {
  const res = await fetch(`${API_BASE_URL}/api/persone/${id}`);
  if (!res.ok) {
    throw new Error("Errore nel recupero della persona");
  }
  return res.json();

}
