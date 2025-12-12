import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { fetchPersone } from "./api";
import PersonaList from "./components/PersonaList";
import PersonaDetail from "./components/PersonaDetail";
import "./App.css";

function App() {
  const [persone, setPersone] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [loadingLista, setLoadingLista] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPersone = async () => {
      try {
        setLoadingLista(true);
        setError("");
        const data = await fetchPersone();
        setPersone(Array.isArray(data) ? data : []);
        setSelectedPersona(null);
      } catch (e) {
        setError(e.message || "Errore nel caricamento delle persone");
      } finally {
        setLoadingLista(false);
      }
    };

    loadPersone();
  }, []);

  const handleSelectPersona = (persona) => {
    setSelectedPersona((prev) => (prev?.id === persona.id ? null : persona));
  };

  return (
    <div className="page">
      <Container className="py-4">
        <h1 className="mb-4 page-title">Scheda anagrafica</h1>

        {error && (
          <Alert variant="danger">
            <strong>Errore:</strong> {error}
          </Alert>
        )}

        <Row className="g-3">
          <Col md={4}>
            <PersonaList
              persone={persone}
              loading={loadingLista}
              onSelectPersona={handleSelectPersona}
              selectedPersonaId={selectedPersona?.id ?? null}
            />
          </Col>

          <Col md={8}>
            <PersonaDetail persona={selectedPersona} loading={loadingLista} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
