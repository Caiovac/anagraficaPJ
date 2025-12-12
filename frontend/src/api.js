const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";


export async function fetchPersone() {
  const response = await fetch(`${API_BASE_URL}/api/persone`);

  if (!response.ok) {
    throw new Error("Errore nel recupero delle persone");
  }

  const data = await response.json();
  return data;
}
