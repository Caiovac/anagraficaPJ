import { Card, Table, Spinner, Button } from "react-bootstrap";

function PersonaList({ persone = [], loading, onSelectPersona, selectedPersonaId }) {
  return (
    <Card bg="dark" text="light" className="shadow-sm brand-card">
      <Card.Header><strong>Lista persone</strong></Card.Header>

      <Card.Body>
        {loading && (
          <div className="d-flex align-items-center text-secondary">
            <Spinner animation="border" size="sm" className="me-2" />
            <span>Caricamento lista persone...</span>
          </div>
        )}

        {!loading && persone.length === 0 && (
          <p className="text-secondary mb-0">Nessuna persona presente.</p>
        )}

        {!loading && persone.length > 0 && (
          <Table
            variant="dark"
            striped
            hover
            size="sm"
            className="mb-0"
          >
            <thead>
              <tr>
                <th style={{ width: 50 }}>ID</th>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Data nascita</th>
              </tr>
            </thead>

            <tbody>
              {persone.map((p) => (
                <tr key={p.id} className={p.id === selectedPersonaId ? "table-active" : ""}>
                  <td>{p.id}</td>
                  <td>
                    <Button
                      variant="link"
                      className="p-0 link-light"
                      onClick={() => onSelectPersona(p)}
                    >
                      {p.nome}
                    </Button>
                  </td>
                  <td>{p.cognome}</td>
                  <td>{p.data_nascita || "-"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
}

export default PersonaList;
