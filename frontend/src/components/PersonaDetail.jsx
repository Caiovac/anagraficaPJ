import { Card, Table, Spinner } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";

function PersonaDetail({ persona, loading }) {
  const familiari = persona?.familiari ?? [];

  return (
    <Card bg="dark" text="light" className="shadow-sm brand-card">
      <Card.Header><strong>Dettaglio persona</strong></Card.Header>

      <Card.Body>
        {loading && (
          <div className="d-flex align-items-center text-secondary mb-2">
            <Spinner animation="border" size="sm" className="me-2" />
            <span>Caricamento dati...</span>
          </div>
        )}

        {!loading && !persona && (
          <p className="text-secondary mb-0">Seleziona una persona dalla lista.</p>
        )}

        <Fade in={!!persona} mountOnEnter unmountOnExit>
          <div>
            {persona && (
              <>
                <h6 className="mt-3 mb-2 text-info">Dati anagrafici</h6>
                <Table variant="dark" bordered size="sm" className="mb-3">
                  <tbody>
                    <tr><th style={{ width: "35%" }}>Nome</th><td>{persona.nome}</td></tr>
                    <tr><th>Cognome</th><td>{persona.cognome}</td></tr>
                    <tr><th>Data di nascita</th><td>{persona.data_nascita || "-"}</td></tr>
                    <tr><th>Codice fiscale</th><td>{persona.codice_fiscale || "-"}</td></tr>
                    <tr><th>Sesso</th><td>{persona.sesso || "-"}</td></tr>
                  </tbody>
                </Table>

                {persona.indirizzo && (
                  <>
                    <h6 className="mt-3 mb-2 text-info">Indirizzo</h6>
                    <Table variant="dark" bordered size="sm" className="mb-3">
                      <tbody>
                        <tr><th style={{ width: "35%" }}>Via</th><td>{persona.indirizzo.via || "-"}</td></tr>
                        <tr><th>CAP</th><td>{persona.indirizzo.cap || "-"}</td></tr>
                        <tr><th>Città</th><td>{persona.indirizzo.citta || "-"}</td></tr>
                        <tr><th>Provincia</th><td>{persona.indirizzo.provincia || "-"}</td></tr>
                        <tr><th>Stato</th><td>{persona.indirizzo.stato || "-"}</td></tr>
                      </tbody>
                    </Table>
                  </>
                )}

                {familiari.length > 0 && (
                  <>
                    <h6 className="mt-3 mb-2 text-info">Familiari</h6>
                    <Table variant="dark" bordered hover striped size="sm">
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Cognome</th>
                          <th>Relazione</th>
                          <th>Data di nascita</th>
                        </tr>
                      </thead>
                      <tbody>
                        {familiari.map((f) => (
                          <tr key={f.id}>
                            <td>{f.nome}</td>
                            <td>{f.cognome || "-"}</td>
                            <td>{f.relazione || "-"}</td>
                            <td>{f.data_nascita || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                )}
              </>
            )}
          </div>
        </Fade>
      </Card.Body>
    </Card>
  );
}

export default PersonaDetail;
