function PersonaList({ persone, loading, onSelectPersona }) {
  return (
    <section>
      <h2>Lista persone</h2>

      {loading && <p>Caricamento lista persone...</p>}

      {!loading && persone.length === 0 && <p>Nessuna persona presente.</p>}

      {!loading && persone.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome (cliccabile)</th>
              <th>Cognome</th>
              <th>Data nascita</th>
            </tr>
          </thead>
          <tbody>
            {persone.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onSelectPersona(p)}
                  >
                    {p.nome}
                  </button>
                </td>
                <td>{p.cognome}</td>
                <td>{p.data_nascita || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default PersonaList;
