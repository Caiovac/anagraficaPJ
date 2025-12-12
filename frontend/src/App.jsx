// src/App.jsx
import { useEffect, useState } from "react";
import { fetchPersone } from "./api";
import PersonaDetail from "./components/PersonaDetail";
import PersonaList from "./components/PersonaList";
import PersonaDetail from "./components/PersonaDetail";
import PersonaList from "./components/PersonaList";

function App() {
  const [persone, setPersone] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [loadingLista, setLoadingLista] = useState(true);
  const [error, setError] = useState("");
  const [selectedPersonaOld, setSelectedPersonaOld] = useState(null);

  useEffect(() => {
    const loadPersone = async () => {
      try {
        setLoadingLista(true);
        setError("");
        const data = await fetchPersone();
        setPersone(data);      
        setSelectedPersona(null);
        
      } catch (e) {
        console.error(e);
        setError(e.message || "Errore nel caricamento delle persone");
      } finally {
        setLoadingLista(false);
      }
    };

    loadPersone();
  }, []);

  const handleSelectPersona = (persona) => {
    console.log("Persona selezionata:", persona);
    
    if(selectedPersonaOld != persona){
      setSelectedPersonaOld(persona);
      setSelectedPersona(persona);
    }
    else{
      setSelectedPersona(null);
    }
  };

  return (
    <div>
      <h1>Scheda anagrafica</h1>

      {error && (
        <div>
          <strong>Errore:</strong> {error}
        </div>
      )}
      {/* Lista sotto */}
      <PersonaList
        persone={persone}
        loading={loadingLista}
        onSelectPersona={handleSelectPersona}
      />
      {/* Dettaglio sopra */}
      <PersonaDetail persona={selectedPersona} loading={loadingLista} />

      
    </div>
  );
}

export default App;
