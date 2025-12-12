// src/components/PersonaDetail.jsx

function PersonaDetail({ persona, loading }) {
  console.log("PersonaDetail props.persona:", persona); // DEBUG

  return (
    <section>
      <h2>Dettaglio persona</h2>

      {loading && <p>Caricamento dati...</p>}

      {!loading && !persona && <p>Seleziona una persona dalla lista.</p>}

      {!loading && persona && (
        <>
          {/* Dati anagrafici */}
          <h3>Dati anagrafici</h3>
          <table>
            <tbody>
              <tr>
                <th>Nome</th>
                <td>{persona.nome}</td>
              </tr>
              <tr>
                <th>Cognome</th>
                <td>{persona.cognome}</td>
              </tr>
              <tr>
                <th>Data di nascita</th>
                <td>{persona.data_nascita || "-"}</td>
              </tr>
              <tr>
                <th>Codice fiscale</th>
                <td>{persona.codice_fiscale || "-"}</td>
              </tr>
              <tr>
                <th>Sesso</th>
                <td>{persona.sesso || "-"}</td>
              </tr>
            </tbody>
          </table>

          {/* Indirizzo, solo se esiste */}
          {persona.indirizzo && (
            <>
              <h3>Indirizzo</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Via</th>
                    <td>{persona.indirizzo.via || "-"}</td>
                  </tr>
                  <tr>
                    <th>CAP</th>
                    <td>{persona.indirizzo.cap || "-"}</td>
                  </tr>
                  <tr>
                    <th>Città</th>
                    <td>{persona.indirizzo.citta || "-"}</td>
                  </tr>
                  <tr>
                    <th>Provincia</th>
                    <td>{persona.indirizzo.provincia || "-"}</td>
                  </tr>
                  <tr>
                    <th>Stato</th>
                    <td>{persona.indirizzo.stato || "-"}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {/* Familiari, solo se ci sono elementi */}
          {persona.familiari && persona.familiari.length > 0 && (
            <>
              <h3>Familiari</h3>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Relazione</th>
                    <th>Data di nascita</th>
                  </tr>
                </thead>
                <tbody>
                  {persona.familiari.map((f) => (
                    <tr key={f.id}>
                      <td>{f.nome}</td>
                      <td>{f.cognome || "-"}</td>
                      <td>{f.relazione || "-"}</td>
                      <td>{f.data_nascita || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default PersonaDetail;
